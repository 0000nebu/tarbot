const Reading = require('../models/reading.model');
const Card = require("../models/card.model")
const axios = require('axios')


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

  module.exports.adviceLove = (req, res, next) => {
    Reading.findById(req.params.id)
    .populate('cards.past.card cards.present.card cards.future.card')
      .then(reading => {
        console.log( `${reading.cards.present?.card.name} ${reading.cards.present?.reverse ? 'reversed' : ''}`)
        const cardsKeys = Object.keys(reading.cards);
        const response = cardsKeys.map(key => `${reading.cards[key].card?.name} ${reading.cards[key].reverse ? 'reversed' : ''}`).join(' & ')
        const responsePresent =  `${reading.cards.present.card.name} ${reading.cards.present.reverse ? 'reversed' : ''}`;
        if (reading) {
          axios.post('https://api.openai.com/v1/chat/completions',
            {
              "model": "gpt-3.5-turbo-1106",
              "messages": [
                {
                  "role": "system",
                  "content": "You're a fortune teller, give me advice summarizing this 3-card tarot spread about love, 1 phrase"
                },
                {
                  "role": "user",
                  "content": `${reading.multi ? response : responsePresent}`
                }
              ],
              "temperature": 1.0,
              "max_tokens": 40
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
              }
            },
          )
          .then(advice => {
            Reading.findByIdAndUpdate(req.params.id, { advice: advice.data.choices[0].message.content }, {
              runValidators: true,
              new: true,
            })
            .then(updatedReading => {
              if (updatedReading) {
                res.json(updatedReading);
              } else {
                next(createError(404, "Reading not found"));
              }
            })
            .catch(error => next(error));
          })
          .catch(error => next(error));
        }
      })
        .catch(error => next(error));
    }

 
      module.exports.adviceWork = (req, res, next) => {
        Reading.findById(req.params.id)
        .populate('cards.past.card cards.present.card cards.future.card')
        .then(reading => {
          console.log( `${reading.cards.present?.card.name} ${reading.cards.present?.reverse ? 'reversed' : ''}`)
          const cardsKeys = Object.keys(reading.cards);
          const response = cardsKeys.map(key => `${reading.cards[key].card?.name} ${reading.cards[key].reverse ? 'reversed' : ''}`).join(' & ')
          const responsePresent =  `${reading.cards.present.card.name} ${reading.cards.present.reverse ? 'reversed' : ''}`;
          if (reading) {
            axios.post('https://api.openai.com/v1/chat/completions',
              {
                "model": "gpt-3.5-turbo-1106",
                "messages": [
                  {
                    "role": "system",
                    "content": "You're a fortune teller, give me advice summarizing this 3-card tarot spread about work, 1 phrase"
                  },
                  {
                    "role": "user",
                    "content": `${reading.multi ? response : responsePresent}`
                  }
                ],
                "temperature": 0.7,
                "max_tokens": 40
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                }
              },
            )
              .then(advice => {
                Reading.findByIdAndUpdate(req.params.id, { advice: advice.data.choices[0].message.content }, {
                  runValidators: true,
                  new: true,
                })
                .then(updatedReading => {
                  if (updatedReading) {
                    res.json(updatedReading);
                  } else {
                    next(createError(404, "Reading not found"));
                  }
                })
                .catch(error => next(error));
              })
              .catch(error => next(error));
            }
          })
            .catch(error => next(error));
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
        }