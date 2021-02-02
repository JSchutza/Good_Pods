const {User} = require("./db/models")
const loginUser = (req, res, user) => {
  req.session.auth = {userId: user.id, username: user.name}
}


const logoutUser = (req, res) => {
  console.log(req.session)
  delete req.session.auth;
  console.log(req.session)
}
const restoreUser = async (req, res, next) => {
 
  

  if (req.session.auth) {
    const { userId, username } = req.session.auth;

    try {
      const user = await User.findByPk(userId);

      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};


module.exports = { loginUser, logoutUser, restoreUser}