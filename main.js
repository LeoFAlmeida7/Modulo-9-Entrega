$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#newTarefa').val();
        
        const newItem = $('<li style="display: none;"></li>');
        newItem.html(`<span>${novaTarefa}</span>`);

        $(newItem).appendTo("ul");
        

        $(newItem).fadeIn(500);
        $('#newTarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });

   
})
