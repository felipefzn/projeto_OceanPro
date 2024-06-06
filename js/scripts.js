/* scripts.js */

$(document).ready(function () {
    $('[data-toggle="tab"]').on('click', function (e) {
        e.preventDefault();
        $('.tab-pane').removeClass('active show');
        $($(this).attr('href')).addClass('active show');
        $('[data-toggle="tab"]').removeClass('active');
        $(this).addClass('active');
    });
});
