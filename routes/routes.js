const express = require("express")
const router = express.Router();


router.route("/").get((req,res) =>{
    res.send("salam peymanam....")
});





module.exports = router;