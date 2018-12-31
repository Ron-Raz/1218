$(function() {
  console.log("ver6");
  // update favicon
  $('link[rel="icon"]').attr('href', 'https://i.ibb.co/5GgsZPF/favicon-bnsf.png'); 
  // check if creating live entry
  var $liveEntry=$("#Entry-submit");
  if( $liveEntry.length === 0 ) {
    // this is not a live entry. disable the sip field
    var $sipField= $("#customdata-SIP");
    $sipField.hide();
  }
});

