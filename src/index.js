const express = require('express');
const axios = require('axios');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ok');
});

app.use(router);

// app.use('/', (req, res) => {
//     axios.get('http://www.pinterest.com/')
//         .then((result) => {
//             res.send(result.data);
//         });
// });


app.listen(3001, () => {
    console.log('server started at port 3001');
});
