/**
 * Created by z-ko on 2017/6/24.
 */
//ajax获取产品列表数据
$(function () {

    var val = null;
    var page = null;
    var count = 1;

    $.ajax({
        url: "http://localhost:9090/api/getmoneyctrl",
        type: "get",
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
                    url: "http://localhost:9090/api/getmoneyctrl",
                    data: {
                        pageid: val,
                    },
                    success: function (data) {
                        var html = template("listtpl", data);
                        $(".list_bot").html(html);
                    }
                });

            });

        }

    });

    $(".pre").on("click", function () {
        if (count > 1) {
            count--;
            $.ajax({
                url: "http://localhost:9090/api/getmoneyctrl",
                data: {
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
                url: "http://localhost:9090/api/getmoneyctrl",
                data: {
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


    $(".list_bot").on("click", ".zhekou", function () {
        var pid = $(this).data("zk");
        window.location.href = "moneyproduct.html?id=" + pid;
    });
});
