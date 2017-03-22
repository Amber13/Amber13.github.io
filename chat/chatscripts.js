/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('#men').mouseenter(function(){
    $('nav').css('display', 'block');
});
$('#men').mouseleave(function(){
    $('nav').css('display', 'none');
});
$('#attach').click(function(){
    $('#attmenu').toggleClass('invis', 'vis');
})

$('#date').html(new Date().toLocaleString());

$('#sender').height($('#sender').width());
$('#sender').css('margin-top', (-0.5)*$('#sender').width()+'px');

function setSize(){
    var tr = $('#triangle');
    var Th = $('#backing').height()*0.21;
    var Tw = ($('#backing').width()-41)/2;
    tr.height(0);
    tr.width(0);
    tr.css('border-bottom', Th + 'px ' + 'solid transparent');
    tr.css('border-top', Th + 'px ' + 'solid #00a0ff');
    tr.css('border-left', Tw + 'px ' + 'solid transparent');
    tr.css('border-right', Tw + 'px ' + 'solid #00a0ff');
    $('#chat-container').css('max-height', $('#chat').height()*0.9-$('header').height()-48);
 }
 setSize();
 
 function workImitation() {
     /*here should be a bit code of queries, but I'm not so good at cpp. If You only need some algos on graps from me...:D*/
     $('#chat-container').html($('#chat-container').html() + '<div class="post"><div class="avatar"><img src=http://placehold.it/60x60></div><div class="post-content">Бла бла бла<div class=time-user>5 minutes ago by UserName</div></div></div>');
     $('#chat-container').html($('#chat-container').html() + '<div class="post mypost"><div class="avatar"><img src=http://placehold.it/60x60></div><div class="post-content">Бла бла бла в ответ<div class=time-user>5 minutes ago by You</div></div></div>');
 }
 
 workImitation();