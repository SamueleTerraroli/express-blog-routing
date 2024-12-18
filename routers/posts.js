const express = require ('express');
const router = express.Router();
const posts = require ('../data/posts');

router.get('/', (req,res)=>{
    res.json(posts);
})


router.get('/:id', (req,res)=>{
    const post = posts[req.params.id]
    res.json(post);
})


router.post('/', (req,res)=>{
    res.send('new post')
})


router.put('/:id', (req,res)=>{
    res.send(`modifico il post id ${req.params.id}`)
})


router.patch('/:id', (req,res)=>{
    res.send(`modifico una parte del post id ${req.params.id}`)
})


router.delete('/:id', (req,res)=>{
    res.send(`elimino post id ${req.params.id}`)
})



module.exports = router;