$(function () {

    $('.navbar-toggler').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.navbar-minimal').toggleClass('open');
    })
});



jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
});



$(document).ready(function(){
    $("#tabs1").click(function(){
        $("#tabs1Open1").removeClass("in");
        $("#tabs1Open2").removeClass("in");
    });
     $("#tabs2").click(function(){
        $("#tabs1Open").removeClass("in");
        $("#tabs1Open2").removeClass("in");
    });
       $("#tabs3").click(function(){
        $("#tabs1Open").removeClass("in");
        $("#tabs1Open1").removeClass("in");
    });
});


//mobile side menu
$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});



       window.onscroll = function() {myFunction()};

      function myFunction() {
          if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {
        document.getElementById("header").style.backgroundColor = "#fff";
        document.getElementById("logo").src = "images/unifocus_logo1.png";
        document.getElementById("header").style.padding = "0px 60px 0px 60px";
          } else {
       
         document.getElementById("header").style.backgroundColor = "transparent";
         document.getElementById("header").style.padding = "20px 60px 20px 60px";
        document.getElementById("logo").src = "images/unifocus_logo.png";
          }
      }

