const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const cardSchema = new Schema(
    {
        name: {
            type: String,
        }, 

        description: {
            type: String
        },
        card: {
            straight: {
                past: {
                    type: String
                },
                present: {
                    type: String
                },
                future: {
                    type: String
                },
            },
            reverse: {
                past: {
                    type: String
                },
                present: {
                    type: String
                },
                future: {
                    type: String
                },
            }

        },
    
        image: {
            type: String
        },
        
        interpretation:{
            
        }


    } ,
    {
        toJSON: {
            transform: function (doc, ret) {
                ret.id = ret._id;  
                delete ret._id;   
                delete ret.__v;
                return ret;
            }
    }
    }
)

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;