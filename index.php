<?php
$domain = 'homepage';
$lang = 'fr_FR';
if ($_GET['locale']) {
    $locale = $_GET['locale'];
    echo $locale . '<= valeur retournée';
} else {
    $locale = 'fr_FR';
    echo 'default locale fr';
}
if (!setlocale(LC_ALL, $locale)) {
    echo 'locale not supported';
}

putenv("LANG=$locale");
putenv("LANGUAGE=$locale");

textdomain($domain);
bindtextdomain($domain, './translations');
bind_textdomain_codeset($domain, 'UTF-8');

?>
<!doctype html>
<html>
    <?php include('./head.php');?>
    <body>
        <?= _('translation test');?>
        <?= gettext('second translation test');?>

        <?php
            include('./navbar.php');
            include('./homepage.php');
            include('./aboutme.php');
            include('./reviews.php');
            include('./cgp.php');
            include('./broker.php');
            include('./coaching.php');
            include('./footer.php');
        ?>
    </body>
</html>