/**
 * Created by z-ko on 2017/6/26.
 */
//动态获取大标题
$(function () {
    $.ajax({
        url: "http://localhost:9090/api/getbrandtitle",
        success: function (data) {
          var html = template("titletpl", data);
            $(".bd").append(html);
        }
    });


    $(".bd").on("click", ".lst", function () {

        var id = $(this).data("index");
        window.location.href = "getbrand.html?id=" + id;
    });
});