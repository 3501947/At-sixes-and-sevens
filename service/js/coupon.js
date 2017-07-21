/**
 * Created by z-ko on 2017/6/25.
 */
$(function () {
    $.ajax({
        url: "http://localhost:9090/api/getcoupon",
        success: function (data) {
            var html = template("contpl", data);
            $(".con").html(html);
        }
    });

    $(".con").on("click", ".quan", function () {
        var pid = $(this).data("id");
        window.location.href = "getcouponproduct.html?id=" + pid;
    });
});