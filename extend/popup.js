$(function(){
	$("#testbt").click(function(){
		ttest();
		});
	});
function ttest(){
	$("#txtTranslateSource").val("test");
	stC();
	
	}
	function stC(){
chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendRequest(tab.id, {greeting: "yeye"}, function(response) {
    console.log(response.farewell);
  });
});	
	
}