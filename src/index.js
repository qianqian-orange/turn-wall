const express = require('express');
const axios = require('axios');

const app = express();

// app.use('/', (req, res) => {
    axios.get('http://www.pinterest.com/')
        .then((result) => {
            console.log(result.data);
            // res.send('ok');
        });
// });

app.listen(3001, () => {
    console.log('server started at port 3001');
});
