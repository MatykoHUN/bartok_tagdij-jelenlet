const Schema = require('mongoose').Schema;
var db = require('../config/db');

// User model for the database.
const User = db.model('User', {
    //If the user is a minor, the parentName, parentEmail and parentPhone fields MUST be used!
    //If the user is an adult, these fields are optional.

    name: String, // Name of the user
    password: String, // Password of the user
    parentName: { // Name of the parent (only if the user is a minor)
        type: String,
        default: 'N/A'
    },
    email: String,  // Email of the user
    parentEmail: { // Email of the parent (only if the user is a minor)
        type: String,
        default: 'N/A'
    },
    phone: String,  // Phone number of the user
    parentPhone: { // Phone number of the parent (only if the user is a minor)
        type: String,
        default: 'N/A'
    },
    dateofbirth: Date,  // Date of birth of the user
    groups: [{ // Groups of the user (usually 1, but can be more)
        type: Schema.Types.ObjectId,
        ref: 'Group'
    }],
    //Leaders can manage users in their own groups (create/modify/delete). Check the membershipFee status of the user and modify attandance.
    isLeader: { // Is the user a leader of a group?
        type: Boolean,
        default: false
    },
    leaderInGroups: [{ // The group the user is a leader of (if any)
        type: Schema.Types.ObjectId,
        ref: 'Group',
        default: null
    }],
    //Admins can modify the database, create groups, and manage users.
    isAdmin: {
        type: Boolean,
        default: false
    },
});

module.exports = User;