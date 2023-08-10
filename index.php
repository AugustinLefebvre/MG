<?php

$locale = 'fr_FR.utf8';
if (isset($_GET["locale"])) {
    $locale = $_GET["locale"];
}

// workaround for windows env. to display the default fr translation
// var_dump(getenv('SERVER_CONTEXT'));
if (getenv("SERVER_CONTEXT") == "dev") {
    switch ($locale) {
        case 'en_US.utf8':
            $domain = 'homepage';
            break;
        default:
            $domain = 'homepage_fr';
            break;
    }
} else {
    $domain = 'homepage_fr';
}

putenv("LC_ALL=$locale");
setlocale(LC_ALL, $locale, 'fr_FR', '');
bindtextdomain($domain, "./translations");
textdomain($domain);

?>
<!doctype html>
<html lang="<?=$locale?>">
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