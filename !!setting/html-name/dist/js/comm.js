$(function(){
    
    //*header에 sticky 붙이기
    // window를 스크롤 했을 때 
    // if문 사용 -> 만약 스크롤 값이 50보다 커질 경우
    // #header에게 .sticky 추가 
    // else 사용 -> 스크롤 값이 50보다 작을 경우 
    // #header에 붙어있던 .sticky 삭제

    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('#header').addClass('sticky')
        }else{
            $('#header').removeClass('sticky')
        }
    }).trigger('scroll')


    // nav관련 
    let $gnb = $('#gnb')
        $header = $('#header')
    
    $gnb
    .removeClass('active') /* 초기화 */
    .on("mouseenter focusin", function(){
      $(this).addClass('active')
      $header.addClass('sticky')
    })
    .on("mouseleave focusout", function(){
      $(this).removeClass('active')
      if($(window).scrolltop()<50){ 
      $header.removeClass('sticky')
      }
    })




    // *메뉴 클릭시 해당 해시태그로 애니메이션 되면서 이동
    // #collapsibleNavbar .nav-link를 클릭했을 때
    // a링크 기능 없애고 
    // 만약 링크에 해시태그가 비어있지 않은 경우
    // html, body태그를 animate 시켜줘
    // scrollTop():$(hash).offset().top

    $('#collapsibleNavbar .nav-link').click(function(event){
        event.preventDefault()
        if(this.hash !== ""){

            let hash = this.hash;

            $('html, body').animate({
                scrollTop : $(hash).offset().top -56
            },1000)
        }
    })

    // scrollup js
    $ . scrollUp ({
        scrollText: '페이지 위로', // Text for element, can contain HTML
    } ) ; 

    // 오브젝트 애니메이션
    // 윈도우 스크롤 했을 때
    // .ani-slide를 각각 잡아서
    // 만약 스크롤 값보다 .ani-slide 위치 값이 크다면
    // (.ani-slide가 화면 안으로 들어왔을 때)
    // .ani-top 클래스를 추가

    $(window).scroll(function(){
        $('.ani-slide').each(function(){

            // if($(window).scrollTop()> $('.ani-slide').offset().top){        
            // } - 명령문이 너무 길어서 변수 선언하고 명령넣음.

            let winscroll = $(window).scrollTop(),
                pos = $(this).offset().top
      
            if(winscroll+700 > pos){
                $(this).addClass('ani-top')
            }
               

            
        })
    })

    // wow js
    new WOW().init();
    
    // slide-top(스와이퍼)
    var swiper = new Swiper('.ani-slide1', {
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
      });

    //   slide-sns(스와이퍼)
      var swiper = new Swiper('.ani-slide2', {
        slidesPerView: 1,
        spaceBetween: 30,
        // slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }
      });

    // ani-slide-3(스와이퍼)
     var swiper = new Swiper('.ani-slide3 .swiper-container',{
        slidesPerView: 4,
        spaceBetween: 30,
        // slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        // centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next-out',
          prevEl: '.swiper-button-prev-out',
        },
    });
})