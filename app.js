const express = require ('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('hello world and hello to you Rubz'))

app.listen(port, () => console.log(`your app is listening at http://localhost:${port}.`))