'use strict'

class PostController {
    async index({ view }){
        return view.render('posts.index')
    }
}

module.exports = PostController
