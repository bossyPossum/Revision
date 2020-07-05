// const express = require ('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('hello world and hello to you Rubz'))

// app.listen(port, () => console.log(`your app is listening at http://localhost:${port}.`))

const express = require ('express') //ES6 = import express from 'express'
const app = express()
// const port = 3001
const courses = [
    { id: 1, name: 'course 1'},
    { id: 2, name: 'course 2'},
    { id: 3, name: 'course 3'}
]

app.get('/',(req, res) => res.send('happy sunday'))

// app.get('/', (req, res) => {
//     res.send(JSON.stringify('happy happy sundday RUBZ'))
// })

app.get('/api/courses', (req, res) => {
    res.send(courses);
})
app.get('/api/courses/:id', (req, res) => {
    res.send(req.query)
})

// app.get('/api/posts/:year/:month', (req, res) => {
//     res.send(req.query);
// });


// app.post('/user', (req, res) => {
//     res.send('I got a post request')
// })

//PORT
const port = process.env.PORT || 3001
app.listen(port, () => console.log (`I am on port ${port}.`))