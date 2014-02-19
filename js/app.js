$(function () {
    var pageContents = {
        'index': {
            title: 'Ask Ziggy',
            template: 'index'
        },
        'apps': {
            title: 'Apps',
            template: 'apps'
        },
        'videos': {
            title: 'Videos',
            template: 'videos'
        },

        'blog': {
            title: 'Blog',
            template: 'other',
            content: {
                title: 'Hello there, I\'m the second page',
                body: 'something else'
            }
        },
        'portal': {
            title: 'NLU Portal',
            template: 'other',
            content: {
                title: 'Hello there, I\'m the third page',
                body: 'Lorem ipsum Aute dolore sit voluptate laboris exercitation ullamco velit qui eiusmod mollit est qui fugiat aute laboris aliquip aliquip aliquip magna.'
            }
        },
        'about': {
            title: 'About',
            secondary: true,
            template: 'other',
            content: {
                title: 'About Us',
                body: 'about under construction'
            }
        },
        'press': {
            title: 'Press',
            secondary: true,
            template: 'other',
            content: {
                title: 'In the news...',
                body: 'news under construction'
            }
        },
        'contact': {
            title: 'Contact',
            secondary: true,
            template: 'other',
            content: {
                title: 'Contact Us',
                body: 'contact under construction'
            }
        }
    };

    $(window).on('resize load orientationchange', function() {
        // console.log($(window).outerWidth());
        var windowWidth = $(window).outerWidth();
        // if (windowWidth > 800) {
        //     $('html,body').css('font-size', windowWidth/80);
        // } else {
        //     $('html,body').css('font-size', '100%');
        // }
    });

    // Generate header links
    var $links = $(document.createElement('ul'));
    var pageContentKeys = Object.keys(pageContents);
    for (var i = 0; i < pageContentKeys.length; i++) {
        if (i === 0) continue;
        var key = pageContentKeys[i];
        $links.append('<li><a href="'+key+'">'+pageContents[key].title+'</a></li>');
    };
    $('#header').html(HAML['header']({'links': $links.html()}));

    var clickFunction = function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var pageContent = pageContents[href.split('.')[0]];
        openPage(pageContent);
        window.history.pushState(pageContent, pageContent.title, href);
    };

    function openPage(pageContent) {
        if ('title' in pageContent)
            document.title = pageContent.title;
        if ('template' in pageContent && pageContent.template in HAML) {
            if ('content' in pageContent)
                $('#content').html(HAML[pageContent.template](pageContent.content));
            else
                $('#content').html(HAML[pageContent.template]);
            $('#content a').click(clickFunction);
        } else {
            throw '"pageContent" must contain "template", and so must the "HAML" object.';
        }
    }

    $('a').click(clickFunction);

    if (location.pathname == '/' || location.pathname == '/index') {
        openPage(pageContents['index']);
    } else {
        openPage(pageContents[location.pathname.substring(1)]); // all paths start with '/', so remove it. Ex: '/index'
    }
    window.history.replaceState(pageContents['index'], pageContents['index'].title, '');

    $(window).load(function () {
        window.setTimeout(function() {
            window.addEventListener('popstate', function(e) {
                openPage(e.state);
            }, false);
        }, 1);
    });
});