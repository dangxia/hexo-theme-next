$(function(){
  var myVoice = document.getElementById("_myVoice");
  $('a[href="#v"]').click(function(event){
    var p = $(event.target).parent();
    var text = p.text().trim();
    var index = text.search(' ');
    text = text.substr(0,index).trim();
    myVoice.src = "http://dict.youdao.com/dictvoice?audio=" + text +"&type=2";
    myVoice.play();
    return false;
  });
}
);