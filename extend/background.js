$(function () {
    chrome.extension.onRequest.addListener(
        function (request, sender, sendResponse) {
            console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.msgCode == "getDefaults")
                sendResponse({store: localStorage});
            else
                sendResponse({}); // snub them.
        });

});
