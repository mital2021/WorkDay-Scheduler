// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);


    

// saveBtn Button

    $(".saveBtn").click(function(){
      var blockText = $(this).siblings(".description").val()
      var data = $(this).parent().attr("id");
      
      localStorage.setItem(data, blockText);
  });

  
///localstorage
    $("#nineAm .description").val(localStorage.getItem("nineAm"));
    $("#tenAm .description").val(localStorage.getItem("tenAm"));
    $("#elevenAm .description").val(localStorage.getItem("elevenAm"));
    $("#twelvePm .description").val(localStorage.getItem("twelvePm"));
    $("#onePm .description").val(localStorage.getItem("onePm"));
    $("#twoPm .description").val(localStorage.getItem("twoPm"));
    $("#threePm .description").val(localStorage.getItem("threePm"));
    $("#fourPm .description").val(localStorage.getItem("fourPm"));
    $("#fivePm .description").val(localStorage.getItem("fivePm"));
  
 

