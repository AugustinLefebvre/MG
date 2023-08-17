# MG
Onepage presentation website

This website is meant to be simple, it's using bootstrap and Jquery to provide some easy to use display tools.
The way the page is build is meant to be changed and will be as scalable as needs be.

&nbsp;

The website is now using PHP gettext to manage translations.

*For the translation on a windows localhost environnement you will need to activate the hack in index.php and re-update the homepage_fr files in the en_US translation*

&nbsp;

The Website requires a .htaccess file for the i18n system including a system like the following:
```
# Managing language redirections:
# redirect to /fr/ if no lang is in the URL
RewriteCond %{QUERY_STRING} !lang=(fr|en)
RewriteRule ^$ fr/ [R=301,L]
# Binds the localized address to the correct page
RewriteRule ^(en|fr)/(.*)$  $2?lang=$1&%{query_STRING} [L]
```