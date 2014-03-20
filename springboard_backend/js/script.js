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

      // Set ul depths for better theming.
      $('#footer ul, #menu-wrapper ul').each(function() {
        var depth = $(this).parents('ul').length;
        $(this).addClass('ul-depth-' + depth);
      });

      // Set ul > li depths for better theming.
      $('ul.nav li').each(function() {
        var depth = $(this).parents('li').length;
        $(this).addClass('li-depth-' + depth);
      });

      // Set li > a depths for better theming.
      $('ul.nav li a').each(function() {
        var depth = $(this).parents('ul').length;
        $(this).addClass('lia-depth-' + depth);
      });

          // Add numbering to DSR groups.
          $('#edit-start-date .control-group').each(function (i) {
            $(this).addClass("grp-" + i);
          });

          $('#edit-end-date .control-group').each(function (i) {
            $(this).addClass("grp-" + i);
          });

      // Add first  / last classes for better theming.
      $(".content table tr td:visible:first-child").addClass("first");
      $(".content table tr td:visible:last-child").addClass("last");
      $(".content table tr td a:visible:first-child").addClass("first");
      $(".content table tr td a:visible:last-child").addClass("last");
      $(".content table th:visible:first-child").addClass("first");
      $(".content table th:visible:last-child").addClass("last");

      // Theme select lists, add a wrapper.
      $('select:not([multiple])').wrap('<div class="select-wrapper"></div>');
      $('.select-wrapper').append('<div class="arrow"></div> ');

      //@TODO, fade messages on close?
//      $('.alert.warning button').click(function () {
//        $(this).closest('div').fadeOut(900);
//      });

      // Move the footer home link to the end.
      $('.nav-footer li.home').appendTo('.nav-footer li.options ul');

      // Remove the nav caret from menus.
      $('.nav .caret').remove();

      // Remove Boostrap button class.
      $('input').removeClass('btn');

    } // attach.function
  } // drupal.behaviors
})(jQuery);
