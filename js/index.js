//메인배너 슬라이드
$(function () {
    var swiper = new Swiper('.slide ', {
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        //loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.slide .swiper-button-next',
            prevEl: '.slide .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.slide .swiper-pagination',
            clickable: true,
        },
    });
});


// 갤러리
$(function () {
    var swiper = new Swiper('.gallery .gallery_inner ', {
        slidesPerView: 5,//보여지는 갤러리 수
        spaceBetween: 35,//갤러리 사이 간격
        speed: 1500,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 2500,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        navigation: {//화살표 버튼
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        pagination: {//블릿 버튼
            el: '.gallery .swiper-pagination',
            clickable: true,
        },
    });
});

//마우스커서효과
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.5; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
    const rotate = 'rotate(' + angle + 'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.add(className);
    });

    curosrModifier.addEventListener('mouseleave', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.remove(className);
    });
});

//글자 올라오는 효과
$(function () {
    AOS.init({
        duration: 1200 //aos 나타나는 속도
    });
});

//팝업 효과
$(function () {
    $('.exhibition_box li:nth-child(1)').click(function () {
        $('.exhibition_right img').removeClass('poster_on');
        $('.exhibition_right img:nth-child(1)').addClass('poster_on');
    });

    $('.exhibition_box li:nth-child(2)').click(function () {
        $('.exhibition_right img').removeClass('poster_on');
        $('.exhibition_right img:nth-child(2)').addClass('poster_on');
    });

    $('.exhibition_box li:nth-child(3)').click(function () {
        $('.exhibition_right img').removeClass('poster_on');
        $('.exhibition_right img:nth-child(3)').addClass('poster_on');
    });

    $('.exhibition_box li:nth-child(4)').click(function () {
        $('.exhibition_right img').removeClass('poster_on');
        $('.exhibition_right img:nth-child(4)').addClass('poster_on');
    });

    $('.exhibition_box li:nth-child(5)').click(function () {
        $('.exhibition_right img').removeClass('poster_on');
        $('.exhibition_right img:nth-child(5)').addClass('poster_on');
    });
});

//흘러가는 슬라이드 효과
$(function () {
    var swiper = new Swiper('.flowslide_inner ', {
        slidesPerView: 5,//보여지는 갤러리 수
        spaceBetween: 10,//갤러리 사이 간격
        speed: 3000,//버튼을 슬라이드가 넘어가는 시간
        autoplay: {
            delay: 0,//자동으로 넘어가기 전 머무르는 시간
            disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
    });

    $('.flowslide .swiper-slide').on('mouseover', function () {
        swiper.autoplay.stop();
    });
    $('.flowslide .swiper-slide').on('mouseout', function () {
        swiper.autoplay.start();
    });
});



//탑버튼 안보이다 보이게
$(function () {
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });


    //서브메뉴 슬라이드
    $('.nav> li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav> li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });

    //팝업 검색창
    $('.h_right> input').click(function () {
        $('.popup').fadeIn();//.show();
        $('.input_in').addClass('search');
    });

    $('.popup .close_icon').click(function () {
        $('.popup').fadeOut();//.hide();
        $('.input_in').removeClass('search');
    });

});
