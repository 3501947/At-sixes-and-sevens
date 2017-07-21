/**
 * Created by z-ko on 2017/6/26.
 */
$(function () {
    $.ajax({
        url: "http://localhost:9090/api/getsitenav",
        success: function (data) {
            var html = template("contpl", data);
            $(".content").html(html);
        }
    });
});