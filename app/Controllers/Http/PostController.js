'use strict'

const Post = use('App/Models/Post')

class PostController {
    async index({ view }){
        // const posts = [
        //     {title: "Post One", body: "Sample text in one body"},
        //     {title: "Post Two", body: "Sample text in two body"},
        //     {title: "Post Three", body: "Sample text in three body"},
        // ]
        const posts = await Post.all()

        return view.render('posts.index', {
            title: 'Latest Posts',
            posts: posts.toJSON()
        })
    }

    async details({ params, view }){
        const post = await Post.find(params.id)

        return view.render('posts.details', {
            post: post
        })
    }

    async add({ view }){
        return view.render('posts.add')
    }

    async create({ request, response, session }){
        const post = new Post()

        post.title = request.input('title')
        post.body = request.input('body')

        await post.save()

        session.flash({ notification: 'Post Added!' })

        return response.redirect('/posts')
    }
}

module.exports = PostController
