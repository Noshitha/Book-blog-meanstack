const express = require('express')
const app = express()
const port = process.env.PORT || 3000 
app.use(express.static('frontend')) //get every css of js or html or image files from frontend folder
var book = {}
book.name="Sense and sensibility"
book.author="Jane Austen"
book.rating="4/5"
book.review="Sense and Sensibility is a richly rewarding story of manners from one of the world's greatest novelists. Full of feeling, humor, and beautifully realized characters, this book is treasured by teens and adults who enjoy a complex romantic page-turner."
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/homepage.html')) //we can also use res.sendFile and res.json accordingly
app.get('/login', (req, res) => res.send('Login Here ...'))
app.get('/resgister', (req, res) => res.send('Register Here'))
app.get('/data', (req, res) => res.json(book))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))