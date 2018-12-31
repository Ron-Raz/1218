$(function() {
  console.log("ver7");
  // update favicon
  $('link[rel="icon"]').attr('href', 'https://i.ibb.co/5GgsZPF/favicon-bnsf.png'); 
  // check if creating live entry
  var $liveEntry=$("#Entry-submit");
  if( $liveEntry.length === 0 ) {
    console.log("hide sip field");
    // this is not a live entry. disable the sip field
    $("#customdata-SIP").hide();
  }
});

