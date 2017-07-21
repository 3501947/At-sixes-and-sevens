/**
 * Created by z-ko on 2017/6/25.
 */

$(function () {
    $(".list").on("click", "li", function () {
        var id = $(this).data("id");
        $.ajax({
            url: "http://localhost:9090/api/getdiscountproduct",
            data: {
                productid: id,
            },
            success: function (data) {
                var proid = data.result[0].productId;
                window.location.href = "discountproduct.html?id=" + proid;
            }
        });

    });


    var firstPage = 5;
    var count = 0;
    var num = 4;
    var arr = [];
    var scrollTop = 0;
    $.ajax({
        url: "http://localhost:9090/api/getinlanddiscount",
        success: function (data) {

            count = parseInt((data.result.length - 6) / 4);

            $.each(data.result, function (index, ele) {
                if (index <= firstPage) {
                    arr.push(ele);
                    var html = template("ftpl", arr);
                    $(".list").html(html);
                }
                if (index >= firstPage && index <= firstPage + num) {
                    var top = $(".list li").innerHeight();
                    $(window).on("scroll", function () {
                        scrollTop = $(window).scrollTop();
                        if (scrollTop >= top && scrollTop <= 600) {
                            if (arr[index] == ele) {
                                return false;
                            }
                            else {
                                arr.push(ele);
                                var html = template("ftpl", arr);
                                $(".list").html(html);
                            }
                        }
                    });
                }
                if (index >= firstPage && index <= firstPage + num * 6) {
                    $(window).on("scroll", function () {
                        scrollTop = $(window).scrollTop();
                        if (1000 <= scrollTop) {
                            if (arr[index] == ele) {
                                return false;
                            }
                            else {
                                arr.push(ele);
                                var html = template("ftpl", arr);
                                $(".list").html(html);
                            }
                        }
                    });
                }
                if (index >= firstPage && index <= firstPage + num * 2) {
                    $(window).on("scroll", function () {
                        scrollTop = $(window).scrollTop();
                        if (scrollTop >= 600 && 1000 >= scrollTop) {
                            if (arr[index] == ele) {
                                return false;
                            }
                            else {
                                arr.push(ele);
                                var html = template("ftpl", arr);
                                $(".list").html(html);
                            }
                        }
                    });
                }
            });
        }
    });
});
