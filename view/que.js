$('.joinbutton').click(function(){
  // window.history.back();
    $('.nav-link').removeClass('active');
    $('#primarycontent').empty();
    var page = $(this).attr('page');
    $(this).addClass('active');
    $('#primarycontent').load('view/'+page);
    $('.bi-x').trigger('click');
  })