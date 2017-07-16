$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $(".button-collapse").sideNav();
    $('.modal').modal();  

// Back to top
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.back').fadeIn('slow'); 
        } else { 
            $('.back').fadeOut('slow'); 
        } 
    }); 
    $('.back').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    }); 

    //Smoothy scrolling
        // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

  });

var cv4 = document.getElementById("myCanvas");
var ctx = cv4.getContext("2d");

    ctx.fillStyle = "rgb( 255, 255, 255)";    
    
//    ctx.lineWidth = 2;
//ctx.strokeStyle = "red"; // Definimos el color para pintar el borde
//ctx.stroke(); //dibuja el borde

    ctx.beginPath();
 
                    ctx.moveTo(10,5); //punto inicial
 
                    ctx.lineTo(10,145);
 
                    ctx.lineTo(60,145);
 
                    ctx.lineTo(60,137);   
                    
                    ctx.lineTo(25,137);
                    
                    ctx.lineTo(25,13);

                    ctx.lineTo(60,13);
 
                    ctx.lineTo(60,5);                    
              
                    ctx.closePath();
 
                    ctx.fill();

ctx.beginPath();
 
                    ctx.moveTo(240,5);
 
                    ctx.lineTo(240,13);
 
                    ctx.lineTo(275,13); //ancho-inf
 
                    ctx.lineTo(275,137); //ancho-inf
 
                    ctx.lineTo(240,137);//ancho
 
                    ctx.lineTo(240,145); //ancho
                    
                    ctx.lineTo(290,145); //ancho-sup
                     
                    ctx.lineTo(290,5); //ancho-sup
 
                    ctx.closePath();
 
                    ctx.fill();

 