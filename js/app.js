 $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

 
        



  });

var cv4 = document.getElementById("myCanvas");
var ctx = cv4.getContext("2d");

 ctx.beginPath();
 
                    ctx.moveTo(450, 19);
 
                    ctx.lineTo(450,31);
 
                    ctx.lineTo(470,31);
 
                    ctx.lineTo(470,220);   
                    
                    ctx.lineTo(450,220);
                    
                    ctx.lineTo(450,232);
 
                    ctx.lineTo(482,232);                    
              
                    ctx.lineTo(482,19);

                    ctx.closePath();
 
                    ctx.fill();

ctx.beginPath();
 
                    ctx.moveTo(20,19);
 
                    ctx.lineTo(20,200);
 
                    ctx.lineTo(60,200); //ancho-inf
 
                    ctx.lineTo(60,180); //ancho-inf
 
                    ctx.lineTo(40,180);//ancho
 
                    ctx.lineTo(40,39); //ancho
                    
                    ctx.lineTo(60,39); //ancho-sup
                     
                    ctx.lineTo(60,19); //ancho-sup
 
                    ctx.closePath();
 
                    ctx.fill();

