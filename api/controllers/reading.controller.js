const Reading = require('../models/reading.model');
const Card = require("../models/card.model")


module.exports.create = async (req, res, next) => {

  try {
    const cards = await Card.find();
    let randomCards = cards;
    const randomCompleteReadings = [];

    for (let i = 0; i < 3; i++) {
      const randomCard = randomCards[Math.floor(Math.random() * randomCards.length)];
      randomCompleteReadings.push(randomCard);
      randomCards = randomCards.filter(card => card.id.toString() !== randomCard.id.toString());
    }

    let reading;

    if (req.body.multi) {
      reading = {
        cards: {
          past: {
            
            card: randomCards[0].id,
            reverse: Math.random() > 0.5
          },
          present: {
            card: randomCards[1].id,
            reverse: Math.random() > 0.5
          },
          future: {
            card: randomCards[2].id,
            reverse: Math.random() > 0.5
          }
        },
        user: req.user._id 
      };
    } else {
      reading = {
        cards: {
          present: {
            card: randomCards[0].id,
            reverse: Math.random() > 0.5
          }
        },
        user: req.user._id 
      };
    }

    const createdReading = await Reading.create({ ...reading, multi: req.body.multi });
    await createdReading
      .populate('cards.past.card cards.present.card cards.future.card')

    res.status(201).json(createdReading);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};



module.exports.detail = (req, res, next) => {
  let usersInEvent = [];

  Reading.find({ user: req.user._id }) 
    .populate("user")
    .populate('cards.past.card cards.present.card cards.future.card')
    .then((readings) => {
      usersInEvent = readings.map((reading) => {
        return reading.user;
      });
      console.log(usersInEvent);
      res.json(readings);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'Internal error' });
    });
}


