$(document).ready(function(){
  
  var url = "http://tailor.scoutbi.tech/bri/api.php?action=cabang";
  var url2 = "http://tailor.scoutbi.tech/bri/api.php?action=detail_cabang";
  var url3 = "http://tailor.scoutbi.tech/bri/api.php?action=book";
  // var url = "http://localhost/test-app/public/get_branch";
  
  
  var postData = {
    "Latitude": positionGlobal.Latitude,
    "Longitude": positionGlobal.Longitude
  };
  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(postData), 
    success: function(result){
        var data = result;
        var temp = $('.BranchTemplate');
        var list = $('.BranchList');
        
        for(let i = 0; i<data.length; i++){
          let item = data[i];
          let e = temp.clone();
          e.removeClass('looptemplate').removeClass('BranchTemplate').addClass('BranchData');
          $('.BranchName',e).text(item.cabang_name);
          $('.BranchAddress',e).text(item.alamat.substring(0,53)+"...");
          $('.BranchImage',e).attr('src',item.image);
          $('.QueRemaining',e).text(item.total_sisa_antrian);
          e.attr('href','#branch-list/branch-detail.html?id='+item.cabang_id).attr('page','branch-list/branch-detail.html');
          
          list.append(e);
          e.click(function(){
            // alert('clicked');
          })
        }
    },
    error:function(result){
      // console.log(result.responseText)
    }
  });

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
