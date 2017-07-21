/**
 * Created by z-ko on 2017/6/24.
 */
$(function () {
    var id = location.href.split("?")[1].split("=")[1];
    var index;
    $.ajax({
        url: "http://localhost:9090/api/getproduct",
        data: {
            productid: id,
        },
        success: function (data) {

            $(".juti").html(data.result[0].productName);
            index = data.result[0].categoryId;

            var html = template("mtpl", data);
            $(".main").html(html);

            $(".jtop").html(data.result[0].bjShop);

            $.ajax({
                url: "http://localhost:9090/api/getcategorybyid",
                data: {
                    categoryid: index,
                },
                success: function (data) {
                    $(".xiangxi a").html(data.result[0].category).attr("href", 'list.html?id=' + index);
                }
            });
        }
    });

    $.ajax({
        url: "http://localhost:9090/api/getproductcom",
        data:{
            productid: id,
        },
        success: function (data) {
            var html = template("pltpl", data);
            $(".plun").html(html);
        }
    });
});