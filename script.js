//Initial load of page
$(document).ready(sizeContent);

//resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeight = $(window).height() - $("#topbar").height() - 18;
    $("#container").height(newHeight);
    var newHeightText = $(window).height() - $("#topbar").height() - 18 - $("#title-html").height();
    $("textarea").height(newHeightText);
}

$(".panel").on('change keyup paste', function() {
    updateOutput();
});

$('button').hover(function() {
    $(this).addClass("highlightedButton");
}, function() {
    $(this).removeClass("highlightedButton");
});

$('.button').click(function() {
    $(this).toggleClass("active");
    var panelId = $(this).attr('id') + '-panel';
    $('#' + panelId).toggleClass('hidden');
    var numOfActivePanel = 4 - $('.hidden').length;
    $('.panel').width(($(window).width() / numOfActivePanel) - 10);
});

$('.panel').height(
    $(window).height() - $('.nav-bar-next').height() - 4
)

$(".panel").width(($(window).width() / 2) - 3);
function updateOutput() {
    $("iframe").contents().find("html").html(
        "<html> <head> <style type='text/css'>" +
        $("#css-panel").val() +
        "</style> </head> <body>" +
        $("#html-panel").val() +
        "</body> </html>");

    document.getElementById("output-panel").contentWindow.eval(
        $("#javascript-panel").val()

    );

}
