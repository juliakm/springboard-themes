(function($) {
  Drupal.behaviors.springboardBackendNav = {
    attach: function (context, settings) {
      $('.nav.nav-tabs li').mouseenter(function() {
        $(this).find('ul').show();
      });
      $('.nav.nav-tabs li').mouseleave(function() {
        $(this).find('ul').hide();
      });
    } // attach.function
  } // drupal.behaviors
})(jQuery);


(function($) {
  Drupal.behaviors.springboardMisc = {
    attach: function (context, settings) {

    // Misc functions here if needed.

    } // attach.function
  } // drupal.behaviors
})(jQuery);