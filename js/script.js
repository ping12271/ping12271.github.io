$(function () {
    portfolio.init();
})


const portfolio = {
    init: function () {
        portfolio.handleSideMenu();
        portfolio.getScroll();
        portfolio.backTop();
        portfolio.scrollTo();
        portfolio.slide();
        portfolio.AOS();
    },

    handleSideMenu: function () {
        $(".btn-menu").on("click", function () {
            $("html").addClass("open-side-menu");
        })

        $(".screen").on("click", function () {
            $("html").removeClass("open-side-menu");
        });
    },

    getScroll: function () {
        $(window).on("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var sectionHomeHeight = $('.section-home').innerHeight();
            if(scrollTop > 180) {
                $("html").addClass("get-scroll");
            } else {
                $("html").removeClass("get-scroll");
            }

            if(scrollTop > sectionHomeHeight) {
                $("html").addClass("show-header")
            } else {
                $("html").removeClass("show-header")
            }

            if(scrollTop > 600) {
                $("html").addClass("need-back-top");
            } else {
                $("html").removeClass("need-back-top");
            }
        });
    },

    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            })
        });
    },

    scrollTo: function () {
        $('.main-header li').on('click', function () {
            $(this).addClass('is_active').siblings().removeClass('is_active');
            $('html').removeClass('open-side-menu');
            const menuIndex = $(this).index();
            const sectionOffset = $('.scroll').eq(menuIndex).offset();
            const offsetTop = sectionOffset.top;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 600)
        });
    },

    slide: function () {
        $('.hire-btn').on('click', function () {
            $('.pick').toggleClass('active');
        });
    },

    AOS: function () {
        AOS.init();
    }
};






























