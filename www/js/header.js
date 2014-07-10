/*global $ */
/*jshint strict: true */
$(document).on('pagebeforeshow', '#index', function () {
    "use strict";
    $("#toggleButton").on("click", function () {
        $(this).toggleClass("toggleOffButton");
    });
});