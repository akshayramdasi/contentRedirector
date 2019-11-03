$('#buttonForBlocking').click(function(event) {
	// body...
	event.preventDefault();
	var rexpr = new RegExp(/^http:\/\/|(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
	var enterdDomainName = $("#toBlockDomainName").val();
	if (rexpr.test(enterdDomainName)) {
			chrome.runtime.sendMessage(enterdDomainName);
	}
	else{
		alert("Enter valid domain name");
	}
	
});

//checking this code for some bugs
chrome.runtime.sendMessage("ping");

chrome.runtime.onMessage.addListener(function(response,sender,sendResponse) {
 var URLStorageRes = response;
  
$("#newBlockingList").remove();
$("#blockedList").append("<ul id='newBlockingList'></ul>");

	for (var i = 0; i <URLStorageRes.length; i++) {

        $("#newBlockingList").append("<li>"+URLStorageRes[i]+"</li>");
       
  }
}

  );
	
	var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.test(str);