$(document).ready(function() {
    // Initialize form validation
    $("#contactForm").validate({
      // Validation rules for each input field
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phoneUS: true // Optional: Customize based on phone format
        },
        subject: {
          required: true,
          minlength: 5
        },
        message: {
          required: true,
          minlength: 10
        }
      },
  
      // Custom error messages to show validation warnings
      messages: {
        name: {
          required: "Name is required.",
          minlength: "Your name must be at least 3 characters long."
        },
        email: {
          required: "Please enter your email.",
          email: "Please enter a valid email address."
        },
        phone: {
          required: "Please provide your phone number.",
          phoneUS: "Please enter a valid phone number."
        },
        subject: {
          required: "Please enter the subject.",
          minlength: "Subject must be at least 5 characters."
        },
        message: {
          required: "Please enter a message.",
          minlength: "Message should be at least 10 characters long."
        }
      },
  
      // Submit handler to show warning and prevent form submission
      submitHandler: function(form) {
        // Display validation warning
        var warningBox = $('#formWarnings');
        warningBox.html('<p>Please correct the highlighted fields and try again.</p>').show();
  
        // Optionally you can reset form or take other actions
        return false; // Prevent form submission
      },
  
      // Error message placement (show error message below each field)
      errorPlacement: function(error, element) {
        error.insertAfter(element); // Place error after the field
      },
  
      // Highlight invalid fields
      highlight: function(element) {
        $(element).addClass('is-invalid'); // Use Bootstrap invalid class
      },
  
      // Remove error highlight from valid fields
      unhighlight: function(element) {
        $(element).removeClass('is-invalid'); // Remove Bootstrap invalid class
      }
    });
  });

  

  const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});



