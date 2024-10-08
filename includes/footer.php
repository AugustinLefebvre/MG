<div class="footer row">
    <div class="footer-contact col-lg-6 col-md-12">
        <h5><?= _('Contact Me : ');?></h5>
        <ul id="contact" class="contact-list">
            <li>
                <a id="mg-footer-info-tel" href="javascript:decryptContact('KzMzNjAyMDg1MTMy', 'tel:')">
                    <i class="fa-solid fa-phone"></i>
                    <?= _('Phone:');?>
                </a>
                    <?= _('or');?>
                <a id="mg-footer-info-wa1" href="javascript:decryptContact('NDQ3OTIyOTIzMDkwIA', 'tel:+')"></a>
            </li>
            <li>
                <a id="mg-footer-info-wa2" href="javascript:decryptContact('NDQ3OTIyOTIzMDkwIA', 'https://wa.me/')">
                    <i class="fa-brands fa-whatsapp"></i> <?= _('Whatsapp:');?>
                </a>
            </li>
            <li>
                <a id="mg-footer-info" href="javascript:decryptContact('bWcubGVmZWJ2cmVAb2ctcGF0cmltb2luZS5jb20=', 'mailto:')"><i class="fa-solid fa-at"></i>
                    <?= _('Email:');?>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/marie-ga%C3%ABlle-lefebvre-50b98a6a/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            </li>
        </ul>
    </div>
    <div class="col-lg-6 col-md-12 footer-right">
        <div class="select-parent">
            <select class="lang-selection-dropdown <?= ($lang=='fr') ? 'fr-selected': 'en-selected';?>" name="lang" id="lang-selection" onchange="this.options[this.selectedIndex].value && (window.location = '../'+this.options[this.selectedIndex].value+'/');">
                <option <?= ($lang=='fr') ? 'selected="true"': '';?> value="fr" class="lang-selection-item">🇫🇷 Francais</option>
                <option <?= ($lang=='en') ? 'selected="true"': '';?> value="en" class="lang-selection-item">🇬🇧 English</option>
            </select>
        </div>
        <a class="legal-info-link" href="../legalnotice.php"><?= _('Legal notice');?></a>
    </div>
</div>