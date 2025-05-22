const mw = require("../../../middlewares/deleteuser");

test('deleteuser middleware should delete a user and redirect to /admin', async () => {
    const objRepo = null;
    const req = {};
    const next = jest.fn(() => { })
    const res = {
        redirect: jest.fn((where) => {
        }),
        locals: {
            user: {
                deleteOne: () => {
                    return Promise.resolve();
                }
            }
        }
    }
    await mw(objRepo)(req, res, next);
    expect(next).not.toBeCalled();
    expect(res.redirect).toBeCalledWith('/admin');
});
test('deleteuser middleware should fail on delete fail', async () => {
    const objRepo = null;
    const req = {};
    const next = jest.fn(() => { })
    const res = {
        redirect: jest.fn((where) => {
        }),
        locals: {
            user: {
                deleteOne: () => {
                    return Promise.reject("nodb");
                }
            }
        }
    }
    await mw(objRepo)(req, res, next);
    expect(next).toBeCalledWith("nodb");
    expect(res.redirect).not.toBeCalledWith('/admin');
});
test('deleteuser middleware should call next with error if user is not loaded', async () => {
    const objRepo = null;
    const req = {};
    const errorMessage = 'Nincs betöltve a törlendő felhasználó!';
    const next = jest.fn();
    const res = {
        locals: {
        }
    };

    await mw(objRepo)(req, res, next);

    expect(next).toBeCalledWith(errorMessage);
});
