const Schema = require('mongoose').Schema;  
var db = require('../config/db');  

// Group model for the database.
const Group = db.model('Group', {
     name: String,
    description: { // Description of the group  
           type: String, // Corrected "tpye" to "type"
           default: 'A _name nevû csoport célja... . A csoport vezetõi _leaders. Próbák helyszíne:.... Próbák idõpontja.... A csoport nyáron _summerActivity' //Template for description
    },
    summerActivity: { // Indicates if the group is active during summer
        type: Boolean,
        default: false
        //Groups that are not active during summer will not need to pay for July and August
    },
});  

module.exports = Group;