(function ($) {
  Drupal.behaviors.springboardCollapsibleTd = {
    attach: function (context, settings) {
     $('.sb-collapsible-td .control').click(function() {
       console.log('clicked');
       $(this).parent('.sb-collapsible-td').toggleClass('collapsed');
     })
    } // attach.function
  } // drupal.behaviors
})(jQuery);

(function ($) {
  Drupal.behaviors.springboardBackendNav = {
    attach: function (context, settings) {
      $('.nav.nav-tabs li').mouseenter(function () {
        $(this).find('ul').show();
      });
      $('.nav.nav-tabs li').mouseleave(function () {
        $(this).find('ul').hide();
      });
    } // attach.function
  } // drupal.behaviors
})(jQuery);

(function ($) {
  Drupal.behaviors.springboardMisc = {
    attach: function (context, settings) {

      // Set ul depths for better theming.
      $('#footer ul, #menu-wrapper ul').each(function () {
        var depth = $(this).parents('ul').length;
        $(this).addClass('ul-depth-' + depth);
      });

      // Set ul > li depths for better theming.
      $('ul.nav li').each(function () {
        var depth = $(this).parents('li').length;
        $(this).addClass('li-depth-' + depth);
      });

      // Set li > a depths for better theming.
      $('ul.nav li a').each(function () {
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
      $(".types-wrapper:visible:first-child").addClass("first");
      $(".types-wrapper:visible:last-child").addClass("last");

      // Theme select lists, add a wrapper.
      $('select:not([multiple])').each(function () {
        $(this).once(function () {
          $(this).wrap('<div class="select-wrapper"></div>');
          $('.select-wrapper').append('<div class="arrow"></div> ');
        });
      });

      // Move the footer home link to the end.
      $('.nav-footer li.home').appendTo('.nav-footer li.options ul');

      // Remove the nav caret from menus.
      $('.nav .caret').remove();

      // Remove Boostrap button class.
      $('input').removeClass('btn');

      // Put focus on username field on login form.
      $("#user-login #edit-name").focus();

      // Wrap in fieldset-legend to match others.
      $('fieldset.webform-submission-info legend').wrapInner('<span class="fieldset-legend"></span>');

      // Add an inner wrapper in order to truncate.
      $('.webform-results-wrapper th').each(function () {
        $(this).wrapInner('<div class="th-wrapper"></div>');
      });

      // Add a body class for SF connection status.
        if ($('.sf-status p').hasClass('sf-connected')){
          $('body').addClass('sf-connected-dashboard');
        }
      else {
          $('body').addClass('sf-not-connected-dashboard');
        }

      // Remove empty pre tags that were rendered by drupal.
      $("pre:empty").remove();

      // for each element that is classed as 'valign-bottom',
      // set its margin-top to the difference between its
      // own height and the height of its parent
      $('.valign-bottom').each(function() {
        $(this).css('margin-top', $(this).parent().height()-$(this).height())
      });

      // Add a file icon to the upload button.
      $('input[type="file"]').once(function() {
      $(this).after('<i class="fa fa-file-text-o"></i>');
      });

      // end.
    } // attach.function
  } // drupal.behaviors
})(jQuery);
