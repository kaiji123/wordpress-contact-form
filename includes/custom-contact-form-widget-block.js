// Rest of your code remains unchanged
wp.blocks.registerBlockType('contact-plugin/block', {
    title: 'Custom Contact Form Widget',
    icon: 'email',
    category: 'widgets',
    edit: function() {
        // Edit function for the block
        return wp.element.createElement('div', { id: 'contact-plugin-block' },
            wp.element.createElement('div', { id: 'form_success' }),
            wp.element.createElement('div', { id: 'form_error' }),
            wp.element.createElement('form', { id: 'enquiry_form' },
                wp.element.createElement('div', { id: 'contact_form_header' },
                    wp.element.createElement('h7', null, 'Contact Us')
                ),
                wp.element.createElement('input', { type: 'hidden', name: '_wpnonce', value: wpApiSettings.nonce }),
                wp.element.createElement('label', { htmlFor: 'name' }, 'Name'),
                wp.element.createElement('br', null),
                wp.element.createElement('input', { type: 'text', name: 'name', id: 'name', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('label', { htmlFor: 'phone' }, 'Phone'),
                wp.element.createElement('br', null),
                wp.element.createElement('input', { type: 'text', name: 'phone', id: 'phone', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('label', { htmlFor: 'email' }, 'Email'),
                wp.element.createElement('br', null),
                wp.element.createElement('input', { type: 'text', name: 'email', id: 'email', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('label', { htmlFor: 'message' }, 'Message'),
                wp.element.createElement('br', null),
                wp.element.createElement('textarea', { name: 'message', id: 'message', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('button', { type: 'button', onClick: submitForm }, 'Submit form')
            )
        );
    },
    save:  function() {

    // Edit function for the block
        return wp.element.createElement('div', { id: 'contact-plugin-block' },
            wp.element.createElement('div', { id: 'form_success' }),
            wp.element.createElement('div', { id: 'form_error' }),
            wp.element.createElement('form', { id: 'enquiry_form' },
                wp.element.createElement('div', { id: 'contact_form_header' },
                    wp.element.createElement('h7', null, 'Contact Us')
                ),
                wp.element.createElement('input', { type: 'hidden', name: '_wpnonce', value: wpApiSettings.nonce }),
                wp.element.createElement('label', { htmlFor: 'name' }, 'Name'),
                wp.element.createElement('br', null),
                wp.element.createElement('input', { type: 'text', name: 'name', id: 'name', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('label', { htmlFor: 'phone' }, 'Phone'),
                wp.element.createElement('br', null),
                wp.element.createElement('input', { type: 'text', name: 'phone', id: 'phone', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('label', { htmlFor: 'email' }, 'Email'),
                wp.element.createElement('br', null),
                wp.element.createElement('input', { type: 'text', name: 'email', id: 'email', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('label', { htmlFor: 'message' }, 'Message'),
                wp.element.createElement('br', null),
                wp.element.createElement('textarea', { name: 'message', id: 'message', onChange: handleInputChange }),
                wp.element.createElement('br', null),
                wp.element.createElement('br', null),
                wp.element.createElement('button', { type: 'button', onClick: submitForm }, 'Submit form')
            )
        );
    },
});

// Function to handle form submission
function submitForm() {
    console.log("submitting");
    var form = $('#enquiry_form');
    var inputValue = $('#name').val(); // Get the value of the input field
    console.log("Input value:", inputValue);
    console.log("Form values:", form.serializeArray());
    $("#form_error").hide();
    $.ajax({
        type: "POST",
        url: wpApiSettings.root + 'v1/contact-form/submit',
        data: form.serialize(),
        success: function(res) {
            console.log("success");
            form.hide();
            $("#form_success").html(res).fadeIn();
        },
        error: function() {
            console.log("fail");
            $("#form_error").html("There was an error submitting").fadeIn();
        }
    });
}

// Function to handle input change
function handleInputChange(e) {
    var inputId = e.target.id; // Get the id of the input field
    var inputValue = e.target.value; // Get the value of the input field
    $("#" + inputId).val(inputValue); // Set the value of the input field
}
