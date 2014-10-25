$(function(){
	alert("hre");
	
	chrome.extension.sendRequest({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});


chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
                
                	chrome.extension.sendRequest({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});
                
                
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
    else
      sendResponse({farewell:"test"}); // snub them.
  });


	});