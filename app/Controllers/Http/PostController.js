'use strict'

class PostController {
    async index({ view }){
        const posts = [
            {title: "Post One", body: "Sample text in one body"},
            {title: "Post Two", body: "Sample text in two body"},
            {title: "Post Three", body: "Sample text in three body"},
        ]
        return view.render('posts.index', {
            title: 'Latest Posts',
            posts: posts
        })
    }
}

module.exports = PostController
