const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth')
const { getPosts, createPost, updatePost, deletePost, likePost } = require('../controllers/posts');

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

module.exports = router;