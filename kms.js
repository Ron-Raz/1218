function addCSSRule(sheet, selector, rules, index) {
	// addCSSRule(document.styleSheets[0], "header", "float: left");
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}


$(function() {
	var wlp= window.location.pathname;
	console.log("ver19", wlp);
	/*
	pathname		action
	========		======
	/upload/media		hide sip field (done in css)
	/kwebcast/entry/add	show sip field
	*/
	// update favicon
	$('link[rel="icon"]').attr('href', 'https://i.ibb.co/5GgsZPF/favicon-bnsf.png'); 
	
	// show SIP fields when creating, editing, viewing live entry
	var res= wlp.split('/');
	if( wlp === '/kwebcast/entry/add' || ($("#KwebcastAdvancedOptions-tab").length > 0) ) {
		console.log("don't hide sip field");
	} else {
		
		addCSSRule(document.styleSheets[0], "#customdata-SIP, #customdata-SIP+P, #customdata-SIP-label, #entry-metadata", "display: none");
		console.log("rule added to hide sip field");
	}
	/*
	$( "#Entry-name" ).on( "focus", function() {
		console.log( "entry name focus. Entry-submit=",$("#Entry-submit").length );
		if( $("#Entry-submit") > 0 ) {
			$("#customdata-SIP, #customdata-SIP+P, #customdata-SIP-label").show();
			console.log("showing fields");
		} else {
			console.log("keeping fields hidden");
		}
	});
	*/
});

