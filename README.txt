Little Ark Pet Supply - demo website
====================================

Open index.html in any browser. No build step or server needed.

Files
  index.html      Page content (header, hero, categories, shelf, services, footer, basket)
  css/style.css   All styling. Colours and theme tokens are at the top (:root).
  js/main.js      Animal faces + eye tracking, product list, basket, booking form.

Common edits
  Shop name ........ search "Little Ark" in index.html
  Products/prices .. PRODUCTS array in js/main.js (prices are in rupees)
  Address/hours .... footer section in index.html
  Colours .......... TONES object in js/main.js and :root in css/style.css
  Currency ......... change the fmt() function in js/main.js

Notes
  - Products, prices and contact details are placeholders.
  - The basket and booking form are front-end only; nothing is sent anywhere.
  - Font (Bricolage Grotesque) loads from Google Fonts; a system font is used if offline.
