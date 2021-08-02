$(document).ready(function(){

//function to getLocation.
getLocation();
// var intervalId = setInterval(function(){
//   getLocation();
//   console.log(positionGlobal);
// }, 5000); 

$('#mobile-nav-toggle').addClass('looptemplate');

$('.back-to-top').click(function(){
  $('html, body').scrollTop( $("#primarycontent").offset().top);
})

// function untuk redirect, dan load view.
function initialURLLoad(){
  var url      = window.location.href;
  var origin   = window.location.origin+window.location.pathname;
  var pageSelected = url.replace(origin+'#','');
  //utk cek current page
  config.currentPage = pageSelected;
  if(pageSelected == origin){
    $('#primarycontent').load('view/hero.html');
  }else{
    $('.nav-link').removeClass('active');
    var test = $('.nav-link[page="'+pageSelected+'.html"]').addClass('active');
    $('#primarycontent').empty();
    $('#primarycontent').load('view/'+pageSelected);
    if(pageSelected == 'login')
    $('#primarycontent').load(pageSelected);

  }
}
function checkSession(){
  if(sessionStorage.getItem('email') == null){
    $('.logout-button').css('display','none');
    $('.login-button').css('display',true);
    // $('.mobile-nav-toggle').css('display','none');
  }
  else{
    // alert('test');
    $('.login-button').css('display','none');
    $('.mobile-nav-toggle').css('display',true);
    
  }
}
initialURLLoad();
checkSession();
// if(sessionStorage.getItem('email') == null){
//   $('.logout-button').css('display','none');
//   $('.login-button').css('display',true);
// }
// else{
//   $('.login-button').css('display','none');
// }
    
$(window).on('hashchange', function(e){
  initialURLLoad();
  // if(sessionStorage.getItem('email') == null)
  //   $('.logout-button').css('display','none');
  
  checkSession();
});

$('.login-button').click(function(){
  $('#primarycontent').load('login.html');
});

$('.logout-button').click(function(){
  sessionStorage.clear();
  $('#primarycontent').load('login.html');
  console.log(sessionStorage.getItem('email'));
  if(sessionStorage.getItem('email') == null){
    $('.logout-button').css('display','none');
    $('.login-button').css('display','');
  }
  else{
    $('.login-button').css('display','none');
  }
});

$('.nav-link').click(function(){
  $('.nav-link').removeClass('active');
  $('#primarycontent').empty();
  var page = $(this).attr('page');
  $(this).addClass('active');
  $('#primarycontent').load('view/'+page);
  $('.bi-x').trigger('click');
})
// function untuk redirect, dan load view END.
})
