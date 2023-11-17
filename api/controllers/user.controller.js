const User = require('../models/user.model');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

module.exports.create = (req, res, next) => {
  // Verificar si el usuario ya existe
  User.findOne({ mail: req.body.mail })
    .then((user) => {
      if (user) {
        return res.status(400).json({ error: 'mail already exists' });
      } else {
        
        User.create(req.body)
          .then((newUser) => {
            res.status(201).json(newUser);
          })
          .catch(next);
      }
    })
    .catch(next);
};


module.exports.detail = (req, res, next) => {
  res.json({ user: req.user });
};




/*module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      if (user) {
        res.status(401).json({ error: "unauthorized" });
      } else {
        res.status(201).json(user);
      }
    })
    .catch(next);
}; */

 module.exports.login = (req, res, next) => {
  console.log(req.body)
  User.findOne({ mail: req.body.mail })
    .then((user) => {
      if (user) {
        return user.checkPassword(req.body.password).then((match) => {
          if (match) {
            console.log("passwormatch")
            req.session.userId = user.id;
            res.json(user);
          } else {
            res.status(401).json({ error: "unauthorized" });
          }
        });
      } else {
        res.status(401).json({ error: "unauthorized" });
      }
    })
    .catch(next);
};

 /*  function renderInvalidUsername() {
    res.render('users/login', {
      user: req.body,
      errors: {
        password: 'password or username no valid'
      }
    })
  }


  User.findOne({username: req.body.username})
  .then((user)=>{
    if (user) { 
     return user.checkPassword(req.body.password)
     .then((match) => {
        if(match) {
          req.session.userId = user.id;
          res.redirect(`/profile`)
        }else {
         renderInvalidUsername();
        }
     })

    } else {
    renderInvalidUsername();
    }
  })
  .catch((error) => next(error))
};*/
module.exports.logout = (req, res, next) => {
  req.session.destroy();
  res.status(204).send();
};