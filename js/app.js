$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
     $(".button-collapse").sideNav();
    $('.modal').modal();  



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

 