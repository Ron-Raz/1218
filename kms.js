$(function() {
	console.log("ver10");
	// update favicon
	$('link[rel="icon"]').attr('href', 'https://i.ibb.co/5GgsZPF/favicon-bnsf.png'); 
	// check if sip field on screen
	var $sipField=$("#customdata-SIP");
	if( $sipField.length > 0 ) {
		// check if creating live entry
		var $liveEntry=$("#Entry-submit");
		if( $liveEntry.length === 0 ) {
			console.log("hide sip field");
			// this is not a live entry. disable the sip field
			$sipField.hide();
		} else {
			console.log("no live entry here");
		}
	} else {
	console.log("sip field not here");
	}
});

