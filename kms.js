$(function() {
	console.log("ver12");
	// update favicon
	$('link[rel="icon"]').attr('href', 'https://i.ibb.co/5GgsZPF/favicon-bnsf.png'); 
	// show SIP fields when creating entry
	$( "#Entry-name" ).on( "focus", function() {
		console.log( $( this ).text() );
	});
	/*
	var $createEntry= $("#Entry-submit");
	if( $createEntry > 0 ) {
		$("#customdata-SIP, #customdata-SIP+P, #customdata-SIP-label").show();
		console.log("showing fields");
	} else {
		console.log("keeping fields hidden");
	}
	*/
});

