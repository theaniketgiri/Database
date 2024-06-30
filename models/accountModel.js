const mongoose= require("mongoose")

const accountSchema = new   mongoose.Schema({  

    totalspending: {
        type: Number,
        required: true
    },
    totalincome: {
        type: Number,
        required: true
    },
    totalbalance:{
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Account', accountSchema);