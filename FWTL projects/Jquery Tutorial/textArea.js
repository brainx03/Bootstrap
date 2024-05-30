$(document).ready(function() {
    $("#checkLength").click(function() {
        var textLength = $("#textInput").val().length;
        $("#result").text("Length of the text: " + textLength);
    });
});