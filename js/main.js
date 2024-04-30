$(document).ready(function()
{

    $('.full-navbar').hover(function()
    {
        $('.welcome').fadeIn(2500);
    });



    $('.service-advice').hover(function()
    {
        $('.first-service-advice').slideDown(2000);
    });


    $('.action').hover(function()
    {
        $('.action-info').slideDown(800);
    });

    //popup--------------
         $('.portfolio-image').magnificPopup({
        type: 'image'
        
      });
     
      //mixitup----------------
      var mixer = mixitup('.container');
    
    
 






});