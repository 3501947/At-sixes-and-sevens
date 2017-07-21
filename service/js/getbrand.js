/**
 * Created by z-ko on 2017/6/26.
 */
$(function () {
  var id = location.href.split("?")[1].split("=")[1];

  $.ajax({
    url: "http://localhost:9090/api/getbrand",
    data: {
      brandtitleid: id,
    },
    success: function (data) {
      var html = template("titletpl", data);
      $(".bd").append(html);
      var lid = data.result[0].brandTitleId;
      $.ajax({
        url: "http://localhost:9090/api/getbrandtitle",
        success: function (data) {
          $.each(data.result, function (index, ele) {
            if (ele.brandTitleId == lid) {
              var arr = ele.brandTitle.split("");
              var newArr = [];
              $.each(arr, function (index, ele) {
                  if (index < arr.length - 4) {
                      newArr.push(ele);
                  }
              })
              var text = newArr.join("");
              $(".pai p").html(text + "哪个牌子好");
              $(".xiangxi a").html(text + "哪个牌子好");
              $(".hang p").html(text + "销量排行");
              $(".lun p").html(text + "最新评论");
            }
          });
        }
      });
    }
  });

  $.ajax({
    url: "http://localhost:9090/api/getbrandproductlist",
    data: {
      brandtitleid: id,
    },
    success: function (data) {
      var html = template("listtpl", data);
      $(".list_bot").html(html);
      if (data.result.length > 0) {
        var pid = $(".list_bot li").eq(0).data("pro");
        var img = data.result[0].productImg;
        var pname = data.result[0].productName;

        $.ajax({
          url: "http://localhost:9090/api/getproductcom",
          data: {
            productid: pid,
          },
          success: function (data) {
            data.result.img = img;
            data.result.name = pname;
            var xml = template("lilitpl", data.result);
            $(".ttt").append(xml);
          }
        });
      }
    }
  });


  $(".bd").on("click", "li", function () {
    var id = $(this).data("id");
    window.location.href = "list.html?id=" + id;
  });

  $(".list_bot").on("click", "li", function () {
    var id = $(this).data("pro");
    window.location.href = "product.html?id=" + id;
  })
})