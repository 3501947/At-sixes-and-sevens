/**
 * Created by z-ko on 2017/6/23.
 */

//ajax获取导航栏
$(function () {
   $.ajax({
       url: "http://localhost:9090/api/getindexmenu",
       type: "get",
       success: function (data) {
           var html = template("navtpl", data);
           $(".nav_list").append(html);
           $(".nav_list li:nth-child(8)").nextAll().hide();
           $(".nav_list").on("click", "li:nth-child(8)", function () {
               $(this).nextAll().slideToggle();
           });
       }
   });
});

//ajax获取产品列表数据
$(function () {
   $.ajax({
       url: "http://localhost:9090/api/getmoneyctrl",
       type: "get",
       success: function (data) {
           var html = template("listtpl", data);
           $(".list_bot").append(html);

       }
   });
});

//点击更多信息链接到省钱控页面
$(function () {
    $(".btn_more").on("click", function () {
        window.location.href = "moneyctrl.html";
    });
});


$(function () {
    $(".list_bot").on("click", ".zhekou", function () {
        var pid = $(this).data("zk");
        window.location.href = "moneyproduct.html?id=" + pid +"";
    });
});