$(document).ready(function() {
  var width = $(window).width();
  var loader = $(".loader");
  var header = $(".header");
  var footer = $(".footer");

  header.on("click", "li", function(event) {
    var tabId = $(this).attr("id");
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");

    $(".tabs-infoblock").removeClass("active");
    $("#" + tabId + "-content").addClass("active");
    if (width > 767) {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    } else {
      $("html, body").animate(
        { scrollTop: $("#sidebar").width() + 212 },
        "slow"
      );
    }

    // Progress bar
    if (tabId + "-content" === "tab-skills-content") {
      $(".react").animate({ width: "75%" }, 350);
      $(".redux").animate({ width: "70%" }, 350);
      $(".javascript").animate({ width: "75%" }, 350);
      $(".sketch").animate({ width: "40%" }, 350);
      $(".wordpress").animate({ width: "80%" }, 350);
      $(".bootstrap").animate({ width: "85%" }, 350);
      $(".css").animate({ width: "80%" }, 350);
      $(".html").animate({ width: "85%" }, 350);
      $(".communication").animate({ width: "80%" }, 350);
      $(".confidence").animate({ width: "100%" }, 350);
    } else {
      $(".react").animate({ width: "0%" });
      $(".redux").animate({ width: "0%" });
      $(".javascript").animate({ width: "0%" });
      $(".sketch").animate({ width: "0%" });
      $(".wordpress").animate({ width: "0%" });
      $(".bootstrap").animate({ width: "0%" });
      $(".css").animate({ width: "0%" });
      $(".html").animate({ width: "0%" });
      $(".communication").animate({ width: "0%" });
      $(".confidence").animate({ width: "0%" });
    }

    event.preventDefault();
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // progress bar javascript

  // social account
  $(".trigger").click(function() {
    $(".menu").toggleClass("active");
  });

  var year = new Date();

  var d = year.getDate().toString();
  var m = year.getMonth();
  // alert(d+"/"+m+"/");
  $(".year").html(year.getFullYear());
});
