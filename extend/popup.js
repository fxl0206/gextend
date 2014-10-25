$(function () {
    setTimeout(getCode,500);
    $("#testbt").click(function () {
        doRst();
    });
    $("#chbt").click(function () {
        getCode();
    });
});
function getCode(){
    $("#chkimg").attr("src","https://appleid.apple.com/captcha?type=IMAGE");
}
function doRst() {
    var mail=$("#mailAddr").val();
    var code=$("#chkCode").val();
    if(!mail){
       // alert("邮箱不能为空！");
       // return;
    }
    if(!code){
       // alert("验证码不能为空！");
       //return;
    }
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendRequest(tab.id, {mailAddr: mail,chkcode:code,store:localStorage}, function (response) {
            console.log(response.farewell);
        });
    });
}