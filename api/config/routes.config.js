const express = require('express');
const router = express.Router()
const users = require('../controllers/user.controller');
const cards = require('../controllers/card.controller');
const readings = require('../controllers/reading.controller');
const auth = require('../middlewares/auth.middleware');
const mongoose  = require('mongoose');
const createError = require('http-errors')      


//USERS 
router.post("/users", users.create);
router.post("/login",users.login );
router.get('/detail', auth.isAuthenticated, users.detail)
router.post("/logout", users.logout);

//CARD
router.get("/cards", auth.isAuthenticated, cards.list); 
router.get("/cards/:id", auth.isAuthenticated, cards.detail);
router.post("/cards", cards.create)
//hacer un post del body

//READINGS
router.post("/readings", auth.isAuthenticated, readings.create);
router.get("/readings/:id", auth.isAuthenticated, readings.detail);
router.post('/readings/:id/adviceLove', auth.isAuthenticated, readings.adviceLove)
router.post('/readings/:id/adviceWork', auth.isAuthenticated, readings.adviceWork)
router.get('/profile', auth.isAuthenticated, readings.list)

//errors
router.use((req, res, next) => next(createError(404, "Route not found")));
router.use((error, req, res, next) => {
    if (
      error instanceof mongoose.Error.CastError &&
      error.message.includes("_id")
    ) {
      error = createError(404, "Resource not found");
    } else if (error instanceof mongoose.Error.ValidationError) {
      error = createError(400, error);
    } else if (!error.status) {
      error = createError(500, error);
    }
    console.error(error);
  
    let errors;
    if (error.errors) {
      errors = Object.keys(error.errors).reduce((errors, errorKey) => {
        errors[errorKey] =
          error.errors[errorKey].message || error.errors[errorKey];
        return errors;
      }, {});
    }
  
    const data = {
      message: error.message,
      errors,
    };
    res.status(error.status).json(data);
  });




module.exports = router;