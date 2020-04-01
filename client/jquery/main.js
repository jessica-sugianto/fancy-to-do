$(document).ready(function() {
    $.ajax({
        method: 'POST',
        urt: 'http://localhost:3000/todos'
    })
})