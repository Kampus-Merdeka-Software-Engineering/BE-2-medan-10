const express = require ('express');
const User = require ('../model/user.js');
const app = express();

const router = express.Router()

router.post('/users', async(req,res)=>{
    try{
        let user ={
            name: req.body.name,
            email:req.body.email,
            password:req.body.password
        }

        await User.create(user);

        res.status(201).send({Message:"User Created"})
    }   catch(error){
        res.send(error);
    }

});


module.exports = router;