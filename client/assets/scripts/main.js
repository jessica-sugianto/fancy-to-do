$(document).ready(function() {
    if (localStorage.getItem('token')) {
        $('#sign_in').hide()
        $('#register').hide()
        $('#todo').show()
        $('#add_todo').hide()
        $('#edit_todo').hide()
        $('#aLogin').hide()
        $('#aRegister').hide()
        $('#aTodo').show()
        $('#aLogout').show()
    } else {
        $('#sign_in').show()
        $('#register').hide()
        $('#todo').hide()
        $('#add_todo').hide()
        $('#edit_todo').hide()
        $('#aLogin').show()
        $('#aRegister').show()
        $('#aTodo').hide()
        $('#aLogout').hide()
    }


    //menampilkan form login
    login = function() {
        $('#sign_in').show()
        $('#register').hide()
        $('#todo').hide()
        $('#add_todo').hide()
        $('#edit_todo').hide()
    }

    //menampilkan todo
    todo = function() {
        $('#sign_in').hide()
        $('#register').hide()
        $('#todo').show()
        $('#add_todo').hide()
        $('#edit_todo').hide()
    }

    //menampilkan form register
    register = function() {
        $('#sign_in').hide()
        $('#register').show()
        $('#todo').hide()
        $('#add_todo').hide()
        $('#edit_todo').hide()
    }

    createTodo = function() {
        $('#sign_in').hide()
        $('#register').hide()
        $('#todo').hide()
        $('#add_todo').show()
        $('#edit_todo').hide()
    }

    //Login
    $('#formLogin').submit((e) => {
        e.preventDefault()
        const username = $('#usernameLogin').val()
        const password = $('#passwordLogin').val()
        $.ajax({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: {
                    username: username,
                    password: password
                }
            })
            .done(result => {
                localStorage.setItem('token', result.token)
                $('#aLogin').hide()
                $('#aRegister').hide()
                $('#aTodo').show()
                $('#aLogout').show()

                showTodo()

                $('#success').append(`<div class="alert alert-success" role="alert"> User berhasil login </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error login dari server: ${err.responseText} </div>`)
            })
    })

    //Register
    $('#formRegister').submit((e) => {
        e.preventDefault()
        const username = $('#usernameRegister').val()
        const password = $('#passwordRegister').val()
        $.ajax({
                method: 'POST',
                url: 'http://localhost:3000/users/register',
                data: {
                    username: username,
                    password: password
                }
            })
            .done(result => {

                $('#sign_in').show()
                $('#aLogin').show()
                $('#aRegister').show()
                $('#register').hide()

                $('#success').append(`<div class="alert alert-success" role="alert"> User berhasil ditambhakan </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error register dari server: ${err.responseText} </div>`)
            })
    })

    //Create To do
    $('#formAddTodo').submit((e) => {
        e.preventDefault()

        let title = $('#add_title').val()
        let description = $('#add_description').val()
        let due_date = $('#add_due_date').val()

        $.ajax({
                method: 'POST',
                url: 'http://localhost:3000/todos/',
                headers: {
                    'token': localStorage.getItem('token')
                },
                data: {
                    title: title,
                    description: description,
                    due_date: due_date
                }
            })
            .done(result => {
                showTodo()

                $('#success').append(`<div class="alert alert-success" role="alert"> Todo ${result.title} berhasil ditambahkan </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error register dari server: ${err.responseText} </div>`)
            })
    })

    //Edit To do
    $('#formEditTodo').submit((e) => {
        e.preventDefault()

        let title = $('#edit_title').val()
        let description = $('#edit_description').val()
        let due_date = $('#edit_due_date').val()
        let status = $('#edit_status').val()
        let id = $('#edit_id').val()

        console.log(status)

        $.ajax({
                method: 'PUT',
                url: `http://localhost:3000/todos/${id}`,
                headers: {
                    'token': localStorage.getItem('token')
                },
                data: {
                    title: title,
                    description: description,
                    due_date: due_date,
                    status: status
                }
            })
            .done(result => {
                showTodo()

                $('#success').append(`<div class="alert alert-success" role="alert"> Todo ${result.title} berhasil diubah </div>`)
            })
            .fail(err => {
                $('#error').append(`<div class="alert alert-danger" role="alert"> Error register dari server: ${err.responseText} </div>`)
            })
    })
})

