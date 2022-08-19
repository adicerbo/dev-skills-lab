// // // // works but got from the stack overflow
// $('#addButton').click(function() {
//     $('#skills').append($('<li>', {
//         text: $('#skillInput').val()
//     }));
// });

// // // // failure
// $('<li>').on('click', function() {
//     $(this).append('#skillInput')
// });

// // // // failure
// const $input = $('#skillInput').val()
// console.log($input)

$('#addButton').on('click', function() {
    let $input = $('#skillInput').val()
    $('#skills').append(`<li id ='abilities'><span>X</span>${$input}</li>`)
    $('#skillInput').val('')
})


// // // // failure
// $('#addButton').on('click', function(evt) {
//     console.log(evt, this)
// })


// // // // remove function
$('#skills').on('click', function() {
    let $text = $('#abilities')
    $text.remove()
})