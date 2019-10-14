const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const app = express();
const router = express.Router();

router.get('/index', (req, res) => {
    axios.get('http://www.pinterest.com/')
        .then((result) => {
            res.send(result.data);
        });
});

// js
router.get('/warm', (req, res) => {
    axios.get('https://i.pinimg.com/assets/js/warm.js?_=1571036246321')
        .then((result) => {
            res.send(result.data);
        })
});

router.get('/runtime', (req, res) => {
    axios.get('https://s.pinimg.com/webapp/js/runtime-2dea8dc1532a0d4126c7.js')
        .then((result) => {
            res.send(result.data);
        })
});


// css
router.get('/common', (req, res) => {
    axios.get('https://s.pinimg.com/webapp/style/common_desktop-3b101ffc8dbebcdaace1.css')
        .then((result) => {
            res.send(result.data);
        })
});

router.get('/gestalt', (req, res) => {
    axios.get('https://s.pinimg.com/webapp/style/gestalt-1eb6cb5ea6b63c92bf18.css')
        .then((result) => {
            res.send(result.data);
        })
});

const JSRouter = express.Router();

JSRouter.get('*', (req, res) => {
    console.log(req.url);
    res.send('');
});

app.use('/js', JSRouter)


app.use((req, res) => {
    fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.send(data);
    });
});

app.listen(3001, () => {
    console.log('server started at port 3001');
});
