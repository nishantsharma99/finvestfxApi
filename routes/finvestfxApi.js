const express = require('express')
const data = require('../models/data')
const counter = require('../models/counter')

const app = express()

app.get('/', (req, res) => {
    data.find()
        .then(d => res.json(d))
        .catch(err => console.log(err))
})

app.post('/setData', (req, res) => {
    const dataToSave = {
        id: 1,
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        label: req.body.label,
        price: req.body.price,
        firstPrice: req.body.price,
        description: req.body.description,
    }

    console.log(dataToSave)

    counter.findOneAndUpdate({ id: "auto" }, { "$inc": { "idVal": 1 } }, { new: true })
        .then((d, err) => {
            if (d === null) {
                const counterSave = counter({ id: "auto", idVal: 0 })
                counterSave.save()
                dataToSave.id = 0
            } else {
                dataToSave.id = d.idVal
            }
        })
        .then(() => {
            const dataSave = data(dataToSave)
            dataSave.save()
        })

    res.send('setData')
})

app.post('/editData', (req, res) => {
    console.log(req.body)
    data.findOneAndUpdate({ id: req.body.id }, { "price": req.body.price }, { new: true })
        .then((d, err) => {
            console.log(d)
        })

    res.send('editData')
})

module.exports = app