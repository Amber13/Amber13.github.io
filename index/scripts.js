/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function setSize(){
    var tr = $('#triangle');
    var Th = ($('#backing-top').height()-41)/2; 
    var Tw = ($('#backing-top').width()-41)/2;
    tr.height(0);
    tr.width(0);
    tr.css('border-bottom', Th + 'px ' + 'solid rgba(0,0,0,0.1)');
    tr.css('border-top', Th + 'px ' + 'solid transparent');
    tr.css('border-left', Tw + 'px ' + 'solid rgba(0,0,0,0.1)');
    tr.css('border-right', Tw + 'px ' + 'solid transparent');
 }
 setSize();