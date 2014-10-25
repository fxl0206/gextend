$(function(){
    var defaults=new Array();
    defaults["lastName"]="文昊";
    defaults["firstName"]="张";
    defaults["em"]="fxl0206@qq.com";
    defaults["pwd"]="fxL286955";
    defaults["c-pwd"]="fxL286955";
    defaults["sec-q-1"]="139";
    defaults["sec-q-2"]="143";
    defaults["sec-q-3"]="144";
    defaults["sec-ans-1"]="千里千寻";
    defaults["sec-ans-2"]="宫崎骏";
    defaults["sec-ans-3"]="火星人";
    defaults["dob-year"]="2000";
    defaults["dob-mon"]="02";
    defaults["dob-day"]="6";
    defaults["addr-l-1"]="浙江杭州";
    defaults["to-ci"]="杭州西湖区";
    for(key in defaults){
        if(localStorage[key]){
            $("#"+key).val(localStorage[key]);
        }else{
            $("#"+key).val(defaults[key]);
        }
    }
    $("#saveStore").click(function(){
        for(key in defaults){
            var v= $("#"+key).val();
            if(v){
                localStorage[key]= v;
            }
        }
        alert("保存成功！");
    });
    $("#cancelStore").click(function(){
         window.close();
    });
  /* $("#lastName").val("文昊");
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
    alert(localStorage["lastName"]);*/
   /* $.ajax({
        type:"post",
        dataType:"text",
        url:"https://ipcrs.pbccrc.org.cn/css/base.css",
        data:{yyyyMM:"-1"},
        success:function(data){
            //解析data，转为json
            alert(data);
        }});*/
});