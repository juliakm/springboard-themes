(function($) {
  Drupal.behaviors.springboardForms = {
    attach: function (context, settings) {
      // jQuery clearEle definition: clears out validation classes
      (function($){
   	    $.fn.clearEle = function() {
   		  return this.each(function() { 
   		    $(this).removeClass('valid');
   		    $(this).next('label').remove();
   		    $(this).parents('.success').removeClass('success');
   		    $(this).parents('.error').removeClass('error');
      	    this.value = '';   		  
    	  });
   		} 
	  })(jQuery);
	  $(window).ready(function(){
	    // Custom Validation Regex rules: AMEX, VISA, MASTERCARD, DISCOVER, Diner's Club, JCB
	    $.validator.addMethod('creditcard', function(value, element) { 
		  return this.optional(element) || /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i.test(value);   
		  // Doesn't work for Australian Bankcard, Dankort (PBS) cards or Switch/Solo (Paymentech)
		  // Bankcard regexp below needs fixing
		  //^5610\5[6-9]d{2}\d{4}\d{4}$
		}, "Enter a valid credit card number");
	    
	    // Custom amount validation
	    $.validator.addMethod('amount', function(value, element) { 
	      // Add regexp	  
		  return this.optional(element) || /^[0-9]*(\.\d{1,3})*(,\d{1,3})?$/i.test(value);   
		}, "Enter a valid amount");
		
		// Instantiate Form Validation
 		$('.webform-client-form').validate({
 		  onfocusout: function (element) {
        	$(element).valid();
    	  },
  		  highlight: function(element) {
    		$(element).closest('.control-group').removeClass('success').addClass('error');
  		  },
  		  success: function(element) {
    		element.text('OK').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
  		  } 		  
 		});
 		// Zipcode custom validation rule
		$('#edit-submitted-billing-information-zip').rules("add", { 
	  	  required: true, 
	  	  number: true,
	  	  minlength:5, 
	  	  messages: { 
	    	required: "This field is required", 
	    	number: "Must be an integer",
	    	minlength: "Minimum of 5 characters"
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
	    	number: "Must be an integer",
	    	minlength: "Minimum of 3 characters",
	    	maxlength: "Maximum of 4 characters"
	  	  }
		});
		// Credit Card custom validation rule
		$("#edit-submitted-payment-information-payment-fields-credit-card-number").rules("add", { 
	  	  required: true, 
	  	  creditcard: true,
	  	  messages: { 
	    	required: "This field is required", 
	    	creditcard: "Enter a valid credit card number",
	  	  }
		});
		$('#edit-submitted-donation-other-amount').rules("add", {
		  required: true, 
	  	  amount: true,
	  	  messages: { 
	    	required: "This field is required", 
	    	amount: "Enter a valid amount",
	  	  }
		});
		
		// Other rules to go above here
  	    
  	    // Focus and Blur conditional functions
  	    $('#edit-submitted-donation-amount input[type="radio"]').change(function(){
		  if ($(this).val() == 'other') {
  	        $('#edit-submitted-donation-other-amount').focus();
  	      } else {
  	        $('#edit-submitted-donation-other-amount').clearEle();  	        
  	      }
  	    });
	    $('#edit-submitted-donation-other-amount').focus(function(){
  	      $('input[type="radio"][value="other"]').attr('checked', 'checked');	    
	    })
	    // Runs on Other Amount field
	    $('#edit-submitted-donation-other-amount').blur(function(){
	      var value = $(this).val();
	      // Match 1-3 decimal/comma places and fix value
	      if (value.match(/([\.,\-]\d{1}?)$/)) {
		    $(this).val($(this).val().slice(0, -2));
		  } else if (value.match(/([\.,\-]\d{2}?)$/)) {
		    $(this).val($(this).val().slice(0, -3));
		  } else if (value.match(/([\.,\-]\d{3}?)$/)) {
		    $(this).val($(this).val().replace(/\D/g,''));
		  }
	    });
	    // Small helper item
	    $('select').each(function(){
	      if ($(this).next().is('select')) {
	        $(this).next().addClass('spacer');
	      }
	    });

  	  }); // window.ready
    } // attach.func
  } // drupal.behaviors
})(jQuery);