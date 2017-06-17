
$(function(){

        $(".top-ad-clear").click(function(){
        $(".top-ad").hide();
    })
    $(".s-c-b-lists").mouseover(function(){
        $(".s-c-b-l-span").show();
    });
    $(".s-c-b-lists").mouseleave(function(){
        $(".s-c-b-l-span").hide();
    });
    var i=0;
    $(".s-c-b-l-next").click(function(){
        if(i<3){
            i++;
            $(".seckill-pic").eq(i).show().siblings(".seckill-pic").hide();
        }else{
            i=0;
        }
    })
    $(".s-c-b-l-prev").click(function(){
        if(i>0){
            i--;
            $(".seckill-pic").eq(i).show().siblings(".seckill-pic").hide();
        }else{
            i=3;
        }
    })
    $("#search-inp").focus(function(){
        var val=$(this).val();
        if(val == ""||val =="618狂欢会场"){
            $(this).val("");
        }
    })
    $("#search-inp").blur(function(){
        var val=$(this).val();
        if(val == ""){
            $(this).val("618狂欢会场");
        }
    })

})
