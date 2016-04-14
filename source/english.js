$(function(){
  var myVoice = null;
  var cursor = null;

  $('a[href="#v"]').click(function(event){
    if(myVoice == null){
      myVoice = document.createElement("audio");
      addWordCursor();
    }
    cursor = $(event.target).parent();
    readCursor();
    return false;
  });
  
  function readCursor(){
    var text = findWords(cursor.text());
    myVoice.src = "http://dict.youdao.com/dictvoice?audio=" + text +"&type=2";
    myVoice.play();
  }
  
  function readNext(){
    cursor = cursor.next();
    readCursor();
  }
  
  function readPrev(){
    cursor = cursor.prev();
    readCursor();
  }
  
  function readRepeat(){
    myVoice.pause();
    myVoice.currentTime = 0;
    myVoice.play();
  }
  
  function addWordCursor(){
    $(document).keydown(function(event) {
      switch(event.which) {
          case 37: // left
            readPrev();
          break;

          case 38: // up
            readRepeat();
          break;

          case 39: // right
            readNext();
          break;

          case 40: // down
            readRepeat();
          break;
          default:
            return true;
      }
      return false;
    });
  }
}
);
function findWords(text){
  text = text.trim();
  var index = text.search('[\\[/]');
  if(index != -1){
    text = text.substr(0,index).trim();
  }
  text = text.replace(/\s+/,'%2B');
  return text;
}