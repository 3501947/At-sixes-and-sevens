/**
 * Created by z-ko on 2017/6/25.
 */

$(function () {
    var id = location.href.split("?")[1].split("=")[1];

    $.ajax({
        url: "http://localhost:9090/api/getdiscountproduct",
        data: {
            productid: id,
        },
        success: function (data) {
            var html = template("proltp", data);
            $(".title").html(html);
            var xml = template("plltp", data);
            $(".new").html(xml);
        }
    });
});