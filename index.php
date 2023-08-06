<?php
$domain = 'homepage';
$lang = 'fr_FR';
bindtextdomain($domain, './' . DIRECTORY_SEPARATOR . 'translations');
textdomain($domain);
if (!setlocale(LC_ALL, 'fr_FR', 'fr_FR.UTF8')) {
    throw new exception('locale not supported');
}
?>
<!doctype html>
<html>
    <?php include('./head.php');?>
    <body>
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