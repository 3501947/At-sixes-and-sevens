/**
 * Created by z-ko on 2017/6/23.
 */
//获取导航数据
$(function () {
    var id = location.href.split("?")[1].split("=")[1];

    $.ajax({
        url: "http://localhost:9090/api/getcategorybyid",
        data: {
            categoryid: id,
        },
        success: function (data) {
            $(".xiangxi").html(data.result[0].category);
        }
    });

    var val = null;
    var page = null;
    var count = 1;
    $.ajax({
        url: "http://localhost:9090/api/getproductlist",
        data: {
            categoryid: id,
        },
        success: function (data) {
            var html = template("listtpl", data);
            $(".list_bot").append(html);

            page = Math.ceil(data.totalCount / data.pagesize);
            var arr = [];
            for (var i = 1; i <= page; i++) {
                arr.push(i);
            }

            var pagelst = template("pagetpl", arr);
            $(".select").html(pagelst);


            $(".select").change(function () {

                val = $(".select option:selected").val();
                count = val;

                $.ajax({
                    url: "http://localhost:9090/api/getproductlist",
                    data: {
                        categoryid: id,
                        pageid: val,
                    },
                    success: function (data) {
                        var html = template("listtpl", data);
                        $(".list_bot").html(html);
                    }
                });

            });


            $(".list_bot").on("click", ".duct", function () {
                var pid = $(this).data("pro");
                window.location.href = "product.html?id=" + pid;
            });
        }
    });


    $(".pre").on("click", function () {
        if (count > 1) {
            count--;
            $.ajax({
                url: "http://localhost:9090/api/getproductlist",
                data: {
                    categoryid: id,
                    pageid: count,
                },
                success: function (data) {
                    var html = template("listtpl", data);
                    $(".list_bot").html(html);
                }
            });
        }
        $(".select").val(count);
    });

    $(".bf").on("click", function () {
        if (count < page) {
            count++;
            $.ajax({
                url: "http://localhost:9090/api/getproductlist",
                data: {
                    categoryid: id,
                    pageid: count,
                },
                success: function (data) {
                    var html = template("listtpl", data);
                    $(".list_bot").html(html);
                }
            });
        }

        $(".select").val(count);
    });
});