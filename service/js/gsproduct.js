/**
 * Created by z-ko on 2017/6/26.
 */
$(function () {

    var shopid;
    var areaid;

    $.ajax({
        url: "http://localhost:9090/api/getgsproduct",
        data: {
            shopid: 0,
            areaid: 1,
        },
        success: function (data) {
            var html = template("lsttpl", data);
            $(".list").html(html);

        }
    });

    $(".jd").on("click", function () {

        $(".xiala").toggleClass("show").siblings().removeClass("show");

        if ($(".two").children().length > 0) {
            return false;
        }
        else {
            $.ajax({
                url: "http://localhost:9090/api/getgsshop",
                success: function (data) {
                    var html = template("shoptpl", data);
                    $(".two").html(html);
                }
            });
        }
    });

    $(".hb").on("click", function () {

        $(".la").toggleClass("show").siblings().removeClass("show");

        if ($(".three").children().length > 0) {
            return false;
        }
        else {
            $.ajax({
                url: "http://localhost:9090/api/getgsshoparea",
                success: function (data) {
                    var html = template("areatpl", data);
                    $(".three").html(html);
                }
            });
        }
    });


    $(".two").on("click", "li", function () {
        var text = $(this).data("shop");
        $(".jd").html(text);
        $(this).addClass("on").siblings().removeClass("on");

        shopid = $(this).data("shopid");
        $.ajax({
            url: "http://localhost:9090/api/getgsproduct",
            data: {
                shopid: shopid || 0,
                areaid: areaid || 1,
            },
            success: function (data) {
                var html = template("lsttpl", data);
                $(".list").html(html);
                $(".xiala").removeClass("show");
            }
        })
    });


    $(".three").on("click", "li", function () {

        var area = $(this).data("area");
        area = area.substr(0, 2);
        $(".hb").html(area);

        $(this).addClass("on").siblings().removeClass("on");

        areaid = $(this).data("areaid");
        $.ajax({
            url: "http://localhost:9090/api/getgsproduct",
            data: {
                shopid: shopid || 0,
                areaid: areaid || 1,
            },
            success: function (data) {
                var html = template("lsttpl", data);
                $(".list").html(html);
                $(".la").removeClass("show");
            }
        });


        $.ajax({
            url: "http://localhost:9090/api/getgsproduct",
            data: {
                shopid: shopid || 0,
                areaid: areaid || 1,
            },
            success: function (data) {
                var html = template("lsttpl", data);
                $(".list").html(html);
                $(".xiala").removeClass("show");

            }
        })
    });


    $(".jg").on("click", function () {
        $(".xia").toggleClass("show").siblings().removeClass("show");
        $(".four").on("click", "li", function () {

            $(".xia").removeClass("show");
            $(".jg").html($(this).text());
        });
    });

})
;