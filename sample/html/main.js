$(function(){
    console.log('start');
    $('.led .on').click(function(){
        $.post($('#addr').val(), 'o', function(){
            alert('led on');
        });
    });
    $('.led .off').click(function(){
        $.post($('#addr').val(), 'x', function(){
            alert('led off');
        });
    });
});