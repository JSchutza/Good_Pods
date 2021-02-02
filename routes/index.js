var express = require('express');
var router = express.Router();
const {User} = require("../db/models")
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler} = require("../lib/util")

router.get("/login", csrfProtection,  (req, res) => {
  res.render("login", {csrfToken: req.csrfToken()})
})

router.post("/login", csrfProtection, asyncHandler(async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({where: {email}})
  req.session.user = user;
  const RealPassword = user.hashedPassword.toString()
  
  const passwordMatch = await bcrypt.compare(password, RealPassword)
  if (passwordMatch){
    return req.session.save(() => {
      res.render("profile")
    })

    //change this with error validation
  }else {
    throw new Error("Invalid User credentials")
  }
}) )

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});



module.exports = router;
