/*Nav*/
$(".openNav").click(function(){
    $("#leftMenu").animate({ width:'230px'},100)
   $("#home-content").animate({marginLeft :'230px'},100)
})
//closeNAv
$(".closebtn").click(function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})
//section Toggel
$('.toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});

//efact
$(document).ready(function(){
  $('.toggle').on({
    mouseenter: function(){
      $(this).css("background-color", "#D62E33");
    },  
    mouseleave: function(){
      $(this).css("background-color", "RGBA(214, 46, 51, 0.6)");
    }, 
    click: function(){
      $(this).css("background-color", "#c40007");
    }  
  });
});

/*counter*/

window.onload = function() {
   
    countDownToTime("10 october 2024 9:56:00");
  }
  function countDownToTime(countTo) {
  
    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`(${days} )days`);
    $(".hours").html(`(${hours} )hours`);
    $(".minutes").html(`(${ mins })mins`);
    $('.seconds').html(`(${ secs} )secs`)
    $(".ahmed").html(`D(${days}),H(${hours}),M(${ mins }),S(${ secs})`) 
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
/*textarea*/

let maxLength = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let AmountLeft = maxLength-length;
  if(AmountLeft<=0)
  {
        $("#chars").text("your available character finished");
  }
  
  else{
  $("#chars").text(AmountLeft);
  }
});


