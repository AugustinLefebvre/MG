function decryptContact(code, contact = "mailto:") {
    var address = atob(code);
    window.location.href = contact + address;
}

$(document).ready(() => {
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
        let pHeight = $(e).parent().height();
        let vHeight = $(e).height();
        let pWidth = $(e).parent().width();
        let vWidth = $(e).width();
        let vMargins = (pHeight - vHeight) / 2;
        if (vMargins < 20) {
            vMargins = 20;
        }
        let hMargins = (pWidth - vWidth) / 2;
        $(e).css('margin', vMargins + 'px ' + hMargins + 'px')
    });

    $('.lang-selection-item').on('click', function(e) {
        lang = $(this).val();
        selectElem = $(this).parent();
        // redirects the user to the corresponding language
        if (selectElem.hasClass('fr-selected') && lang !== 'fr') {
            window.location.href = '../' + lang + '/';
        } else if(selectElem.hasClass('en-selected') && lang !== 'en') {
            window.location.href = '../'+lang+'/';
        }
    });

    $('body').on('click', function (e) {
        target = $(e.target);
        // close the navbar if its displayed and if the click is on a non navbar element.
        if ($('#nav-list').hasClass('show') && target.parents('.navbar').length == 0) {
            $('.navbar-toggler').click();
        }
    })
});

