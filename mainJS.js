$(document).ready(function(){
  
  var currentWidth = $(window).width();
  defaultgraphs(currentWidth);
  
  $("#about").click(function(){
    $("html,body").animate(
      {scrollTop: $(".target:nth-child(3)").offset().top},
      "slow" );
      resetdefaultgraphs();
      hideNav(currentWidth);
  });
    $("#project").click(function(){
    $("html,body").animate(
      {scrollTop: $(".target:nth-child(4)").offset().top},
      "slow" );
      resetdefaultgraphs();
      hideNav(currentWidth);
  });
    $("#contact").click(function(){
    $("html,body").animate(
      {scrollTop: $(".target:nth-child(5)").offset().top},
      "slow" );
      resetdefaultgraphs();
      hideNav(currentWidth);
  });
    $("#homekey").click(function(){
    $("html,body").animate(
      {scrollTop: $(".target:nth-child(2)").offset().top},
      "slow" );
      defaultgraphs(currentWidth);
      hideNav(currentWidth);
  });
  
  $(".custom-btn-toggle").click(function(){
     togglefa();
  });
  
  function togglefa(){
        if($(".fa").hasClass("fa-times")) {
           $(".fa-times").removeClass("fa-times").addClass("fa-align-justify");
          $(".flexnav-right").css("display","none");
    } 
        else {
          $(".fa-align-justify").removeClass("fa-align-justify").addClass("fa-times");
          $(".flexnav-right").css("display","flex")
    }
  }
  
  function removeActive(){
    $("#homekey").removeClass("active");
  }
  
  function addActive(){
    $("#homekey").addClass("active");
  }
  
  $(window).resize(function(){
    currentWidth = $(window).width();
      if(currentWidth > 768){
        resetdefaultgraphs();
        defaultgraphs(currentWidth);
        $(".flexnav-right").css("display","flex")
        $(".fa-times").removeClass("fa-times").addClass("fa-align-justify");
      }
    else {
         resetmobilegraphs();
         mobilegraphs(currentWidth);
        $(".flexnav-right").css("display","none")
  }

      
  });
  
  function defaultgraphs(width){
    if(width > 768) {
  $(".height-basic").css("height", "70px");
  $(".height-intermediate").css("height", "160px");
  $(".height-expert").css("height", "250px");
        $(".height-basic").css("width", "25px");
        $(".height-intermediate").css("width", "25px");
        $(".height-expert").css("width", "25px");
    } 
    else {
      mobilegraphs(width);
    }
  }
  
  function mobilegraphs(width){
    if(width <= 768) {
  $(".height-basic").css("width", "25%");
  $(".height-intermediate").css("width", "50%");
  $(".height-expert").css("width", "100%");
        $(".height-basic").css("height", "15px");
        $(".height-intermediate").css("height", "15px");
        $(".height-expert").css("height", "15px");
    }
    else {
      defaultgraphs
    }
  }
   
  function resetdefaultgraphs(){
  $(".height-basic").css("height", "5px");
  $(".height-intermediate").css("height", "5px");
  $(".height-expert").css("height", "5px");
        $(".height-basic").css("width", "25px");
        $(".height-intermediate").css("width", "25px");
        $(".height-expert").css("width", "25px");
    removeActive();
  }
  
  function resetmobilegraphs() {
        $(".height-basic").css("width", "15px");
        $(".height-intermediate").css("width", "15px");
        $(".height-expert").css("width", "15px");    
        $(".height-basic").css("height", "15px");
        $(".height-intermediate").css("height", "15px");
        $(".height-expert").css("height", "15px");
  }
  
  function hideNav(width){
    if(width <= 768) {
    $(".flexnav-right").css("display","none");
    $(".fa-times").removeClass("fa-times").addClass("fa-align-justify");
    }
  }
  
});