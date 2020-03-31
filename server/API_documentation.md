# List API untuk Fancy To do

Berikut merupakan list API yang digunakan untuk  menbuat todo. Library tambahan yang digunakan adalah express, Sequelize, dan Postgres.

## API endpoints

### GET /todos

> Mendapatkan semua data to do

Request Header

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiaGFtemFoX2FiZHVsbGFoIiwiaWF0IjoxNTg1NjU1NDM2fQ.h77bCgZkvuOnxVlShgcV_9lXXPpXx6F70Vf4DXnGcLk"
    }

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

### GET /todos/:id

> Mendapatkan data to do dengan id yang diberikan

Request Header

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiaGFtemFoX2FiZHVsbGFoIiwiaWF0IjoxNTg1NjU1NDM2fQ.h77bCgZkvuOnxVlShgcV_9lXXPpXx6F70Vf4DXnGcLk"
    }

Request Body

    not needed

Response (200)

    {
        "id": 2,
        "title": "API",
        "description": "susah belajar membuat API",
        "status": false,
        "due_date": "2020-04-03",
        "createdAt": "2020-03-30T06:43:04.661Z",
        "updatedAt": "2020-03-30T08:16:38.012Z"
    }

Response (404)

    {
        "message": "todo not found"
    }

Response (500)

    TypeError: Todo.findsByPk is not a function
        at getOne (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\controllers\todo_controllers.js:38:14)
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at next (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:137:13)
        at Route.dispatch (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:112:3)       
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:281:22
        at param (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:354:14)
        at param (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:365:14)
        at Function.process_params (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:410:3)
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

### POST /todos

> Menginputkan data to do yang baru

Request Header

    {
        Content-Type: application/x-www-form-urlencoded,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiaGFtemFoX2FiZHVsbGFoIiwiaWF0IjoxNTg1NjU1NDM2fQ.h77bCgZkvuOnxVlShgcV_9lXXPpXx6F70Vf4DXnGcLk"
    }

Request Body

    {
        title: "Dokumentasi API",
        description: "Pusing membuat dokumentasi API",
        status: 0, //satatus berupa boolean jadi input 0 atau 1
        due_date: "2020-04-03", // due_date berupa only date jadi penginputan berupa tahun - bulan (dengan 0 didepan ketika angka dibawah 10) - tanggal (dengan 0 didepan ketika angka dibawah 10)
    }

Response (200)

    {
        "id": 3,
        "title": "Dokumentasi API",
        "description": "Pusing membuat dokumentasi API",
        "status": false,
        "due_date": "2020-04-03",
        "updatedAt": "2020-03-30T11:04:18.002Z",
        "createdAt": "2020-03-30T11:04:18.002Z"
    }

Response (404)

    "Validation error: Title tidak boleh kosong,\nValidation error: Description tidak boleh kosong"

Response (500)

    TypeError: Todo.creates is not a function
        at create (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\controllers\todo_controllers.js:18:14)
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

### PUT /todos/:id

> Merubah data to do yang sudah ada

Request Header

    {
        Content-Type: application/x-www-form-urlencoded,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiaGFtemFoX2FiZHVsbGFoIiwiaWF0IjoxNTg1NjU1NDM2fQ.h77bCgZkvuOnxVlShgcV_9lXXPpXx6F70Vf4DXnGcLk"
    }

Request Body

    {
        title: Dokumentasi API,
        description: "Sakit kepala membuat dokumentasi API",
        status: 0, //satatus berupa boolean jadi input 0 atau 1
        due_date: "2020-04-03", // due_date berupa only date jadi penginputan berupa tahun - bulan (dengan 0 didepan ketika angka dibawah 10) - tanggal (dengan 0 didepan ketika angka dibawah 10)
    }

Response (200)

    {
        "id": 3,
        "title": "Dokumentasi API",
        "description": "Sakit kepala membuat dokumentasi API",
        "status": true,
        "due_date": "2020-04-03",
        "createdAt": "2020-03-30T11:04:18.002Z",
        "updatedAt": "2020-03-30T11:25:16.663Z"
    }

Response (404)

    "Validation error: Title tidak boleh kosong"

Response (500)

    TypeError: Todo.findsByPk is not a function
        at update (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\controllers\todo_controllers.js:56:14)
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at next (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:137:13)
        at Route.dispatch (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:112:3)       
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:281:22
        at param (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:354:14)
        at param (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:365:14)
        at Function.process_params (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:410:3)
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

### Delete /todos/:id

> Menghapus data to do dengan id yang diberikan

Request Header

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiaGFtemFoX2FiZHVsbGFoIiwiaWF0IjoxNTg1NjU1NDM2fQ.h77bCgZkvuOnxVlShgcV_9lXXPpXx6F70Vf4DXnGcLk"
    }

Request Body

    not needed

Response (200)

    {
            "id": 2,
            "title": "API",
            "description": "susah belajar membuat API",
            "status": false,
            "due_date": "2020-04-03",
            "createdAt": "2020-03-30T06:43:04.661Z",
            "updatedAt": "2020-03-30T08:16:38.012Z"
        }

Response (404)

    {
        "message": "todo not found"
    }

Response (500)

    TypeError: Todo.findsByPk is not a function
        at getOne (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\controllers\todo_controllers.js:93:14)
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at next (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:137:13)
        at Route.dispatch (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\route.js:112:3)       
        at Layer.handle [as handle_request] (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\layer.js:95:5)
        at D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:281:22
        at param (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:354:14)
        at param (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:365:14)
        at Function.process_params (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\node_modules\express\lib\router\index.js:410:3)
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

### POST /users/register

> Menambahkan data user

Request Header

    not needed

Request Body

    {
        username: jessica_sugianto,
        password: jessica
    }

Response (200)

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiaGFtemFoX2FiZHVsbGFoIiwiaWF0IjoxNTg1NjU1NDM2fQ.h77bCgZkvuOnxVlShgcV_9lXXPpXx6F70Vf4DXnGcLk"
    }

Response (404)

    "Validation error: Username tidak boleh kosong,\nValidation error: Password tidak boleh kosong"

Response (500)

    TypeError: User.creates is not a function
        at register (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\controllers\user_controllers.js:7:14)
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

### POST /users/login

> Masuk ke dalam aplikasi

Request Header

    not needed

Request Body

    {
        username: jessica_sugianto,
        password: jessica
    }

Response (200)

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiaGFtemFoX2FiZHVsbGFoIiwiaWF0IjoxNTg1NjU1NDM2fQ.h77bCgZkvuOnxVlShgcV_9lXXPpXx6F70Vf4DXnGcLk"
    }

Response (404)

    "Validation error: Username tidak boleh kosong,\nValidation error: Password tidak boleh kosong"

Response (500)

    TypeError: User.findOnes is not a function
        at login (D:\Haktiv8\Phase 2\Week 1\fancy-to-do\server\controllers\user_controllers.js:29:14)
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