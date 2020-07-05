
// ready 함수 - dom이 렌더링 된후에 마지막으로 실행된다.
// dom 이란 document object model로 html을 말한다.
$(function () {
    portfolio.init();
})


var portfolio = {
    init: function () {
        portfolio.handleSideMenu();
        portfolio.getScroll();
        portfolio.backTop();
        portfolio.scrollTo();
        portfolio.slide();
    },

    handleSideMenu: function () {
        // 시나리오
        // $() 셀렉터 함수는 css셀렉터를 이용하여 dom을 선택할수 있다
        // 버튼메뉴를 선택해서 click이벤트가 일어났을때
        // html을 선택해서 addClass를 해준다. 구분점이 되는.
        // $함수는 제이쿼리 오브젝트를 리턴한다.
        $(".btn-menu").on("click", function () {
            $("html").addClass("open-side-menu");
        })

        $(".screen").on("click", function () {
            $("html").removeClass("open-side-menu");
        })
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
        })
    },

    backTop: function () {
        $('.back-top').on('click', function () {
            $('html, body').animate({
                scrollTop:0
            })
        })
    },

    scrollTo: function () {
        $('.main-header li').on('click', function () {
            $('html').removeClass('open-side-menu');
            const menuIndex = $(this).index();
            const sectionOffset = $('.scroll').eq(menuIndex).offset();
            const offsetTop = sectionOffset.top;
            $('html, body').animate({
                scrollTop: offsetTop -60
            }, 600)
        })
    },

    slide: function () {
        $('.testimonial-slideshow').slick({
            prevArrow: $(".slick-prev"),
            nextArrow: $(".slick-next")
        }),
            $('.blog-slideshow').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                dots: true
            }),
            $('.gallery-slideshow').slick({
                centerMode: true,
                centerPadding: '80px',
                slidesToShow: 3,
                arrows: false
            });
    }

}






























