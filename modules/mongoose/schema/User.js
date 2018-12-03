const { Schema, Model } = require('../index')

const _User = new Schema({
  username: String,
  password: String
})

const User = Model('User', _User)

module.exports = {
  _User, User
}
