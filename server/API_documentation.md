# List API untuk Fancy To do

Berikut merupakan list API yang digunakan untuk  menbuat todo. Library tambahan yang digunakan adalah express, Sequelize, dan Postgres.

##API endpoints

###GET /todos

> Mendapatkan semua data to do

Request Header

    not needed

Request Body

    not needed

Response (200)

    [
        {
            "id": 2,
            "title": "API",
            "description": "susah belajar membuat API",
            "status": false,
            "due_date": "2020-04-03",
            "createdAt": "2020-03-30T06:43:04.661Z",
            "updatedAt": "2020-03-30T08:16:38.012Z"
        }
    ]

Response (500)

    TypeError: Todo.findsAll is not a function
        at findAll (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\controllers\todo_controllers.js:6:14)
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at next (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:137:13)
        at Route.dispatch (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:112:3)       
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:281:22
        at Function.process_params (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:335:12)
        at next (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:275:10)
        at Function.handle (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:174:3)      
        at router (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:47:12)
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at trim_prefix (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:317:13)
        at D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:284:7
        at Function.process_params (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:335:12)
        at next (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:275:10)
        at Function.handle (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:174:3)      
        at router (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:47:12)
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at trim_prefix (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:317:13)
        at D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:284:7
        at Function.process_params (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:335:12)
        at next (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:275:10)