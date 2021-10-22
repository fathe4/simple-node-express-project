const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('wow , i am learning node')
})

const users = [
    { id: 0, name: 'fathe', email: 'fathe@gmail.com', phone: '01731085996' },
    { id: 1, name: 'Karim', email: 'karim@gmail.com', phone: '01731085996' },
    { id: 2, name: 'sraboni', email: 'sraboni@gmail.com', phone: '01731085996' },
    { id: 3, name: 'siam', email: 'siam@gmail.com', phone: '01731085996' },
]

app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    } else {
        res.send(users)
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length;
    users.push(newUser)
    console.log('Hitting the post', req.body);
    // res.send('Inside post')
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.listen(port, () => {
    console.log('Listening from', port)
})