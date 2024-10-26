const cors = require('cors');



module.exports = cors({
    origin: process.env.ALLOWED_ORIGINS || 'http://127.0.0.1:5173',
    credentials: true,
})