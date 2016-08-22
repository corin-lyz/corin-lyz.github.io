$(".box ul li").hover(function () {
    $(this).stop().animate({
        width: 400
    }, 300).siblings().stop().animate({
        width: 133.33
    }, 300);
    $(this).find(".text").hide();
}, function () {
    $(".box ul li").stop().animate({
        width: 171.43
    }, 300);
    $(this).find(".text").show();
});