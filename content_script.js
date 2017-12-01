$('#buttonForBlocking').click(function(event) {
	// body...
	event.preventDefault();
	chrome.runtime.sendMessage($("#toBlockDomainName").val());
	
});


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
	