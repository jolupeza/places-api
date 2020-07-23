const mongoose = require('mongoose');
const mongooseBcrypt = require('mongoose-bcrypt');

let userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  admin: {
    type: Boolean,
    default: false
  }
});

userSchema.post('save', function(user, next) {
  User.count({})
    .then(count => {
      if (count === 1) {
        User.update({'_id': user._id}, {admin: true})
          .then(result => {
            next();
          })
      } else {
        next();
      }
    })
});

userSchema.plugin(mongooseBcrypt);

const User = mongoose.model('User', userSchema);

module.exports = User;
