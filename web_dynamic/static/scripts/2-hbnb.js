$(document).ready(function () {
    let checked = {};
    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            checked[$(this).attr('data-id')] = $(this).attr('data-name');
        }
        else if ($(this).prop("checked") == false) {
            delete checked[$(this).attr('data-id')];
        }
        if (Object.keys(checked).length > 0) {
            $('.amenities h4').text(Object.values(checked).join(', '));
        }
        else {
            $('.amenities h4').html('&nbsp;');
        }
    });
    $.get('http://0.0.0.0:5001/api/v1/status/', (res) => {
        if (res.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });
});
