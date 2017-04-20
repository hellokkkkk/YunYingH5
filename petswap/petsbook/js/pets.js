//倒计时计算
function GetRTime(){
    var EndTime1= new Date('2017/09/09 00:00:00');
    var EndTime2= new Date('2017/06/17 00:00:00');
    var NowTime = new Date();
    var t1 =EndTime1.getTime() - NowTime.getTime();
    var t2 =EndTime2.getTime() - NowTime.getTime();
    var d1=0;
    var d2=0;
    if(t1>=0){
      d1=Math.ceil(t1/1000/60/60/24);  
    }
    if(t2>=0){
      d2=Math.ceil(t2/1000/60/60/24);  
    }
    document.getElementById("d1").innerHTML = d2 ;
    document.getElementById("d2").innerHTML = d1 ;
    document.getElementById("d3").innerHTML = d1 ;
    document.getElementById("d4").innerHTML = d1 ;
    document.getElementById("d5").innerHTML = d1 ;
}
setInterval(GetRTime,0);
//改变导航栏颜色
function change(ids){
    for(var i=1;i<6;i++){
    $("#li"+i+"_1").css({"display":"block"});
     $("#li"+i+"_2").css({"display":"none"});
    
    };
    var h=$("#nav").outerHeight(true);
    $("#a"+ids).css({"top":-h});
    $("#li"+ids+"_1").css({"display":"none"});
    $("#li"+ids+"_2").css({"display":"block"});  
}
//判断页面位置改变导航栏
function select(){
   if (document.getElementById("ban1").getBoundingClientRect().top<=215 && document.getElementById("ban2").getBoundingClientRect().top>=186 ) {
        change(1);    
    }
    else if (document.getElementById("ban2").getBoundingClientRect().top<=185 && document.getElementById("ban3").getBoundingClientRect().top>=186) {
        change(2);   
    }
    else if (document.getElementById("ban3").getBoundingClientRect().top<=185 && document.getElementById("ban4").getBoundingClientRect().top>=186 ) {
         change(3);     
    }
    else if (document.getElementById("ban4").getBoundingClientRect().top<=185 && document.getElementById("ban5").getBoundingClientRect().top>=186) {
        change(4);     
    }
    else if (document.getElementById("ban5").getBoundingClientRect().top<=185 ) {
        change(5);    
    }else{change(0)};    
};
document.querySelector('#container').addEventListener('scroll',select);
//跳转试读
function readbook(bookid){
  window.location ="http://qr.bookln.cn/read.htm?_appbiz=clickread&bookId="+bookid+"&bookid="+bookid+"&srcchannel=mph5petsread";
}
//跳转购买
function buybook(clickbookid){
  window.location ="http://qr.bookln.cn/orders.htm?_appbiz=buy&biztype=8&bizType=8&bizId="+clickbookid+"&bizid="+clickbookid+"&srcchannel=mph5petsbuy";
}
//跳转书籍详情页
function watchlesson(sign,bookid){
  window.location ="http://qr.bookln.cn/book.htm?_appbiz=bookdetail&sign="+sign+"&id="+bookid+"&bookid="+bookid+"&srcchannel=mph5pets";
}