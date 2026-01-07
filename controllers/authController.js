module.exports.registerUser = function(req, res){

    try{
         let {email,fullname,password} = req.body;

         let user =userModel.findOne({email})

         if(user){
            return res.send("user already exists");
         }

         bcrypt.genSalt(10, async function (err, salt){
            bcrypt.hash(password, salt,async function(err, hash){
                if(err){
                    console.log(err.message);
                }
                else {
                    let user = await usermodel.create({email,fullname,password:hash}); 
                  let token = generateToken(user);
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
}
module.exports.loginUser = async function(req, res){
    let {email,password} = req.body;

    let user = await userModel.findOne({email});

    if(!user){
        return res.send("user not found");
    }
    bcrypt.compare(password,user.password,function(err, result){
        // res.send(result);
        if(result){
            let token = generateToken(user);
            res.cookie("token", token);
            res.send("login successful");
        }else{
            res.send("login failed");
        }
    })
}