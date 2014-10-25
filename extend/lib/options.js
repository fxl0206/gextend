$(function(){
    var defaults=new Array();
    defaults["lastName"]="欣欣";
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