$(document).ready(function() {
    let token = ''

    //login
    $('#formLogin').submit((e) => {
        e.preventDefault()
        const username = $('#username').val()
        const password = $('#password').val()
        $.ajax({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                data: {
                    username,
                    password
                }
            })
            .done(result => {
                $('#sign_in').hide()
                $('#todo').show()
            })
            .fail(err => {
                $('#error').append(`Error login from server: ${err}`)
            })
    })
})