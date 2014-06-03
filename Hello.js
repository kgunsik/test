/**
 * Created by Administrator on 2014-05-26.
 */
$(document).ready(function(){
    $('#wrap').on('click','h1',function(){
        var len = $('h1').length;
        var targetHTML = $(this).html();
        console.log(targetHTML.toString());
        $('#wrap').append('<h1>' + len + '-' + targetHTML + '</h1>');
    })
})