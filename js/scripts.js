var leapYear = function(year) {
  if ((year % 4 === 0) && !(year % 100 === 0)) {
    return true;
  } else {
  return false;
  }
};


//on doc obj ready do this unnamed function
$(document).ready(function(){
  //form element with a leap-year id - on submit event - do this (pass in the event object too)
  $("form#leap-year").submit(function(event)  {
    //save into year - the value in input element with id of year converted to integer
    var year = parseInt($("input#year").val());
    //run our named function above on this value
    var result = leapYear(year);

    //put the stringified year in the span with class year
    $(".year").text(year);

    //if our result is true do nothing, else put in the word not
    if (!result){
      $(".not").text("not ");
    } else {
      $(".not").text("");
    }

    //show the result section
    $("#result").show();

    //don't call the server we're done already
    event.preventDefault();

  });
});
