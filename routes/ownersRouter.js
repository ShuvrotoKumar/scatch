const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.send("hey");
});


if(process.env.NODE_ENV === "development"){
router.post("/create", function(req, res){
    res.send("hey");
});
}
module.exports = router;