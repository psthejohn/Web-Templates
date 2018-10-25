$(function () {
    $(".content").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".content:hidden").slice(0, 6).slideDown();
        if ($(".content:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href="#top"]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 6000);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});