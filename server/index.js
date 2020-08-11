const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;
const { success, error } = require('consola');

// Middlewares
app.use(bp.json())
app.use(cors())

const posts = require('../router/api/posts')
app.use('/api/posts', posts)

app.listen(port, (err)=>{
    if(err) error({message: `${err}`, badge: true})
    success({message:`Server run on port: ${port}`, badge: true})
})