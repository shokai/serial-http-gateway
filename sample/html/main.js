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
    setInterval(function(){
        $.getJSON($('#addr').val(), {}, function(data){
            var i = data[0].data;
            if(i > 200){
                $('#cds').css('background-color', '#FFF');
            }
            else{
                $('#cds').css('background-color', '#000');
            }
        });
    }, 100);
});