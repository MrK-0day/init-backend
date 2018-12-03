// Import Lib
// Thư viện express
const express = require('express')
// Khởi tạo đối tượng app bằng function express
const app = express()
// Thư viện cors, cho phép Frontend truy cập backend, hoặc các tên miền khác cũng có thể truy cập được, hoặc chặn truy cập từ 1 tên miền nào đó
const cors = require('cors')
// Thư viện hỗ trỡ đọc body từ http request
const bodyParser = require('body-parser')

// Import Custom Lib
// Khai báo Destructuring ES6 - khai báo lẹ, giảm biến thừa, tối ưu bộ nhớ đệm
const { HOST, PORT, VER_API } = require('./config')

// Import API
const { USER } = require('./modules/API/v1/User')

// Use Express
app.use(cors())
app.use(bodyParser.json())

// Server nghe đường dẫn, với các phương thức post,get,delete,... của http request
app.route(`/API/${VER_API}/_USER/ADD`).post(USER.ADD)
app.route(`/API/${VER_API}/_USER/GETALL`).get(USER.GETALL)

// Khởi chạy server, gọi callback, nếu server khởi chạy thành công sẽ console.log ra.
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is running: http://${HOST}:${PORT}`)
})
