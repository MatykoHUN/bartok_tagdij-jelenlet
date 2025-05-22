const mw = require("../../../middlewares/loadOneGroup");

test('finds and loads one group', async () => {
    const objRepo = {
        groupModel: {
            findOne: jest.fn((_param1) => {
                return Promise.resolve("testGroup");
            })
        }

    };
    const req = {
        params: {
            id: 'testID'
        }
    };
    const next = jest.fn(() => { })
    const res = {
        locals: {

        }
    }
    await mw(objRepo)(req, res, next);
    expect(res.locals.group).toBe("testGroup");
    expect(objRepo.groupModel.findOne).toBeCalledWith({ _id: req.params.id });
    expect(next).toBeCalled();
});

test('loadOneGroup should call next with an error', async () => {
    const objRepo = {
        groupModel: {
            findOne: jest.fn(() => Promise.reject("dbError"))
        }
    };

    const req = {
        params: {
            id: 'testID'
        }
    };

    const next = jest.fn();
    const res = {
        locals: {},
        redirect: jest.fn()
    };

    await mw(objRepo)(req, res, next);

    expect(objRepo.groupModel.findOne).toBeCalledWith({ _id: req.params.id });
    expect(next).toBeCalledWith("dbError");
    expect(res.redirect).not.toBeCalled();
});
test('loadOneGroup should call next with "Group not found" if no group is returned', async () => {
    const objRepo = {
        groupModel: {
            findOne: jest.fn(() => Promise.resolve(null)) 
        }
    };

    const req = {
        params: { id: 'missingID' }
    };

    const next = jest.fn();
    const res = {
        locals: {},
        redirect: jest.fn()
    };

    await mw(objRepo)(req, res, next);

    expect(objRepo.groupModel.findOne).toBeCalledWith({ _id: req.params.id });
    expect(next).toBeCalledWith('Group not found');
    expect(res.locals.group).toBeUndefined();
});