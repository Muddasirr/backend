const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }] 
  });


const User = mongoose.model('User', UserSchema);

module.exports=User;