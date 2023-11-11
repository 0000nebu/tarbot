const Card = require('../models/card.model');

module.exports.list = (req, res, next) => {
  Card.find()
  .then((cards) => {res.json(cards)})
  .catch((error) => next(error));
   };

 module.exports.detail = (req, res, next) => {
  Card.findById(req.params.id)
    .then((card) => {
      if(!card){
        res.status(404).json({ error: "card not found" })
      } else {
        {res.json(card)}
      }
    })
    .catch((error) => next(error));
     };
    

module.exports.create = (req, res, next) => {
  Card.create(req.body)
    .then((newCard) => {
      if(card) 
      res.status(201).json(newCard);
      })
    .catch(next);
    
}
 
 