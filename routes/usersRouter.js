const express = require("express");
const router = express.Router();
const usermodel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.get("/", function(req, res){
    res.send("hey");
});

router.post("/register", async function(req, res){

    try{
         let {email,fullname,password} = req.body;

         bcrypt.genSalt(10, async function (err, salt){
            bcrypt.hash(password, salt,async function(err, hash){
                if(err){
                    console.log(err.message);
                }
                else {
                    let user = await usermodel.create({email,fullname,password:hash}); 
                  let token = jwt.sign({email,id:user_id}, "vghshgfxhbgs")
                  res.cookie("token", token);
                  res.send("user created successfully");
                }
            })
         })
         
    } catch(err){
        console.log(err.message);
    }
//     let {email,fullname,password} = req.body;
//  let user = await usermodel.create({email,fullname,password});  
// });

// router.post("/login", async function(req, res){
//     res.send("hey");
});
module.exports = router;