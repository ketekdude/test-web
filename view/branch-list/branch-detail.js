$(document).ready(function(){
  
  var url = "http://tailor.scoutbi.tech/bri/api.php?action=detail_cabang";
  
  $('#que').css('display','none');
  
  //get the id from url.
  let test = new URL(config.webProtocol+config.currentPage);  
  
  let searchParams = new URLSearchParams(test.search);
  var id = searchParams.get('id');
  
  var postData = {
    "cabang_id": id
  };
  $.ajax({
    url: url,
    type: "POST",
    data: JSON.stringify(postData), 
    success: function(result){
        var data = result;
        console.log(data)
        $('.BranchName').text(data.cabang_name);
        $('.MapLink').attr('href',data.map_link).attr('target','_BLANK');
        $('.BranchAddress').text(data.alamat);
        $('.RemainingQue').text(data.total_sisa_antrian);
        $('.Phone').text(data.phone);
        
        var QueTypeContainer = $('.QueType');
        var temp = $('.QueTemplate');
        for(let i = 0; i<data.antrian.length;i++){
          let item = data.antrian[i];
          let e = temp.clone();
          e.removeClass('QueTemplate').removeClass('looptemplate').addClass('QueData');
          $('.Name',e).text(item.nama);
          $('.QueLeft',e).text(item.sisa_antrian);
          let urlBook = "http://tailor.scoutbi.tech/bri/api.php?action=book";
          postData.antrian_id = item.id;
          $('.BookCode',e).unbind('click').click(function(){
              $.ajax({
                url: urlBook,
                type: "POST",
                data: JSON.stringify(postData),
                success: function(result){
                  console.log(result);
                  $('html, body').scrollTop( $("#primarycontent").offset().top);
                  $('#pricing').css('display','none');
                  $('#que').css('display','');
                  $('.QueInfo').text(result.antrian_info.nama);
                  // $('#primarycontent').load('view/que.html');
                  console.log(result.booking_no);
                  $('.BookNo').text(result.booking_no);
                },
                error: function(result){

                }
              });
          })
          // $('.BookCode',e).attr('href','#branch-list/book-code.html?id='+item.id+'&cabang_id='+postData.cabang_id).attr('page','branch-list/book-code.html')
          
          QueTypeContainer.append(e);
        }
    },
    error:function(result){
      // console.log(result.responseText)
    }
  });

})
