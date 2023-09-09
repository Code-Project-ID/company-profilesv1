
    // Init AOS Animation
    //https://michalsnik.github.io/aos/
    AOS.init();
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-header").offset().top > 50) {
            $(".fix-top").addClass("top-nav-collapse");
            $(".header-container").css("top", "0px");
        } else {
            $(".fix-top").removeClass("top-nav-collapse");
            $(".header-container").css("top", "10px");
        }
        
    });

    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li a').removeClass('active');
        $(this).closest('li a').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
    });
