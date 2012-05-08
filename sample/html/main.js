var cds = function(v){
    $('.cds input').val(v);
};

$(function(){
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
            cds(i);
        });
    }, 100);
});