function onSignIn(googleUser) {
    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    const id_token = googleUser.getAuthResponse().id_token
    $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/users/OAuth',
            data: {
                token: id_token
            }
        })
        .done(result => {

            console.log(result)

            $('#aLogin').hide()
            $('#aRegister').hide()
            $('#aTodo').show()
            $('#aLogout').show()

            localStorage.setItem('token', result.token)

            showTodo()

            console.log(result)
        })
        .fail(err => {
            $('#error').append(`<div class="alert alert-danger" role="alert"> Error register dari server: ${err.responseText} </div>`)
        })

}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    if (auth2) {
        $('#sign_in').show()
        $('#register').hide()
        $('#todo').hide()
        $('#add_todo').hide()
        $('#edit_todo').hide()
        $('#aLogin').show()
        $('#aRegister').show()
        $('#aTodo').hide()
        $('#aLogout').hide()
        auth2.signOut().then(function() {
            console.log('User signed out.');
        });
        localStorage.removeItem('token')
    } else {
        $('#sign_in').show()
        $('#register').hide()
        $('#todo').hide()
        $('#add_todo').hide()
        $('#edit_todo').hide()
        $('#aLogin').show()
        $('#aRegister').show()
        $('#aTodo').hide()
        $('#aLogout').hide()
        localStorage.removeItem('token')
    }
}

//Todo List
function showTodo() {
    $('#sign_in').hide()
    $('#register').hide()
    $('#todo').show()
    $('#add_todo').hide()
    $('#edit_todo').hide()
    $('#aLogin').hide()
    $('#aRegister').hide()
    $('#aTodo').show()
    $.ajax({
            url: 'http://localhost:3000/todos',
            headers: {
                'token': localStorage.getItem('token')
            },
            method: 'GET'

        })
        .done(result => {
            let data = ``

            for (let i = 0; i < result.length; i++) {
                let status = ''
                if (result[i].status) {
                    status = 'completed'
                } else {
                    status = 'uncompleted'
                }
                data += `<tr>
                    <td> ${result[i].title} </td>
                    <td> ${result[i].description} </td>
                    <td> ${result[i].due_date} </td>
                    <td> ${status} </td>
                    <td> <button type='button' class="btn btn-secondary" onClick='editTodo(${result[i].id})'> Update </button> | <button type='button' class="btn btn-danger" onClick=deleteTodo(${result[i].id})> Delete </button> </td>
                </tr>
                `
            }

            $('#todo_list').append(data)
        })
        .fail(err => {
            console.log(err)
            $('#error').append(`<div class="alert alert-danger" role="alert"> Error mengambil data todo dari server: ${err.responseText} </div>`)
        })
}

//edit
function editTodo(id) {
    console.log('masuk ke edit', id)
    $('#sign_in').hide()
    $('#register').hide()
    $('#todo').hide()
    $('#add_todo').hide()
    $('#edit_todo').show()

    $.ajax({
            url: `http://localhost:3000/todos/${id}`,
            headers: {
                'token': localStorage.getItem('token')
            },
            method: 'GET'

        })
        .done(result => {
            console.log(result)
            $('#title').append(`<input type="text" class="form-control" id="edit_title" name="title" placeholder="${result.title}" value="${result.title}"> <input type="text" class="form-control" id="edit_id" name="id" value="${result.id}" hidden>`)
            $('#description').append(`<input type="text" class="form-control" id="edit_description" name="description" placeholder="${result.description}" value="${result.description}">`)
            $('#due_date').append(`<input type="text" class="form-control" id="edit_due_date" name="due_date" placeholder="${result.due_date}" value="${result.due_date}">`)
            if (result.status) {
                $('#status').append(`<div class="form-check">
                <input class="form-check-input" type="radio" name="status" id="edit_status" value="1" checked>
                <label class="form-check-label" for="completed">
                  Complete
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="status" id="edit_status" value="0">
                <label class="form-check-label" for="uncomplete">
                  Uncomplete
                </label>
              </div>`)
            } else {
                $('#status').append(`<div class="form-check">
                <input class="form-check-input" type="radio" name="status" id="edit_status" value="1">
                <label class="form-check-label" for="completed">
                  Complete
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="status" id="edit_status" value="0" checked>
                <label class="form-check-label" for="uncomplete">
                  Uncomplete
                </label>
              </div>`)
            }
        })
        .fail(err => {
            console.log(token)
            console.log(err)
            $('#error').append(`<div class="alert alert-danger" role="alert"> Error mengambik data todo dari server: ${err.responseText} </div>`)
        })
}

//delete
function deleteTodo(id) {
    $.ajax({
            url: `http://localhost:3000/todos/${id}`,
            headers: {
                'token': localStorage.getItem('token')
            },
            method: 'DELETE'

        })
        .done(result => {
            $('#success').append(`<div class="alert alert-success" role="alert"> Todo ${result.title} berhasil dihapus </div>`)
        })
        .fail(err => {
            console.log(err)
            $('#error').append(`<div class="alert alert-danger" role="alert"> Error mengambik data todo dari server: ${err.responseText} </div>`)
        })
}