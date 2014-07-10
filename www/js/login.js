$(document).on('pageinit', function () {

    // Starting at http://example.com/

    // Define a click binding for all anchors in the page
    $("#loginBtn").on("click", function (event) {
        if ($('#userName').val() != "bssdemo@gmail.com" ||
            $('#pwd').val() != "bssdemo") {
            $('#loginerrmsg').text("Please check your login credentials");
            // Prevent the usual navigation behavior
            event.preventDefault();
        } else {
            $('#loginerrmsg').text("");

        }



    });
});