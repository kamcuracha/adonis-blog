'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('home')

Route.get('/posts', 'PostController.index')
Route.get('/posts/add', 'PostController.add')
Route.get('/posts/:id', 'PostController.details')

// Route.get('/hello', () => 'Hello World!')

// Route.get('/hello2', function() {
//     return 'Hello World2!';
// })

// Route.get('/hello/:id', ({ params }) => `Hello ${params.id}!`)

// Route.get('/hello2/:id', function({ params }) {
//     return `Hello ${params.id}2!`;
// })