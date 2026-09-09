# UKICER Website

Official website for the United Kingdom and Ireland Computing Education Research (UKICER) conference.

## About

UKICER is a leading forum for researchers and practitioners to meet and share advances in computer science education. The conference is organized by the two SIGCSE chapters for UK and Ireland.

## Contributing

This repository contains the official UKICER conference website. For questions about the conference, please refer to the contact information on the website.

## Maintaining

For those responsible for maintaining a new year's version of the UKICER website, here's some useful info.

### Structure

- `index.html` - Main conference website
- `nav.html`/`footer.html` - The navbar/footer that is displayed on each page
- `info/` - `.html` pages for the website (added for UKICER 2026). Add whatever pages you think are best
  - Each of these will need to include a reference to `nav.html` to display the navbar (see code below).
- `2024/`, `2023/`, etc. - Archive pages for previous years
- `css/` - Stylesheets
- `images/` - Conference images and logos
- `files/` - Conference documents and proceedings

### To Dos When Taking Over the Repository
A list of things you'll need to do when starting to update the UKICER website for a new year:
- Check out the development branch of the repo to avoid accidental erroneous pushes to main.
- Create a new folder for the previous UKICER website (e.g., `2026/`)
- Copy all of the files/folders in the top level of the directory (e.g., `info/`, `images/`, `index.html`) into that folder
- Delete all of the files in the top-level `info/` and `images/` directories.
- Add a "Back to homepage" link on the navbar of the previous year's conference.
- Add a link to the previous year's UKICER website in the Archive dropdown. Do this by adding another row in `nav.html` that refers to the previous year's `index.html`.

### Creating New Pages
Add new pages in `info/` (e.g., `dates.html`, `committees.html`) as necessary.

Each page should start off with the boilerplate code below to ensure the navbar and footer are loaded. Make sure you add a reference to the page in `nav.html` and add any styles you need in `styles.css`.
  
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
    <meta title="title" content="UK and Ireland Computing Education Research (UKICER) conference" />
    <meta name="description" content="National venue for researchers and practitioners to share advances in computer science education research.">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="author" content="UKSIGCSE">

    <title>UKICER <year> | <page-name></title>

    <!-- Bootstrap core CSS -->
    <link href="../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="../css/styles.css" rel="stylesheet">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170527242-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-170527242-1');
    </script>

    <!-- Load navbar -->
    <script src="../js/load-navbar.js"></script>
    <script src="../js/load-footer.js"></script>

</head>

<body id="page-top">

    <header></header>

    <div class="main-content">

    </div>

    <!-- Bootstrap core JavaScript -->
    <script src="../vendor/jquery/jquery.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom JavaScript for this theme -->
    <script src="../js/scrolling-nav.js"></script>
</body>
```

## License

Copyright © United Kingdom and Ireland Computing Education Research (UKICER) Conference 