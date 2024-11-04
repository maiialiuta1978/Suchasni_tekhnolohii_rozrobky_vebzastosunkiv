const posts = require('./posts');

class PostModel {
    constructor() {
        this.posts = posts;
    }

    get _lastId() {
        return Math.max(...this.posts.map(post => Number(post.id)));
    }

    getPosts() {
        return this.posts;
    }

    getPostById(id) {
        let post = this.posts.find(post => post.id === Number(id));
        return post || null;
    }

    createPost(post) {
        this.posts.push({ id: this._lastId + 1, ...post });
        return this.getPostById(this._lastId);
    }

    editPost(id, post) {
        let postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            this.posts[postIndex] = { ...post, ...this.posts[postIndex] };
            return this.posts[postIndex];
        }
        return null;
    }

    removePost(id) {
        let postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex !== -1) {
            let post = this.posts[postIndex];
            this.posts.splice(postIndex, 1);
            return post;
        }
        return null;
    }
}

module.exports = new PostModel();
