const express = require('express');
const router = express.Router();

const { verifyToken } = require('../middleware/auth');

const Post = require('../models/Post');

router.get('/', verifyToken, async (req, res) => {
    try {
        const posts = await Post.all
        res.json(posts)
    } catch (err) {
        res.status(500).send({ err })
    }
})

module.exports = router