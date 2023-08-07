<?php
$locale = 'fr_FR.utf8';
if (isset($_GET["locale"])) {
    $locale = $_GET["locale"];
}
$domain = 'homepage';

putenv("LC_ALL=$locale");
setlocale(LC_ALL, $locale, 'fr_FR', '');
bindtextdomain($domain, "./translations");
textdomain($domain);

?>
<!doctype html>
<html lang="<?=$locale?>">
    <?php include('./head.php');?>
    <body>
        <?php
            include('./navbar.php');
            include('./homepage.php');
            include('./aboutme.php');
            include('./reviews.php');
            include('./cgp.php');
            include('./brokerage.php');
            include('./coaching.php');
            include('./footer.php');
        ?>
    </body>
</html>