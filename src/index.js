const express = require('express');
const axios = require('axios');

const app = express();
const router = express.Router();

router.get('/index', (req, res) => {
    axios.get('http://www.pinterest.com/')
        .then((result) => {
            res.send(result.data);
        });
});

router.get('/warm', (req, res) => {
    axios.get('https://i.pinimg.com/assets/js/warm.js?_=1571036246321')
        .then((result) => {
            res.send(result.data);
        })
});

router.get('runtime', (req, res) => {
    axios.get('https://s.pinimg.com/webapp/js/runtime-2dea8dc1532a0d4126c7.js')
        .then((result) => {
            res.send(result.data);
        })
})

app.use(router);

app.listen(3001, () => {
    console.log('server started at port 3001');
});
