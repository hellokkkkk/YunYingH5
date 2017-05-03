
$(document).ready(function(){
    //设置多少人学习人数字体大小
    var w=$(window).width();
            var f=w*0.035;
            for(var i=1;i<8;i++){
                $("#ln"+i).css({"font-size":f});
            };
    //回到顶部
    $("#floatbtn").click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });
    //设置锚点a高度
    for(var i=1;i<6;i++){
        $("#a"+i).css({"top":-h});
    };
    //通过接口获取课程点击数据
    $.post("/lessonservice/viewNum.do", {"id": "30"}, function (result) {
            if(result.success == true){
                $("#ln1").html(result.data.viewNum+"人已学");
                return;
            }
        },"json");
    $.post("/lessonservice/viewNum.do", {"id": "31"}, function (result) {
            if(result.success == true){
                $("#ln2").html(result.data.viewNum+"人已学");
                return;
            }
        },"json");
    $.post("/lessonservice/viewNum.do", {"id": "5"}, function (result) {
            if(result.success == true){
                $("#ln3").html(result.data.viewNum+"人已学");
                return;
            }
        },"json");
    $.post("/lessonservice/viewNum.do", {"id": "38"}, function (result) {
            if(result.success == true){
                $("#ln4").html(result.data.viewNum+"人已学");
                return;
            }
        },"json");
    $.post("/lessonservice/viewNum.do", {"id": "39"}, function (result) {
            if(result.success == true){
                $("#ln5").html(result.data.viewNum+"人已学");
                return;
            }
        },"json");
    $.post("/lessonservice/viewNum.do", {"id": "37"}, function (result) {
            if(result.success == true){
                $("#ln6").html(result.data.viewNum+"人已学");
                return;
            }
        },"json");
    $.post("/lessonservice/viewNum.do", {"id": "40"}, function (result) {
            if(result.success == true){
                $("#ln7").html(result.data.viewNum+"人已学");
                return;
            }
        },"json");
});
var h=$("#nav").outerHeight(true);
var b=1.8*h;
//页面锚点跳转
function point(id){
    document.getElementById(id).scrollIntoView();
};
//改变导航栏颜色
function change(ids){
    for(var i=1;i<6;i++){
    $("#li"+i+"_1").css({"display":"block"});
    $("#li"+i+"_2").css({"display":"none"});
    };
    $("#li"+ids+"_1").css({"display":"none"});
    $("#li"+ids+"_2").css({"display":"block"});  
}
//判断页面位置改变导航栏以及回到顶部按钮
function select(){
   if (document.getElementById("zhibo1").getBoundingClientRect().top<=b && document.getElementById("ban2").getBoundingClientRect().top>=b ) {
        change(1); 
        $("#floatbtn").css({"display":"none"});  
    }
    else if (document.getElementById("ban2").getBoundingClientRect().top<=b && document.getElementById("ban3_1").getBoundingClientRect().top>=b) {
        change(2);
        $("#floatbtn").css({"display":"block"});   
    }
    else if (document.getElementById("ban3_1").getBoundingClientRect().top<=b && document.getElementById("ban4_1").getBoundingClientRect().top>=b ) {
         change(3);
         $("#floatbtn").css({"display":"block"});     
    }
    else if (document.getElementById("ban4_1").getBoundingClientRect().top<=b && document.getElementById("ban5").getBoundingClientRect().top>=b) {
        change(4);
        $("#floatbtn").css({"display":"block"});     
    }
    else if (document.getElementById("ban5").getBoundingClientRect().top<=b ) {
        change(5);
        $("#floatbtn").css({"display":"block"});    
    }else{
        change(0);
        $("#floatbtn").css({"display":"none"});
    };    
};
//页面滚动时调用函数
$(window).scroll(select);
//跳转四六级直播详情页
$("#zhibo1").click(function(){window.location ="cet4.html";})
$("#zhibo2").click(function(){window.location ="cet6.html";})
//点读书跳转更多页面
function more(){
    window.location="http://mp.bookln.cn/h5/clickbook.htm";
}
//跳转pets专题页
$("#foot").click(function(){window.location ="http://mp.bookln.cn/h5/petspw/pets.html";})
//跳转试读
function readbook(bookid){
	window.location ="http://qr.bookln.cn/read.htm?_appbiz=clickread&bookId="+bookid+"&bookid="+bookid+"&srcchannel=h5cetprojectRead";
}
//跳转购买
function buybook(bizid){
	window.location ="http://qr.bookln.cn/orders.htm?_appbiz=buy&biztype=8&bizType=8&bizId="+bizid+"&bizid="+bizid+"&srcchannel=h5cetprojectBuy";
}
//跳转课程详情页
function watchlesson(lessonid){
	window.location ="http://qr.bookln.cn/lesson.htm?_appbiz=lesson&lessonId="+lessonid+"&lessonid="+lessonid+"&srcchannel=h5cetproject";
}