<?php

$locale = 'fr_FR.utf8';
if (isset($_GET["lang"])) {
    $lang = $_GET["lang"];
} else {
    $lang = 'fr';
}

// Adds language locales according to the given lang parameter. Default value is french.
switch ($lang) {
    case 'en':
        $locale = array(
            'en_US.utf8',
            'en_US',
            'en'
        );
        break;
    default:
        // FR 
        $locale = array(
            'fr_FR.utf8',
            'fr_FR',
            'fr'
        );
        break;
}

// workaround for windows env. to display the default fr translation
// REMOVE FOR PROD 
// if (getenv("SERVER_CONTEXT") == "dev" && is_array($locale) && array_search('en_US.utf8', $locale) !== false) {
//     $domain = 'homepage';
// } else {
//     $domain = 'homepage_fr';
// }
// Prod domain setup
$domain = 'homepage';

putenv("LC_ALL=$lang");
setlocale(LC_ALL, $locale, 'fr_FR.utf8', '');
bindtextdomain($domain, "./translations");
textdomain($domain);
?>
<!doctype html>
<html lang="<?=$lang?>">
    <head>
        <?php include('./head.php');?>
    </head>
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