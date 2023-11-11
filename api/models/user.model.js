const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const WORK_FACTOR = 10;
const Schema = mongoose.Schema; 

const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const userSchema = new Schema({
    username: {
        type: String, 
        trim: true,
        require: 'Username is required',
        min: [3, 'Username needs at least 3 chars']
    },
    name: { 
        type: String,
        required: "User name is required"
     },
    mail : {
        type: String,
        required: 'User mail is required',
        lowercase: true,
        trim: true,
        match: [EMAIL_PATTERN, 'Invalid mail format']
    },
    password : {
        type: String,
        required: 'User password is required',
        minLength: [7, 'User password needs at least 7 chars']
    },
    avatar : {
        type : String,
        type: String,
        default: function () {
          return "https://i.pinimg.com/564x/dd/33/ae/dd33ae09b57b32dcc9b39b65fe3d19db.jpg"}
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
}
) 

userSchema.virtual("readings", {
    ref: "Reading",
    localField: "_id",
    foreignField: "user"
})

userSchema.pre('save', function(next){
    const user = this;

    if (user.isModified('password')){
        bcrypt.hash(user.password, WORK_FACTOR)
        .then((hash) => {
            user.password = hash;
            next();
        })
        .catch ((error) => next(error))
    } else {
        next();
    }
}) 


//Método de mongoose para comparar una contraseña sin estar hachearla

userSchema.methods.checkPassword = function(password) {
    const user = this;
    return bcrypt.compare(password, user.password);
  } 


const User = mongoose.model('User', userSchema);
module.exports = User;