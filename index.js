const express = require('express');
const app = express();
const cors = require('cors');


require('dotenv').config();

//midleewares
app.use(cors());
app.use( express.json());
app.use( express.urlencoded({ extended: false }));




//routes
app.use('/notifications', require('./router/notifications.routes'));

app.listen(process.env.PORT,()=>{
    console.log('escuchando en el puerto', process.env.PORT);
})