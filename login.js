$(document).ready(function(){
  $('#close').click(function(){
    var parent = $(this).parent();
    parent.removeClass('d-block');
  })
  $("#action").unbind('submit').submit(function(event){
    var ser = $('form').serializeArray();
    console.log(ser);
    ser.forEach(function(item,index,arr){
      
      sessionStorage.setItem(item.name, item.value);
      
    })
    
    
    alert('check your email to get your que number');
    var origin   = window.location.origin+window.location.pathname;
    var url      = window.location.href;
    // console.log(origin);
    window.location.href = origin;
    event.preventDefault()
})

})
