<?php
$domain = 'homepage';
$lang = 'fr_FR';
bindtextdomain($domain, './translations');
textdomain($domain);
if ($_GET['locale']) {
    $locale = $_GET['locale'];
    echo $locale . '<= valeur retournée';
} else {
    $locale = 'fr';
    echo 'default locale fr';
}
if (!setlocale(LC_ALL, array($locale ,$lang, 'fr_FR.UTF-8'))) {
    echo 'locale not supported';
}
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