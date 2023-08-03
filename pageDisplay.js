function decryptContact(code, contact = "mailto:") {
    var address = atob(code);
    window.location.href = contact + address;
}

$(document).ready(function () {
    // contact info parser
    $('#mg-contact-info').append(atob('bWcubGVmZWJ2cmVAdmlhLWFwLmNvbQ'));
    $('#mg-contact-info-wa').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-contact-info-tel').append(atob('KzMzIDYgMDIgMDggNTEgMzI'));
    $('#mg-footer-info').append(atob('bWcubGVmZWJ2cmVAdmlhLWFwLmNvbQ'));
    $('#mg-footer-info-wa1').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-footer-info-wa2').append(atob('KzQ0IDcgOTIyIDkyMyAwOTA'));
    $('#mg-footer-info-tel').append(atob('KzMzIDYgMDIgMDggNTEgMzI'));


    $('.review-text').css('height', '200px');
    // review toggle
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
});

