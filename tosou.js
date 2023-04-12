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
    
      
});
