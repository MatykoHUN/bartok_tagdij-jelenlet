const Schema = require('mongoose').Schema;
var db = require('../config/db');

// Comment model for the database.
const Comment = db.model('Comment', {
    user: { //User who made the comment
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    group: { // Group to which the comment belongs
        type: Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    date: { // Date of the comment
        type: Date,
        required: true
    },
    comment: { // The comment text
        type: String,
        required: true
    },
});

module.exports = Comment;