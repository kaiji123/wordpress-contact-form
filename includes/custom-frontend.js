// custom-contact-form-widget-block-frontend.js

// Add animation class when input is focused
jQuery(document).on('focus', 'input, textarea', function() {
    jQuery(this).addClass("input-animation");
});

// Remove animation class when input is blurred
jQuery(document).on('blur', 'input, textarea', function() {
    jQuery(this).removeClass("input-animation");
});

console.log("hello")
// Function to handle form submission
function submitForm() {
    console.log("submitting");
    var form = jQuery('#enquiry_form');
    console.log(form)
    var inputValue = jQuery('#name').val(); // Get the value of the input field
    console.log("Input value:", inputValue);
    console.log("Form values:", form.serializeArray());
    jQuery("#form_error").hide();
    jQuery.ajax({
        type: "POST",
        url: wpApiSettings.root + 'v1/contact-form/submit',
        data: form.serialize(),
        success: function(res) {
            console.log("success");
            form.hide();
            jQuery("#form_success").html(res).fadeIn();
        },
        error: function() {
            console.log("fail");
            jQuery("#custom-form_error").html("There was an error submitting").fadeIn();
        }
    });
}
// // jQuery event handler for submit button click
// jQuery(document).on('click', '#custom-enquiry_form button[type="button"]', function() {
//     submitForm(); // Call submitForm function when button is clicked
// });


jQuery(document).ready(function() {
    jQuery('#enquiry_form button[type="button"]').attr('type', 'submit');
});

// jQuery event handler for form submission
jQuery(document).on('submit', '#enquiry_form', function(event) {
    event.preventDefault(); // Prevent default form submission
    submitForm(); // Call submitForm function when form is submitted
});