const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: {type: String},
  bio: {type: String, maxlength: 100, required: true},
  password: { type: String, required: true }
})


userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmtion(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.pre('validate', function checkPasswordMatch(next){
  if(
    this.isModified('password') &&
    this._passwordConfirmation !== this.password
  ) {
    this.invalidate('passwordConfirmation', 'The password entered is not correct')
  }

  next()

})

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8))
  }

  next()

})

userSchema.methods.validatePassword =function(password) {
  return bcrypt.compare.Sync(password, this.password)
}

userSchema.set('toJSON', {
  transform(doc, json) {
    delete json.password
    return json
  }
})

module.exports = mongoose.model('User', userSchema)