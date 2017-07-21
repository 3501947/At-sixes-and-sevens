/**
 * Created by z-ko on 2017/6/23.
 */
//动态获取大标题
$(function () {
    $.ajax({
        url: "http://localhost:9090/api/getcategorytitle",
        success: function (data) {
            var html = template("titletpl", data);
            $(".bd").append(html);
        }
    });

    $(".bd").on("click", ".lst", function () {
        $(this).children(".hid").toggleClass("show");
        $(this).siblings().children(".hid").removeClass("show");
        var is = $(this);
        var id = $(this).data("index");
        $.ajax({
            url: "http://localhost:9090/api/getcategory",
            type: "get",
            data: {
                titleid: id,
            },
            success: function (data) {
                var xml = template("contpl", data);
                is.children(".hid").html(xml);
            }
        });
    });

    $(".bd").on("click", ".cd", function () {
        var id = $(this).data("id");
        $.ajax({
            url: "http://localhost:9090/api/getcategorybyid",
            data: {
                categoryid: id,
            },
            success: function (data) {
                var proid = data.result[0].categoryId;
                window.location.href = "list.html?id=" + proid;
            }
        });
    })
});