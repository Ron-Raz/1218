$(function() {
	console.log("ver13");
	// update favicon
	$('link[rel="icon"]').attr('href', 'https://i.ibb.co/5GgsZPF/favicon-bnsf.png'); 
	// show SIP fields when creating entry
	$( "#Entry-name" ).on( "focus", function() {
		console.log( "entry name focus. len=",$("#Entry-submit").length );
		var $createEntry= $("#Entry-submit");
		if( $("#Entry-submit") > 0 ) {
			$("#customdata-SIP, #customdata-SIP+P, #customdata-SIP-label").show();
			console.log("showing fields");
		} else {
			console.log("keeping fields hidden");
		}
	});
});

