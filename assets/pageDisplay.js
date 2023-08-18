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
            $('.navbar-toggler').click();
        }
    });

    const videoElem = [
        document.querySelector('.video-mg-pres'),
        document.querySelector('.WAI-right'),
        document.querySelector('.WAI-left')
    ]
    observer = new IntersectionObserver(videoAnimate, {threshold: [0.3, 0.7]})
    videoElem.forEach(elem => {
        observer.observe(elem);
    });
});


function videoAnimate(videoArray) {
    videoArray.forEach(element => {
        if ($(element.target).hasClass('video-mg-pres') && !element.isIntersecting) {
            $(element.target).css('height', '480px');
            if (window.matchMedia("(max-width: 480px)").matches) {
                $(element.target).css('width', '480px');
            } else {
                $(element.target).css('width', '720px');
            }
            setVideoMargins(element.target, false);
        } else if ($(element.target).hasClass('WAI-right')) {
            let video = $(element.target).find('.video-mg-pres')
            if (element.intersectionRatio > 0.3) {
                // get basic video dimensions and parent dimensions
                let ogWidth = 720;
                if (window.matchMedia("(max-width: 480px)").matches) {
                    ogWidth = 480;
                }
                
                let ogHeight = 480;
                let targetWidth = $(element.target).width();
                let parentHeight = $(element.target).height();
                let addedWidth = ((targetWidth-ogWidth)*element.intersectionRatio);
                let dynWidth = addedWidth + ogWidth - 20;
                let dynHeight = (addedWidth*9/16) + ogHeight - 20;
                // unset max width to prevent blocking
                if ($(video).css('max-width') !== '99%') {
                    $(video).css('max-width', '99%');
                }
                // set width to video based on ratio with intersection
                $(video).css('width', dynWidth+'px');
        
                // set height to video based on ratio with intersection and if height isn't too big
                if (parentHeight <= dynHeight) {
                    $(video).css('height', parentHeight+'px');
                } else {
                    $(video).css('height', dynHeight+'px');
                }
            }
            setVideoMargins(video, false);
        } else if ($(element.target).hasClass('WAI-left')) {
            setVideoMargins($(element.target).parent().find('.video-mg-pres'), false);
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