console.log('Disney API');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Holaa mundo')
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const api = require('./api');
app.use('/api', api);
app.use(helmet());

// SERVER.PORT
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;