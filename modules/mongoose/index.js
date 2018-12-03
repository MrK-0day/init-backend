// Import Lib
// Khai báo thư viện mongoose
const mongoose = require('mongoose')
// Khai báo Schema mongoose
const Schema = mongoose.Schema
// Khai báo model
const Model = mongoose.model

// Import Custom Lib
// Lấy url kết nối mongodb
const { URL_DB } = require('../../config')

// Use Mongoose
// Kết nối với db
// Sử dụng promise để kiểm tra kết nối db được hay chưa
mongoose.connect(URL_DB, { useNewUrlParser: true }).then(() => {
  console.log(`🚀 Connected Database`)
}).catch(() => {
  console.log(`Error: Can't connect db`)
})

// Mục đính của việc xài callback, promise, async, await là để giải quyết bất đồng bộ
// Try, catch để bắt lỗi

module.exports = {
  Schema, Model
}
