$(function(){
    var $firstMenu = $('nav > ul.depth1 > li'),
        $header = $('#header .container1500'),
        $logo = $('#header .container1200 > a > .logo')
        $depth1 = $('#header nav > ul.depth1 > li > a')

        $firstMenu.hover(
            function(){
                $header.css({
                    height: "370px",
                    background: "url(/img/menu.jpg)"
                }),
                $logo.css({
                    background:"url('/img/header_logo2.png')"
                }),
                $depth1.css("color","#000")
            },
            function(){
                $header.css({
                    height:"84px",
                    background:"none"
                }),
                $logo.css({
                    background:"url('/img/header_logo1.png')"
                }),
                $depth1.css("color","#fff")
            }
        )

        $(function(){
            var header = $('#header'); //헤더를 변수에 넣기
            var page = $('.page-start'); //색상이 변할 부분
            var pageOffsetTop = page.offset().top; //색상 변할 부분의 top값 구하기
            $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
              pageOffsetTop = page.offset().top;
            });
            
            $(window).on('scroll', function(){
              if($(window).scrollTop() >= pageOffsetTop) { // 스크롤이 page보다 밑에 내려가면
                header.addClass('down'); //클래스 추가
              } else { // 스크롤 올릴 때
                header.removeClass('down'); //클래스 제거
              }
            });
          });


});