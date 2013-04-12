(function($) {
  Drupal.behaviors.springboardForms = {
    attach: function (context, settings) {
      
	  $(window).ready(function(){
	    // Validate form
 		$('.webform-client-form').validate({
 		  onfocusout: function (element) {
        	$(element).valid();
    	  },
  		  highlight: function(element) {
    		$(element).closest('.control-group').removeClass('success').addClass('error');
  		  },
  		  success: 
  		    function(element) {
    		  element.text('OK').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
  		  }  		  
 		});
  	    // CVV custom validation rule
		$("#edit-submitted-payment-information-payment-fields-credit-card-cvv").rules("add", { 
	  	  required: true, 
	  	  number: true,
	  	  minlength:3, 
	  	  maxlength:4, 
	  	  messages: { 
	    	required: "This field is required", 
	    	number: "must be an integer",
	    	minlength: "min of 3 chars",
	    	maxlength: "max of 4 chars"
	  	  }
		});
		// Other rules to go here
  	  
  	  }); // window.ready
  	  
    } // attach.func
  } // drupal.behaviors
})(jQuery);