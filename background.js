

var URLStorage = ["facebook.com","gmail.com","twitter.com"];

function interceptRequest(request)  
{
  if(request && request.url)
  {
    if(request.type == "main_frame") // new page/site is loading in main window
    {
      for(i=0; i<=(URLStorage.length); i++){
      if(request.url.indexOf(URLStorage[i]) > -1)
      {
        //URLStorage = request.url;
        return {redirectUrl: chrome.extension.getURL("confirmation.html")};
      }
      }
    }
  }
}



chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ["*://*/*"]}, ['blocking']);

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
 
  // body...
    
    if(response === "ping") { 
      chrome.runtime.sendMessage(URLStorage);
    }else{


    	URLStorage.push(response);
    	chrome.runtime.sendMessage(URLStorage);    	
    }
    
});