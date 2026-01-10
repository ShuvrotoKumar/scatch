const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function(req,res,next){
    if(!req.cookies.token){
        req.flash("error","unauthorized");
        return res.redirect("/users/login");
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findOne({email:decoded.email})
        .select("_password");
    req.user = user;
    next();
    } catch (error) {
        req.flash("error","unauthorized");
        return res.redirect("/users/login");
    }
}