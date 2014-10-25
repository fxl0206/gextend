$(function(){
   $("#lastName").val("文昊");
   $("#firstName").val("张");
   $("#em").val("fxl0206@qq.com");
   $("#pwd").val("fxL286955");
   $("#c-pwd").val("fxL286955");
   $("#sec-q-1").val("139");
   $("#sec-q-2").val("143");
   $("#sec-q-3").val("144");
   $("#sec-ans-1").val("千里千寻");
   $("#sec-ans-2").val("宫崎骏");
   $("#sec-ans-3").val("火星人");
   $("#dob-year").val("2000");
   $("#dob-mon").val("02");
   $("#dob-day").val("6");
   $("#addr-l-1").val("浙江杭州");
   $("#to-ci").val("杭州西湖区");   
   //confirm("确定要清空数据吗？");
   $("#cre-aid").click();
   //$("#aid-cre-form").attr("target","_blank");
   //$("#aid-cre-form").submit();
  /* $.ajax({
						type:"post",
						dataType:"text",
						url:"https://ipcrs.pbccrc.org.cn/css/base.css",
						data:{yyyyMM:"-1"},
						success:function(data){
							//解析data，转为json
							alert(data);
						}});*/
	var port = chrome.extension.connect();
	port.postMessage({message: "myCustomEvent", values: "esf"});
})