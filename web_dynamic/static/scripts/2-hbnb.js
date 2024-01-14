$(document).ready(function () {
    const url = `${window.location.origin}/api/v1/status/`;
    $.get(url, (res) => {
        if (res.status === 'OK') {
            $('DIV#api_status').addClass('available');
        } else {
            $('DIV#api_status').removeClass('available');
        }
    });

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
});
