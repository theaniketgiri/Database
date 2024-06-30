const User = require('../models/User');
const {validationResult} = require('express-validator');

const branch = require('../models/branch');

const registerUser = async (req, res) => {  
    try{
       const errors =  validationResult(req);
         if(!errors.isEmpty()){
              return res.status(200).json({
                success : false,
                msg : errors.array()
              });
         }
         const {name, email, password} = req.body;

         const existingUser = await User.findone({email});
            if(existingUser){
                return res.status(400).json({
                    success : false,
                    msg : 'User already exists'
                });
            }

           const hashedPassword =  bcrypt.hash(password, 10, async (err, hash) => {
                if(err){
                    return res.status(500).json({
                        success : false,
                        msg : 'Something went wrong'
                    });
                }

             const user =  new User({
                    name,
                    email,
                    password : hashedPassword
                });
                const userData = await  user.save();

                return res.status(201).json({
                    success : true,
                    data : userData
                });

            });

    }catch(error){
        return res.status(400).json({
            success : false,
            msg : error.message
        });
    }
}

module.exports = {
    registerUser
}   