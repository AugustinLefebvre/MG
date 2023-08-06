<?php
// $domain = 'homepage';
// $lang = 'fr_FR';
// if ($_GET['locale']) {
//     $locale = $_GET['locale'];
//     echo $locale . '<= valeur retournée';
// } else {
//     $locale = 'fr_FR';
//     echo 'default locale fr';
// }
// if (!setlocale(LC_ALL, $locale)) {
//     echo 'locale not supported';
// }

// putenv("LANG=$locale");
// putenv("LANGUAGE=$locale");

// textdomain($domain);
// bindtextdomain($domain, './translations');
// bind_textdomain_codeset($domain, 'UTF-8');

// NOUVEAU TEST 

$locale = 'fr_FR';
if (isset($_GET["locale"])) {
    $locale = $_GET["locale"];
}
$domain = 'homepage';

$results = putenv("LC_ALL=$locale");
if (!$results) {
    exit ('putenv failed');
}

$results = setlocale(LC_ALL, $locale, 'fr_FR.utf8');
if (!$results) {
    exit ('setlocale failed: locale function is not available on this platform, or the given local does not exist in this environment');
}

$results = bindtextdomain($domain, "./translations");
echo 'new text domain is set: ' . $results. "\n";

$results = textdomain($domain);
echo 'current message domain is set: ' . $results. "\n";

$results = gettext("translation test");
if ($results === "translation test") {
    echo "Original English was returned. Something wrong\n";
}
echo $results . "\n";

?>
<!doctype html>
<html lang="<?=$locale?>">
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