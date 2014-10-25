$(function () {
    var buf='<div style="padding-top: 20px;"><table width="100%"> ';
    buf+=' <tr>';
     buf+='<td width="50%" align="right" style="padding-right: 20px;"><p>' +
         '<label >Apple ID</label><span class="tbox-wrap">' +
         '<input id="deappleid"  type="text" value="" ></span>' +
         '<label for="em">验证码</label><span class="tbox-wrap">' +
         '<input id="dechkcode" type="text" value="" ></span>' +
         '<a href="#" id="ctbt" class="bigblue submit"><span>创建 Apple ID</span></a><img class="img-captcha" alt="CAPTCHA" src="/captcha?type=IMAGE"></p>';
    buf+='     </td>';
    buf+='  </tr>         ';
    buf+='     </table></div> ';
    $("nav").append($(buf));
    $(".logo").attr("style","padding-bottom:20px");
    chrome.extension.onRequest.addListener(
        function (request, sender, sendResponse) {
            console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            //init(request.mailAddr,request.chkcode,request.store);
        });
     $("#ctbt").click(function(){
         chrome.extension.sendRequest({msgCode: "getDefaults"}, function (response) {
             console.log(response.store);
             var store= response.store;
             var mailAddr=$("#deappleid").val();
             var chkcode=$("#dechkcode").val();
             if(!mailAddr){
                  alert("邮箱不能为空！");
                  return;
             }
             if(!chkcode){
                 alert("验证码不能为空！");
                 return;
             }
             init(mailAddr,chkcode,store);
         });
     });

});
function init(mailAddr,chkcode,store){
    for(key in store){
        $("#"+key).val(store[key]);
    }
    $("#em").val(mailAddr?mailAddr:"fxl0206@qq.com");
    $("#cap-input").val(chkcode);
    //confirm("确定要清空数据吗？");
    $("#aid-cre-form").attr("target","_blank");
    $("#aid-cre-form").submit();
}