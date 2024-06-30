const mongoose= require("mongoose")

const inventrySchema = new   mongoose.Schema({  

   sku : {
       type: String,
       required: true
   },
   price : {
       type: Number,
       required: true
   },
});

module.exports = mongoose.model('Inventry', inventrySchema);