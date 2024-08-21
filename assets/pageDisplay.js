// Decrypts the mail & phone numbers
function decryptContact(code, contact = "mailto:") {
    var address = atob(code);
    window.location.href = contact + address;
}

// manages the video animation when the video is displayed on the viewport
function videoAnimate(videoArray) {
    videoArray.forEach(element => {
        if ($(element.target).hasClass('video-embed') && !element.isIntersecting) {
            $(element.target).css('height', '405px');
            $(element.target).css('width', '720px');
            $(element.target).css('margin', '20px ' + ($(element.target).parent().width()- 720)/2 + 'px');
        } else if ($(element.target).hasClass('video-holder')) {
            let video = $(element.target).find('.video-embed');
            if (element.intersectionRatio > 0.3) {
                // get basic video dimensions and parent dimensions
                let parentWidth = $(element.target).width();
                let parentHeight = $(element.target).height();
                let dynWidth =  Math.floor(parentWidth);
                let dynHeight =  (dynWidth*9)/16;
                // unset max width to prevent blocking
                if ($(video).css('max-width') !== '99%') {
                    $(video).css('max-width', '99%');
                }
                // set width to video based on ratio with intersection
                $(video).css('width', dynWidth - 40 +'px');
        
                // set height to video based on ratio with intersection and if height isn't too big
                if (parentHeight <= dynHeight) {
                    $(video).css('height', parentHeight+'px');
                } else {
                    $(video).css('height', dynHeight - 20 +'px');
                }
                vMargin =  (parentHeight - dynHeight) / 2;
                if (vMargin < 0) {
                    vMargin = 10;
                }
                $(video).css('margin', vMargin + 'px 20px');
            }
        }
    });
}

// animates the video vertically for mobile versions
function videoAnimateMobile(videoArray) {
    videoArray.forEach(element => {
        if ($(element.target).hasClass('video-embed') && !element.isIntersecting) {
            let hMargin =  Math.floor(($(element.target).parent().width() - $(element.target).width()) / 2);
            $(element.target).css('margin', '20px ' + hMargin + 'px');
        }
        else if ($(element.target).hasClass('video-holder') && element.intersectionRatio > 0.1) {
            let video = $(element.target).find('.video-embed');
            let vMargin = 20 + element.intersectionRatio*100;
            $(video).css('margin-top', vMargin + 'px');
            $(video).css('margin-bottom', vMargin + 'px');
            setVideoMargins(video, false);
        }
    });
}

// Dynamically redefine the video margins
function setVideoMargins(e, resizeHeight = true) {
    let pHeight = $(e).parent().height();
    let vHeight = $(e).height();
    let pWidth = $(e).parent().width();
    let vWidth = $(e).width();
    let vMargins = Math.floor((pHeight - vHeight) / 2);
    let hMargins = Math.floor((pWidth - vWidth) / 2);
    if (!resizeHeight) {
        $(e).css('margin-left', hMargins + 'px');
        $(e).css('margin-right', hMargins + 'px');
    } else {
        if (vMargins < 20) {
            vMargins = 20;
        }
        
        $(e).css('margin', vMargins + 'px ' + hMargins + 'px');
    }
}

// assets lazyloading
function lazyLoad(elementArray) {
    elementArray.forEach(element => {
        if (!element.isIntersecting) {
            return;
        }
        if ($(element.target).attr('data-src') !== undefined && $(element.target).attr('src') == undefined) {
            element.target.src =  $(element.target).attr('data-src');
        }
    });
}

function closeReview($elem) {
    $elem
        .css('max-height', '168px')
        .css('overflow', 'hidden')
        .css('-webkit-line-clamp', '7');
    $elem.parents('.review-text').css('height', '200px');
}

function openReview($elem) {
    $elem
        .css('max-height', 'unset')
        .css('overflow', 'visible')
        .css('-webkit-line-clamp', '20');
    $elem.parents('.review-text').css('height', $elem.parents('.review-text')[0].scrollHeight + 'px');
}

