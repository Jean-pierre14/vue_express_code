const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Get posts
router.get('/', async(req, res)=>{
    const posts = await loadPostCollection()
    res.send(await posts.find({}).toArray())
})
// Add posts

// Delete posts

async function loadPostCollection(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://sniper:14avril1997@cluster0.1zudf.mongodb.net/vue_express?retryWrites=true&w=majority',
        {useNewUrlParser: true,useUnifiedTopology: true}
    )
    return client.db('vue_express').collection('posts')
}


module.exports = router