const Reading = require('../models/reading.model');
const Card = require("../models/card.model")


module.exports.create = async (req, res, next) => {
  try {
    const cards = await Card.find();
    let randomCards = shuffle([...cards]); 
    const randomCompleteReadings = randomCards.slice(0, 3);

    let reading;

    if (req.body.multi) {
      reading = {
        cards: {
          past: {
            card: randomCompleteReadings[0].id,
            reverse: Math.random() > 0.5,
          },
          present: {
            card: randomCompleteReadings[1].id,
            reverse: Math.random() > 0.5,
          },
          future: {
            card: randomCompleteReadings[2].id,
            reverse: Math.random() > 0.5,
          },
        },
        user: req.user._id,
      };
    } else {
      reading = {
        cards: {
          present: {
            card: randomCompleteReadings[0].id,
            reverse: Math.random() > 0.5,
          },
        },
        user: req.user._id,
      };
    }

    function shuffle(array) {
      let currentIndex = array.length, randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    }

    const createdReading = await Reading.create({ ...reading, multi: req.body.multi });
    await createdReading
    .populate('cards.past.card cards.present.card cards.future.card');

    res.status(201).json(createdReading);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Cards not found', error: error.message });
  }
};

module.exports.list= (req, res, next) => {
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


module.exports.detail = (req, res, next) => {
 Reading.findById(req.params.id)
 .populate('cards.past.card cards.present.card cards.future.card')
    .then((reading) => {
      if (reading) {
        res.json(reading);
      } else {
        next(createError(404, "reading not found"));
      }
    })
    .catch((error) => next(error));

  }

  module.exports.update = (req, res, next) => {

    Reading.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((reading) => {
        if (reading) {
          res.json(reading);
        } else {
          next(createError(404, "Task not found"));
        }
      })
      .catch((error) => next(error));
  };
  
