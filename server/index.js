const express = require("express")
var cors = require('cors')
const bodyParser = require('body-parser')

const PORT = 3002

const app = express()

app.use(cors())
app.use(bodyParser.json())

const employees = [
  {
    id: 1,
    name: 'John',
    status: 'businesstrip',
    img: 'https://gravatar.com/avatar/f7510bbc54aec6cf4d79edaa86605e14?s=400&d=robohash&r=x'
  },
  {
    id: 2,
    name: 'Jack',
    status: 'working',
    img: 'https://gravatar.com/avatar/d34844fc3c4dddfd0e6492d09c5112e4?s=400&d=robohash&r=x'
  },
  {
    id: 3,
    name: 'Sheli',
    status: 'working',
    img: 'https://gravatar.com/avatar/d5321707c8d9c6188085701474cb5298?s=400&d=robohash&r=x'
  },
  {
    id: 4,
    name: 'Eitan',
    status: 'onvacation',
    img: 'https://gravatar.com/avatar/daaa57535a70b34bc8674de53d02dc25?s=400&d=robohash&r=x'
  },
  {
    id: 5,
    name: 'Philip',
    status: 'working',
    img: 'https://gravatar.com/avatar/e1721eeb8133477db925210652a080f8?s=400&d=robohash&r=x'
  },
  {
    id: 6,
    name: 'Rebecca',
    status: 'onvacation',
    img: 'https://gravatar.com/avatar/3b536eef99f2d352ba44f959c0c0c0c1?s=400&d=robohash&r=x'
  },
]

app.get('/users', (req, res) => {
    res.send(employees);
})

app.post('/users/:id', (req, res) => {
  const index = employees.findIndex((obj => obj.id === +req.params.id));
  employees[index].status = req.body.status
    res.send(employees);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
