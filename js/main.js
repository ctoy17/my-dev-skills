$(document).ready(function(){ //when dom is ready and webpage loads, page is ready
    console.log("page is ready");
});


$('.addSkill').on('click', function(){
    let item = ` 
    <tr>
        <td> <button class="btn btn-xs btn-danger"> X </button>${$('.skillField').val()}
        </td>
    </tr>
    `; 
    $('#devSkills tbody').append(item);
    $('.skillField').val('');
    
    $('#devSkills tbody').on('click', 'button', function(){
        $(this).closest('tr').remove();
    });
});



//ORIGINAL ATTEMPT
//I tried to have it so it was broken down into each part and stored as variables so the end part of creating the table row was just using the variables.
//it kept adding the input on top of each other. I could have tried to change the display style, but came up with an easier way in the process of debugging

//$('.addSkill').on('click', function(){
// var inputValue = $('.skillField').val();
// var removeBtn = $('<button class="btn btn-xs btn-danger" id=removeItem></button>').text("X");
// let item = ` 
// <tr>
//     <td> ${$('#devSkills tbody').append(inputValue).prepend(removeBtn)}
//     </td>
// </tr>`; 

// $('.skillField').val('');

// $('#removeItem').on('click', item, function(){
//     $('#devSkills tbody').remove();
// });
// });