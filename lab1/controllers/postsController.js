const PostModel = require('../models/postModel');

exports.getPosts = (req, res) => {
    const posts = PostModel.getPosts();
    res.render('postsListView', { posts });
}

exports.getPost = (req, res) => {
    const post = PostModel.getPostById(req.params.id)
    return res.render('postView', { post });
}

exports.createPost = (req, res) => {
    const newPost = { title: req.body.title, text: req.body.text }
    PostModel.createPost(newPost);
    res.redirect('/posts');
}
