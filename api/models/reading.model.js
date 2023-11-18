const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const readingSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }, 

        multi: Boolean,
        

        description: String,

        cards: {
            past: {
                card: {
                    type: Schema.Types.ObjectId,
                    ref: 'Card'
                },
                reverse: Boolean    
            },
            present: {
                card: {
                    type: Schema.Types.ObjectId,
                    ref: 'Card'
                },
                reverse: Boolean 
            },
            future: {
                card: {
                    type: Schema.Types.ObjectId,
                    ref: 'Card'
                },
                reverse: Boolean  
            }
        },

        advice: {
            type: String
        }


        
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
              ret.id = ret._id;
              delete ret._id;
              delete ret.__v;
              return ret;
            }
    
            }
    })

    const Reading = mongoose.model('Readings', readingSchema);
module.exports = Reading;