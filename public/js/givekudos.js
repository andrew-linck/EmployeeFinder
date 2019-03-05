/*
 *  Give Kudos
 */

const registerUser = function (event){ 
  event.preventDefault();
  const username = $('#reg-username').val().trim();
  const password = $('#reg-password').val().trim();

  $.post('/api/user',{username: username, password: password})
  .then(function(data){
    console.log(data);
  })
}

$('#register-btn').on('click', registerUser);