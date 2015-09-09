var encrypt = function(inputStr) {
  var inputStr = inputStr.replace(" ", "");
  var length = inputStr.length;
  //exit out if only 2 chars or less
  if (length <= 2) {
    return inputStr;
  }

  var group = Math.ceil(Math.sqrt(length));
  var result = "";

  for (var g = 1; g <= group; g++) {
    for (var i = 1; i <= group; i++){
      alert(inputStr[(i*g)-1])
      result += inputStr[(i*g)-1];
    }
    result += " ";
  }

  return result;
};


//on doc obj ready do this unnamed function
$(document).ready(function(){


});
