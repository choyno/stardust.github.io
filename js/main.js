$(document).ready(function(){
        
	$(".btn").click(function(){

	  var code = $(this).data('itemcode');

	  $('#itemCode').text(code);

	  // alert(code);

	  $('.bs-example-modal-md').modal("show");
	});


	//form validation

	$(document).on('click','#btnSubmit',function(e){
		e.preventDefault();


		  var code = $("#itemCode").text();
		  var $form = $('form[name="order-form"]'),
		      data;
		  if($form.valid()){
		    data = "code="+code+'&'+$form.serialize();

		    var orderCode = code;

		    window.location = "success.html"

		  }
		});
		//event handler for submit button
		$('form[name="order-form"]').validate({
		  debug: true,
		  rules : {
		    fullname : "required",
		    address : "required",
		    contact : "required",
		    size : "required",
		    qty : "required"
		  },
		  messages : {
		    fullname : "Don't leave blank on fullname",
		    address : "Don't leave blank on address",
		    contact : "Invalid Contact Information",
		    size : "Please select your size",
		    qty : "Please select quantity"
		  }
		});

});