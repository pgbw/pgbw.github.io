/* set the copyright year automatically */
/*jslint browser:true, white:true*/
(function () {
    'use strict';
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById("footerYear").textContent = new Date().getFullYear();
    });
}());
