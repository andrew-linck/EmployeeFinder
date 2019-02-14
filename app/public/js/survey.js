$(function(){
    const validateForm = function() {
        let isValid = true;

        // Checks the text field that are for inserting name and link to image to see if they are filled in. If they do not have a value the isValid is set to false which will in turn not allow us to send the ajax request
        $('input').each(function() {
            if (!$(this).val()) {
                isValid = false;
            }
        });

        // This is the same as the function above but it checks for the items in the survey rather than the text field ones above.
        $('.custom-select').each(function(i, element) {
            if (!$(this).val()) {
              isValid = false;
            }
          });

        return isValid
    }

    const displayModal = function(data) {
        $('#match-name').text(data.name);
        $('#match-img').attr('src', data.photo);

        // Show the modal with the best match
        $('#results-modal').modal('toggle');
    }

    const submit = function(e) {
        e.preventDefault();
    
        // If all required fields are filled
        if (validateForm()) {
    console.log(true);
    
          // Create an object for the user's data
          const userData = {
            name: $('#name').val().trim(),
            photo: $('#photo').val().trim(),
            scores: [
              $('#q1').val(),
              $('#q2').val(),
              $('#q3').val(),
              $('#q4').val(),
              $('#q5').val(),
              $('#q6').val(),
              $('#q7').val(),
              $('#q8').val(),
              $('#q9').val(),
              $('#q10').val()
            ]
          };
    
          // AJAX post the data to the employees API.
          $.post('/api/employees', userData, displayModal);
    
        } else {
    
          // Display an error alert if the form is not valid
          $('#error')
            .text('Please fill out all fields before submitting!')
            .addClass('alert alert-danger');
        }
      }
    
      $('#submit').on('click', submit)
})