/**
 * Created bX z-ko on 2017/6/25.
 */

$(function () {
    $.ajax({
        url: "http://localhost:9090/api/getbaicaijiatitle",
        success: function (data) {
            var html = template("ultpl", data);
            $("#wrapper ul").html(html);
        }
    });

    $.ajax({
        url: "http://localhost:9090/api/getbaicaijiaproduct",
        data: {
            titleid: 0,
        },
        success: function (data) {
          console.log(data);
            var html = template("contpl", data);
            $(".list_bot").html(html);
            $("#wrapper li").children().eq(0).addClass("bd");

            var width = 0;
            $("#wrapper li").each(function (index, ele) {
                width += $(ele).innerWidth();
            });

            width += $('.img').innerWidth();
            $(".w").css("width", width);


        }
    });

    $("#wrapper").on("click", "li", function () {
        var id = $(this).data("id");
        $(this).children("a").addClass("bd");
        $(this).siblings().children("a").removeClass("bd");
        $.ajax({
            url: "http://localhost:9090/api/getbaicaijiaproduct",
            data: {
                titleid: id,
            },
            success: function (data) {
                var html = template("contpl", data);
                $(".list_bot").html(html);
            }
        });
    });

});

$(function () {

    var myScroll;

    function loaded() {
        myScroll = new IScroll('#wrapper', {
            eventPassthrough: true,
            scrollX: true,
            scrollY: false,
            preventDefault: false

        });
    }

    window.addEventListener("load", loaded)
});

$(function () {
    $(document).on("scroll", function () {
        var scrollTop = $(document).scrollTop();

        if (scrollTop > 600) {
            $(".fix").fadeIn().css("display", "block");
        }
        else {
            $(".fix").fadeOut();
            ;
        }
    });

    $(".fix").on("click", function () {
        $("html,body").animate({"scrollTop": 0}, 500);
    });

});
