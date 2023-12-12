const express = require('express')
const app = express()
const port = 5000

let arr = [
    {
        id: 1,
        name: "Amrah",

    },
    {
        id: 2,
        name: "Amrah",

    },

    {
        id: 3,
        name: "Amrah",

    },
    {
        id: 4,
        name: "Amrah",

    },
    {
        id: 5,
        name: "Amrah",

    },
    {
        id: 6,
        name: "Amrah",

    },
    {
        id: 7,
        name: "Amrah",

    },
    {
        id: 8,
        name: "Amrah",

    },
    {
        id: 9,
        name: "Amrah",

    },
    {
        id: 10,
        name: "Amrah",

    },
    {
        id: 11,
        name: "Amrah",

    }
]

app.get('/', (req, res) => {
    res.send(arr)
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    const item = arr.find(x => x.id === +id)
    res.send(item)

})




app.post('/', (req, res) => {
    res.send('Salam men post')
})




app.put('/', (req, res) => {
    res.send('Salam men put')
})



app.delete('/:id', (req, res) => {
    // res.send('Salam men delete')
    const { id } = req.params
    arr = arr.filter((i) => i.id !== +id)
    res.send(arr)
})

    

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})