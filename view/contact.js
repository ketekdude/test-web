$(document).ready(function(){
  $('#close').click(function(){
    var parent = $(this).parent();
    parent.removeClass('d-block');
  })
  $("#action").unbind('submit').submit(function(event){
    var ser = $('form').serializeArray();
    console.log(ser);
    $('.sent-message').addClass('d-block');
    alert('check your email to get your que number');
    event.preventDefault()
    alert(config.baseUri);
})

})
