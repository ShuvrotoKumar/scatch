const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../controllers/middlewares");
router.get("/", function (req, res){
    let error = req.flash("error");
    // let success = req.flash("success");
    res.render("index", {error});
});
router.get("/shop", isLoggedIn, function (req, res){
    res.render("shop");
});
router.get("/contact", isLoggedIn, function (req, res){
    res.render("contact");
});
router.get("/about", isLoggedIn, function (req, res){
    res.render("about");
});
router.get("/cart", isLoggedIn, function (req, res){
    res.render("cart");
});
router.get("/checkout", isLoggedIn, function (req, res){
    res.render("checkout");
});
router.get("/login", function (req, res){
    res.render("login");
});
router.get("/register", function (req, res){
    res.render("register");
});
module.exports = router;