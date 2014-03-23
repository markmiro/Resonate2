$(function () {
    // $('#content').html(JST["jade/index"]);
    // $('#content').html(JST["jade/other"]({
    //     title: "Hello",
    //     body: "Lorem ipsum Eu dolor ea Duis id occaecat eu pariatur aliquip sit cillum laborum minim deserunt magna ex mollit commodo velit culpa."
    // }));
    // $('#content').html("Hello!");
    count = 0;

    // var oldPosition = 0;
    $('.toggle-link').click(function(e) {
        var $target = $(e.target);
        var $block = $('.toggle-block');
        $block.toggleClass('active');
        if ($block.hasClass('active')) {
            var position = $(window).scrollTop();
            $(e.target).text('less...');
            $target.data('old-position', position);
            var scrollHandler = function () {
                count++;
                var height = $block.outerHeight();
                if ($(window).scrollTop() > $block.position().top + height) {
                    $target.text('more...');
                    $block.removeClass('active');
                    $target.removeData('old-position');
                    $.scrollTo('-='+height);
                    $(window).off('scroll', scrollHandler);
                    // $block.css('background', 'red');
                }
            }
            $(window).scroll(scrollHandler);
            // $.scrollTo(position + 10, 400);
        } else {
            $target.text('more...');
            var oldPosition = parseInt($target.data('old-position'));
            $target.removeData('old-position');
            $.scrollTo(oldPosition + 10).scrollTo(oldPosition, 400);
        }
    });
});