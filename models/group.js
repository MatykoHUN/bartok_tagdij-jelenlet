const Schema = require('mongoose').Schema;  
var db = require('../config/db');  

// Group model for the database.
const Group = db.model('Group', {
    name: String, // Name of the group  
    description: { // Description of the group  
        tpye: String,
        default: 'A _name nevû csoport célja... . A csoport vezetõi _leaders. Próbák helyszíne:.... Próbák idõpontja.... A csoport nyáron _summerActivity' //Template for description
    },
    leaders: [{ //Leaders of the group. Can be one or multiple leaders (usually 2)
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    summerActivity: { // Indicates if the group is active during summer
        type: Boolean,
        default: false
        //Groups that are not active during summer will not need to pay for July and August
    },
    dayOfRehersals: { // Days of the week when the group has rehearsals
        type: [String]
    },
});  

module.exports = Group;