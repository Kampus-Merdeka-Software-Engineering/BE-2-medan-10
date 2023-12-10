const express = require ('express');
const Payment = require ('../model/payment.js');
const app = express();

const router = express.Router()

router.post('/payments', async(req,res)=>{
    try{
        let payment ={
            name: req.body.name,
            email:req.body.email,
            address:req.body.address,
            phone_number:req.body.phone_number,
            description:req.body.description,
            coupon:req.body.coupon,
            bank:req.body.bank
        }

        await Payment.create(payment);

        res.status(201).send({Message:"Payment Created"})
    }   catch(error){
        res.send(error);
    }

});


module.exports = router;