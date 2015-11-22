$(function(){
  var myVoice = null;
  $('a[href="#v"]').click(function(event){
    if(myVoice == null){
      myVoice = document.createElement("audio");
    }
    var p = $(event.target).parent();
    var text = findWords(p.text());
    myVoice.src = "http://dict.youdao.com/dictvoice?audio=" + text +"&type=2";
    myVoice.play();
    return false;
  });
}
);
function findWords(text){
  text = text.trim();
  var index = text.search('\\[');
  if(index != -1){
    text = text.substr(0,index).trim();
  }
  text = text.replace(/\s+/,'%2B');
  return text;
}