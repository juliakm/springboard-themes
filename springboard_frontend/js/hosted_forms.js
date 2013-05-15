(function($) {
  Drupal.behaviors.hostedForms = {
    attach: function (context, settings) {
    
      // Adding controls
      if ($('.view-form-premiums')[0]) {
        
        $('.view-form-premiums .view-content').append('<a id="prev-item" href="#"><<</a><a id="next-item" href="#">>></a>');
        $('#prev-item, #next-item').click(function(e){
          e.preventDefault();
        });
                
        // Views test
        $('.view-form-premiums .view-content .thumbnails').carouFredSel({
          responsive: true,
          width: '100%',
          scroll: 1,
          items: {
            height: '300',    //    optionally resize item-height
            visible: {
              min: 1,
              max: 3
            }
          },
          prev: '#prev-item',
          next: '#next-item',
          auto: false
        });
        $('.view-form-premiums .views-row').click(function(e){
          console.log('clicked');
          //console.log(e);
          console.log($(this).index());
        });
      } // end controls
    
    }
  }
})(jQuery);