function buttonDisplayToggle() {
    let elemLeft = $('#customer-reviews').scrollLeft();
    let elemRight = elemLeft + $(window).width();
    let elemWidth = $('#customer-reviews').get(0).scrollWidth;
    if (elemWidth <= elemRight && $('.review-control-next').is(':visible')) {
        $('.review-control-next').hide();
    } else if (elemWidth > elemRight && !$('.review-control-next').is(':visible')) {
        $('.review-control-next').show();
    }

    if (elemLeft <= 0 && $('.review-control-prev').is(':visible')) {
        $('.review-control-prev').hide();
    } else if (elemLeft > 0 && !$('.review-control-prev').is(':visible')) {
        $('.review-control-prev').show();
    }
}

$(() => {
    // contact info parser
    $('#mg-contact-info').append(atob('bWcubGVmZWJ2cmVAb2ctcGF0cmltb2luZS5jb20='));
    $('#mg-contact-info-wa').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-contact-info-tel').append(atob('KzMzIDYgMDIgMDggNTEgMzI'));
    $('#mg-footer-info').append(atob('bWcubGVmZWJ2cmVAb2ctcGF0cmltb2luZS5jb20='));
    $('#mg-footer-info-wa1').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-footer-info-wa2').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-footer-info-tel').append(atob('KzMzIDYgMDIgMDggNTEgMzI'));


    // review toggle
    $('.review-text').css('height', '200px');
    $('.review-content').on('click', function(e) {
        $elem = $(this).find('a');
        if ($elem[0].scrollHeight > $elem.height() && $elem.height() < 480) {
            openReview($elem);

        } else if(($elem[0].scrollHeight == $elem.height()) || ($elem.parents('.review-text').height() !== 200)) {
            closeReview($elem);
        }

    });

    // videos margin setter
    $('.video-embed').each((i, e) => {
        setVideoMargins(e);
    });

    $('body').on('click', function (e) {
        target = $(e.target);
        // close the navbar if its displayed and if the click is on a non navbar element.
        if ($('#nav-list').hasClass('show') && target.parents('.navbar').length == 0) {
            $('.navbar-toggler').trigger('click');
        }
    });

    const videoElem = document.querySelectorAll('.video-embed');
    const videoConts = document.querySelectorAll('.video-holder');

    if (window.matchMedia("(max-width: 720px)").matches) {
        observer = new IntersectionObserver(videoAnimateMobile, {threshold: [0, 0.3, 0.4, 0.5, 0.6, 0.7]});
        videoElem.forEach(elem => {
            observer.observe(elem);
        });
        videoConts.forEach(elem => {
            observer.observe(elem);
        });
    } else {
        observer = new IntersectionObserver(videoAnimate, {threshold: 0.3});

        videoElem.forEach(elem => {
            observer.observe(elem);
        });
        videoConts.forEach(elem => {
            observer.observe(elem);
        });
    }

    const lazyElements = document.querySelectorAll('.lazy');
    lazyObserver = new IntersectionObserver(lazyLoad, {rootMargin: "500px", threshold: 0});
    lazyElements.forEach(elem => {
        lazyObserver.observe(elem);
    });

    // button scroll left in reviews
    $('.review-control-prev').on('click', () => {
        let scrollVal = $('#customer-reviews').scrollLeft() - $(window).width();
        if (scrollVal < 0) {
            scrollVal = 0;
        }

        // close reviews before scrolling
        if ($('#customer-reviews').height() > 330) {
            $('.review-text').each((i, e) => {
                closeReview($(e).find('a'));
            });
        }

        $('#customer-reviews').animate({
            scrollLeft: scrollVal
        }, 300);
    });

    // button scroll right in reviews
    $('.review-control-next').on('click', () => {
        let scrollVal = $('#customer-reviews').scrollLeft() + $(window).width();
        if (scrollVal > $('#customer-reviews').get(0).scrollWidth) {
            scrollVal = $('#customer-reviews').get(0).scrollWidth;
        }

        // close reviews before scrolling
        if ($('#customer-reviews').height() > 330) {
            $('.review-text').each((i, e) => {
                closeReview($(e).find('a'));
            });
        }

        $('#customer-reviews').animate({
            scrollLeft: scrollVal
        }, 300);
    });

    // display buttons in review when you scroll it
    $('#customer-reviews').on('scroll', () => {
        buttonDisplayToggle();
    });
    // display buttons in review on load
    buttonDisplayToggle();
});
