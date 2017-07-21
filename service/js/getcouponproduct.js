/**
 * Created by z-ko on 2017/6/25.
 */

$(function () {
    var id = location.href.split("?")[1].split("=")[1];
    var tt = null;
    $.ajax({
        url: "http://localhost:9090/api/getcouponproduct",
        data: {
            couponid: id,
        },
        success: function (data) {
            var html = template("contpl", data);
            $(".con").html(html);


            var xml = template("swtpl", data);
            $(".swiper-wrapper").html(xml);

            tt = data.result[0].couponId;
        }
    });

    $.ajax({
        url: "http://localhost:9090/api/getcoupon",
        data: {
            couponid: tt,
        },
        success: function (data) {
            $.each(data.result, function (index, ele) {
                if (ele.couponId == id) {
                    $(".mmm_header h3").html(ele.couponTitle + "优惠券");
                }
            });
        }
    });
});