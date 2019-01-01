$(function() {
	console.log("ver11");
	// update favicon
	$('link[rel="icon"]').attr('href', 'https://i.ibb.co/5GgsZPF/favicon-bnsf.png'); 
	// show SIP fields when creating entry
	var $createEntry= $("#Entry-submit");
	if( $createEntry > 0 ) {
		$("#customdata-SIP, #customdata-SIP+P, #customdata-SIP-label").show();
		console.log("showing fields");
	} else {
		console.log("keeping fields hidden");
	}
});

