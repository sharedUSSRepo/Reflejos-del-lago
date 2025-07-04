var mongoose = require('mongoose');
var bcrypt = require("bcrypt")

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'username is mandatory'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'password is mandatory'],
    },
  },
  { timestamps: true },
);

UsersSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UsersSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports =  mongoose.model('users', UsersSchema);