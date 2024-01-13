$( document ).ready(function(){
    let checked = {};
    $('input[type="checkbox"]').click(function() {
        if($(this).prop("checked") == true){
            checked[$(this).attr('data-id')] = $(this).attr('data-name');
        }
        else if($(this).prop("checked") == false) {
            delete checked[$(this).attr('data-id')];
        }
        if (Object.keys(checked).length > 0) {
            $('.amenities h4').text(Object.values(checked).join(', '));
        }
        else {
            $('.amenities h4').html('&nbsp;');
        }
    });
});
