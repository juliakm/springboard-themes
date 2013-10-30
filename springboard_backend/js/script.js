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

      // Add first  / last.
      $(".content table tr td:visible:first-child").addClass("first");
      $(".content table tr td:visible:last-child").addClass("last");
      $(".content table tr td a:visible:first-child").addClass("first");
      $(".content table tr td a:visible:last-child").addClass("last");
      $(".content table th:visible:first-child").addClass("first");
      $(".content table th:visible:last-child").addClass("last");

      // Theme select lists.
      $('select:not([multiple])').wrap('<div class="select-wrapper"></div>');
      $('.select-wrapper').append('<div class="arrow"></div> ');

    } // attach.function
  } // drupal.behaviors
})(jQuery);