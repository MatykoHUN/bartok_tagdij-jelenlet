const Schema = require('mongoose').Schema;
var db = require('../config/db');

// Attendance model for the database.
const Attendance = db.model('Attendance', {
    user: { // User who attended the rehearsal
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    group: { // Group to which the user belongs
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    date: { // Date of the rehearsal
        type: Date,
        required: true
    },
    present: {  // Indicates if the user was present at the rehearsal
        type: Boolean,
        default: false
    }
});

module.exports = Attendance;