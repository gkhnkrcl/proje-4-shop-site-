
$("#container2").hover(function () {
    $("#category").slideDown()
    $("#category").css("display", "flex")
    $(".overlay").css(styles)
})

$(".container-fluid:not( #container2, #category)").hover(function () {
    $(".overlay").css(styles1)
})

$(".overlay").click(function(){
    $(this).css(styles1)
})

var styles={
  display:"block",

 
  
}

var styles1={
   display:"none"

} 
   
/*fa heart*/

$(".fa-heart").on("click", function (){
    $(this).css(styles3)
 
})

  var styles3={
    animationName:"rubberBand",
    animationDuration:"1s",
    color:"red",
    
 } 


