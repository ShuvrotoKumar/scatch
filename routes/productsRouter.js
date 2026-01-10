const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");
router.get("/", function(req, res){
    res.send("hey");
});

router.post("/create", upload.single("image"), function(req, res){
    let product = productModel.create({
        image:req.file.buffer,
     })
});

module.exports = router;