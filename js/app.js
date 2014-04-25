$(function () {

    var $project = $('.project');

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

    $('.js-auto-width').each(function(index) {
        $(this).css('display', 'inline-block');
        $(this).css('width', $(this).outerWidth()+1);
        $(this).css('display', '');
    });



    $(document).foundation({
      orbit: {
        animation: 'slide',
        timer: false,
        animation_speed: 500,
        navigation_arrows: true,
        bullets: false,
        variable_height: true
      }
    });

    $('.next-project-button').click(function() {
        $.scrollTo('.project-menu');
        $('.projects-container .orbit-next').click();
        // $('.slideshow-wrapper .orbit-timer').click();
    });

    $('.previous-project-button').click(function() {
        $.scrollTo('.project-menu');
        $('.projects-container .orbit-prev').click();
        // $('.slideshow-wrapper .orbit-timer').click();
    });

    $previousMenuItem = $('.project-menu a').first();
    $(".projects").on("before-slide-change.fndtn.orbit", function(event) {
        var slideName = $('.projects .active.slide').attr('data-orbit-slide');
        $currentMenuItem = $('.project-menu a[data-orbit-link="'+slideName+'"]');
        $currentMenuItem.addClass('active');
        $previousMenuItem.removeClass('active');
        $previousMenuItem = $currentMenuItem;
        // console.info("before slide change");
    });

});