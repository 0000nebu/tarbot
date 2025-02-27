require('dotenv').config();
const express = require('express');
const logger = require ('morgan');

require('./config/db.config')
const session = require('./config/session.config')
const app = express();
const cors = require('./config/cors.config')
app.use(cors)

app.use(express.json())
app.use(logger('dev'))
app.use(session.session)

const api = require('./config/routes.config');
app.use('/v1', api)

app.use(require('./web'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Application is running at port ${port}`)) 