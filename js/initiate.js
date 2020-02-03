$(document).ready(function(){ 
   setTimeout(function(){
        
       $('.logo').removeClass('animated fadeinUp');
      $('main').fadeIn(1000).removeClass('off');
       $('.logo').addClass('animated fadeinUp');
    
   },3000);

$(".addmarker").click(function (ev) {
    if($('div.draggable').length < 3) {
       // $(".marker").remove();      // remove all existing markers
      $('div.mark').append(            
            $('<div class="draggable"> </div>')
          
                       
        );   var $draggables = $('.draggable').draggabilly({
            // contain to parent element
            containment: true,
            
          });   
          $draggables.on( 'dragEnd', function() {
            console.log('dragEnd', $draggables.position.x,$draggables.y);
          });

         // listener();
     
   
        } 
  
    
});





});