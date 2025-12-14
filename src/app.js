let express = require('express')
let bodyParser = require('body-parser') // เพิ่มบรรทัดนี้

const app = express()

// เพิ่ม 2 บรรทัดนี้เพื่อใช้งาน body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get('/status', function (req, res) {
    res.send('dessertmenu in coffee shop')
})

app.get('/hello/:person', function (req, res) {
    console.log('hello - ' + req.params.person)
    res.send('say hello with ' + req.params.person)
})

// get dessertmenu by id
app.get('/menu/:dessertmenuId', function (req, res) {
    res.send('ดูข้อมูลเมนูของหวาน: ' + req.params.dessertmenuId)
})

// get all menu
app.get('/menu', function (req, res) {
    res.send('เรียกข้อมูล เมนูทั้งหมด')
})
// create dessertmenu in coffee shop
app.post('/dessertmenu/', function (req, res) {
    res.send('ทำการสร้างเมนูของหวาน: ' + JSON.stringify(req.body))
})

// edit dessertmenu in coffee shop
app.put('/menu/:dessertmenuId', function (req, res) {
    res.send('ทำการแก้ไขเมนูของหวาน: ' + req.params.dessertmenuId + ' : ' + JSON.stringify(req.body))
})

// delete dessertmenu in coffee shop
app.delete('/menu/:dessertmenuId', function (req, res) {
    res.send('ทำการลบเมนูของหวาน: ' + req.params.dessertmenuId + ' : ' + JSON.stringify(req.body))
})

let port = 8081
app.listen(port, function () {
    console.log('server running on ' + port)
})