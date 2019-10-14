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
// router.get('/warm', (req, res) => {
//     axios.get('https://i.pinimg.com/assets/js/warm.js?_=1571036246321')
//         .then((result) => {
//             res.send(result.data);
//         })
// });
//
// app.use(router);

// css
const CSSRouter = express.Router();

CSSRouter.get('*', (req, res) => {
    axios.get(`https://s.pinimg.com/webapp/style${req.url}`)
        .then((result) => {
            res.setHeader('Content-Type', 'text/css');
            res.send(result.data);
        });
});

app.use('/style', CSSRouter);

const JSRouter = express.Router();

JSRouter.get('*', (req, res) => {
    console.log(req.url);
    axios.get(`https://s.pinimg.com/webapp/js${req.url}`)
        .then((result) => {
            res.setHeader('Content-Type', 'application/x-javascript');
            res.send(result.data);
        }, (e) => {
            console.log('error');
        });
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
