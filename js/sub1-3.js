/* 2단계 메뉴 */
$(function(){

    $('.depth1 > li').hover(
        function(){
            $('.depth2').stop().slideDown(200);
            $('#gnb').addClass('show')
            $('#gnb > .depth1 > li > a').addClass('show')
        },
        function(){
            $('.depth2').stop().slideUp(200);
            $('#gnb').removeClass('show')
            $('#gnb > .depth1 > li > a').removeClass('show')
        }
    );


/* swiper */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 17,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // next 버튼
  var next = document.querySelector('.swiper-next');
  next.onclick = function () {
    swiper.slideNext(500, function () {
      console.log('next');
    });
  }

  // prev 버튼
  var prev = document.querySelector('.swiper-prev');
  prev.onclick = function () {
    swiper.slidePrev(500, function () {
      console.log('prev');
    });
  }
  
}) // end $
