const { User } = require('../../mongoose/schema/User')

const USER = {
  ADD: (req, res) => {
    let _u = new User(req.body)
    _u.save().then(() => {
      res.json({code: 1})
    }).catch(() => {
      res.json({code: 0})
    })
  },
  GETALL: async (req, res) => {
    let T = await User.find({})
    res.json(T)
  }
}

module.exports = {
  USER
}
