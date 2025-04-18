const Schema = require('mongoose').Schema;
var db = require('../config/db');

// MembershipFee model for the database.
const MembershipFee = db.model('MembershipFee', {
    user: { // User who pays the fee
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    month: {
        type: String, // Format "YYYY-MM"
        required: true
    },
    amount: Number, // Amount of the fee
    paid: { // Indicates if the fee is paid
        type: Boolean,
        default: false
    },
    paidAt: { // Date when the fee was paid
        type: Date 
    }
});

module.exports = MembershipFee;