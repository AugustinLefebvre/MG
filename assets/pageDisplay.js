function decryptContact(code, contact = "mailto:") {
    var address = atob(code);
    window.location.href = contact + address;
}

$(() => {
    // contact info parser
    $('#mg-contact-info').append(atob('bWcubGVmZWJ2cmVAdmlhLWFwLmNvbQ'));
    $('#mg-contact-info-wa').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-contact-info-tel').append(atob('KzMzIDYgMDIgMDggNTEgMzI'));
    $('#mg-footer-info').append(atob('bWcubGVmZWJ2cmVAdmlhLWFwLmNvbQ'));
    $('#mg-footer-info-wa1').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-footer-info-wa2').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-footer-info-tel').append(atob('KzMzIDYgMDIgMDggNTEgMzI'));


    // review toggle
    $('.review-text').css('height', '200px');
    $('.review-content').on('click', function(e) {
        $elem = $(this).find('a');
        if ($elem[0].scrollHeight > $elem.height() && $elem.height() < 480) {
            $elem
                .css('max-height', 'unset')
                .css('overflow', 'visible')
                .css('-webkit-line-clamp', '20');
            $elem.parents('.review-text').css('height', $elem.parents('.review-text')[0].scrollHeight + 'px');

        } else if(($elem[0].scrollHeight == $elem.height()) || ($elem.parents('.review-text').height() !== 200)) {
            $elem
                .css('max-height', '168px')
                .css('overflow', 'hidden')
                .css('-webkit-line-clamp', '7');
            $elem.parents('.review-text').css('height', '200px');
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
    } else {
        observer = new IntersectionObserver(videoAnimate, {threshold: 0.3});

        videoElem.forEach(elem => {
            observer.observe(elem);
        });
        videoConts.forEach(elem => {
            observer.observe(elem);
        });
    }
});


function videoAnimate(videoArray) {
    videoArray.forEach(element => {
        if ($(element.target).hasClass('video-embed') && !element.isIntersecting) {
            $(element.target).css('height', '480px');
            $(element.target).css('width', '720px');
            // wait for the width change animation to finish
            setTimeout(() => {
                setVideoMargins(element.target, false);
            }, 400);
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
                $(video).css('margin-left', '20px');
                $(video).css('margin-right', '20px');
                $(video).css('margin-top', vMargin + 'px');
                $(video).css('margin-bottom', vMargin + 'px');
            }
        }
    });
}

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