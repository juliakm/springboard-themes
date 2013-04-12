(function($) {
  Drupal.behaviors.springboardForms = {
    attach: function (context, settings) {
         
	  $(window).ready(function(){
	    // Validate form
 		$('.webform-client-form').validate({
  		  highlight: function(element) {
    		$(element).closest('.control-group').removeClass('success').addClass('error');
  		  },
  		  success: function(element) {
    		element.text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
  		  }
 		});
  	  });

    }
  }
})(jQuery);