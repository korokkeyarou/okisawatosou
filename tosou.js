$(function(){
    $('.scroll').click(function(){
        var id=$(this).attr('href');
        var position=$(id).offset().top;
        $('html,body').animate({
            'scrollTop':position


        })
    })
    $('.title').click(function(){
        
        $('html, body').animate({
          'scrollTop':0
        },500);
        
      });
    $('.taitoru').fadeIn();
    $('.work').click(function(){
      $(this).find('.foto').show();
    })
    
    $('.next-btn').click(function(){
      var $displaySlide =$('.active');
      $('.active').removeClass('active');
      $displaySlide.next().addClass('active');
    })
    $('.pre-btn').click(function(){
      var $displaySlide =$('.active');
      $('.active').removeClass('active');
      $displaySlide.prev().addClass('active');
    })
    
    
    $('.foot').click(function(){
      var slideIndex = $('.img').index($('.active'));
     
      $('.foot').show();
      if (slideIndex===0){
        $('.pre-btn').hide();
      }else if(slideIndex===2){
        $('.next-btn').hide();
      }
    })
    $('.fa-times').click(function(){
      $('.foto').fadeOut();
      
    })
   
    
      
});
