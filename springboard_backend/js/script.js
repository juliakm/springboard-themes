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

      // Add first  / last to table rows if needed.
      $(".content table tr td:visible:first-child").addClass("first");
      $(".content table tr td:visible:last-child").addClass("last");
      $(".content table th:visible:first-child").addClass("first");
      $(".content table th:visible:last-child").addClass("last");


    } // attach.function
  } // drupal.behaviors
})(jQuery);