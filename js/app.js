$(function () {
    // $('#content').html(JST["jade/index"]);
    // $('#content').html(JST["jade/other"]({
    //     title: "Hello",
    //     body: "Lorem ipsum Eu dolor ea Duis id occaecat eu pariatur aliquip sit cillum laborum minim deserunt magna ex mollit commodo velit culpa."
    // }));
    // $('#content').html("Hello!");

    var $project = $('.project');
    // var collapsable = [
    // '.name',
    // '.description',
    // '.logo',
    // 'p',
    // 'h2',
    // 'h3',
    // 'h4',
    // 'h5',
    // 'h6'
    // ];
    // // for (var i = 0; i < collapsable.length; i++) {
    // //     var partialSelector = collapsable[i];
    // //     var $item = $project.find(partialSelector);
    // //     // $item.data('height', $item.outerHeight());
    // //     // var $item = $('project.collapsed').find(partialSelector);
    // //     // $item.css('max-height', $item.outerHeight());
    // // };
    $project.addClass('collapsed');
    $previousTarget = null;

    $('.project.collapsed').click(function (e) {
        var $target = $(this);
        $target.removeClass('collapsed');
        if ($previousTarget != null && $previousTarget != $target) {
            var height = $previousTarget.outerHeight();
            $previousTarget.addClass('collapsed');
        }
        $.scrollTo($target);
        $previousTarget = $target;
    });

    $('.toggle-link').click(function(e) {
        var $target = $(e.target);
        var $block = $('.toggle-block');
        $block.toggleClass('active');
        if ($block.hasClass('active')) {
            var position = $(window).scrollTop();
            $(e.target).text('less...');
            $target.data('old-position', position);
            var scrollHandler = function () {
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