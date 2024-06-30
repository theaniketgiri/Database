const mongoose= require("mongoose")

const permissionSchema = new   mongoose.Schema({  
    
    user_id: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    permission: [
        {
        permission_name: String,
        permission_value: [number]
        }
    ]
});

module.exports = mongoose.model('Permission', permissionSchema);