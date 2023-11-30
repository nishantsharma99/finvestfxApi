const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const mongoose = require('mongoose')

const port = 3002

const dataBase = 'mongodb+srv://finvestfxAssignment:bjmaAbWf3TEkL53h@cluster0.r1vg0kt.mongodb.net/'

mongoose.connect(dataBase).then(() => {
    console.log('Connection Successful!')
}).catch((err) => {
    console.log('No connection', err)
})

app.use(cors())
app.use(express.json())

app.use('/finvestfxApi',require('./routes/finvestfxApi'))

app.get('/', (req, res) => {
    var postData = {
        vehicleId: req.query.vehicleNum,
        chassis: req.query.chassisNo
    }
    console.log(postData)
    var axiosConfig = {
        headers: {
            "API-KEY": "9d78c138aceeb77a9bf8840a5e10fa7e",
            "accept": "application/json",
            "content-type": "application/json",
            "Referer": "docs.apiclub.in"
        }
    };

    axios.post('https://api.apiclub.in/api/v1/challan_info', postData, axiosConfig)
        .then((r) => {
            console.log(r.data)
            res.status(200).send(r.data);//Challan Data
        })
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

