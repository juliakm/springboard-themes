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

      // Add pre wrappers to td cells with code.
      $('td.views-field.views-field-message').each(function () {
        if($.trim($(this).text()).length !== 0) {
          $(this).wrapInner('<pre class="td-code"></pre>');
        }
      });

      // Remove empty pre tags that were rendered by drupal.
      $("pre:empty").remove();

<<<<<<< HEAD
      // for each element that is classed as 'valign-bottom',
      // set its margin-top to the difference between its
      // own height and the height of its parent
      $('.valign-bottom').each(function() {
        $(this).css('margin-top', $(this).parent().height()-$(this).height())
      });

=======
      // Preparing for floatThead.
      // @todo - look in to using a preprocess for some of these?

      // Remove unwanted tableclasses, we'll use floatThead specific ones.
      $("table").removeClass('sticky-enabled').removeClass('tableheader-processed').removeClass('sticky-table');

      // Remove the unneeded hidden table that drupal put in.
      $("table.sticky-header").remove();

      // Instantiate floatThead if the script is present.
      if($().floatThead) {
        var $table = $('.springboard-inner table, .page-webform table');
        $table.floatThead({
          scrollContainer: function ($table) {
            // These are the two types of table wrappers we have thus far.
            return $table.closest('.view-content, .webform-results-inner');
          }
        });

      /** Set a var for table height and add it as a style if the table is less than 600.
        * 600 high or more tables get the 600 fixed height and then scrolls automtically if needed.
      */
      $('.springboard-inner table').each(function() {
        var $height = $('table').outerHeight();
        if($height <  600) {
          $('.view-content, .webform-results-inner').css('height', $height + 30);
        }
      });

      } // end if floatthead.

      // Move this out of the scrollable area if needed.
      $('.webform-results-per-page').prependTo('#block-system-main');

>>>>>>> refs/heads/t808-floatThead
    } // attach.function
  } // drupal.behaviors
})(jQuery);
