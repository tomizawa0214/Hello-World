let get = () => {
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      let user = document.getElementById("user");
      user.innerText = data.results[0].dob.age
    }
  });
};
