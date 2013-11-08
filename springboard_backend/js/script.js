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

      // Add first  / last classes.
      $(".content table tr td:visible:first-child").addClass("first");
      $(".content table tr td:visible:last-child").addClass("last");
      $(".content table tr td a:visible:first-child").addClass("first");
      $(".content table tr td a:visible:last-child").addClass("last");
      $(".content table th:visible:first-child").addClass("first");
      $(".content table th:visible:last-child").addClass("last");

      // Theme select lists, add a wrapper.
      $('select:not([multiple])').wrap('<div class="select-wrapper"></div>');
      $('.select-wrapper').append('<div class="arrow"></div> ');

      //@TODO, fade messages on close.
//      $('.alert.warning button').click(function () {
//        $(this).closest('div').fadeOut(900);
//      });

//      $('.accordion-toggle').once(function() {
//        $(this).prepend('<i class="icon-fixed-width accordion-toggle-icon">&#xf0dd;</i>');
//      });

      // Remove Boostrap button class.
      $('input').removeClass('btn');

    } // attach.function
  } // drupal.behaviors
})(jQuery);