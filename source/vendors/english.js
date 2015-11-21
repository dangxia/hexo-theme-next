$(function(){
  var myVoice = null;
  $('a[href="#v"]').click(function(event){
    if(myVoice == null){
      myVoice = document.createElement("audio");
    }
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