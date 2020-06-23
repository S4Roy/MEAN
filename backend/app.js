const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const moongose = require('./database/mongoose');
const api = require('./routes/api');
//const api2 = require('./routes/addEvent');
const app = express();

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);
//app.use('/api2', api2);
app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`))