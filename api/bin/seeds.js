require('dotenv').config();
require("../config/db.config");
const Card = require('../models/card.model');
const data = require("../data/cards.json")

Card.create(data)
  .then((cards) => {
      console.log("cards created")})
  .catch((error) => console.error(error))