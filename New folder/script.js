$(document).ready(function () {
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    $('.button-1').click(function () {
        const product = $(this).closest('.product');
        product.find('.additional-info').toggle(); // Toggle the visibility of additional info
    });
});