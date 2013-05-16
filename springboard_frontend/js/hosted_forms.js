(function($) {
  Drupal.behaviors.hostedForms = {
    attach: function (context, settings) {
    
      // Adding controls
      if ($('.view-form-premiums')[0]) {
        
        $('.view-form-premiums .view-content').append('<a id="prev" class="carousel-control left" href="#">‹</a> <a id="next" class="carousel-control right" href="#">›</a>');
        
        $('#prev, #next').click(function(e){
          e.preventDefault();
        });
        
        // Views test
        $('.view-form-premiums .view-content ul').carouFredSel({
          responsive: true,
          width: 330,
          scroll: 1,
          items: {
            width: 'auto',
            //height: '30%', // optionally resize item-height
            visible: {
              min: 2,
              max: 2
            }
          },
          prev: '#prev',
          next: '#next',
          auto: false
        });
                
        $('.view-form-premiums .views-row').click(function(){
          $(this).siblings().removeClass('selected');
          $(this).addClass('selected');
          console.log($(this).index());
        });
      } // end controls
    
    }
  }
})(jQuery);
