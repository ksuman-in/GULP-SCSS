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

    // loader.show();
    // footer.hide();
    // header.find("li").css("pointer-events", "none");
    //
    // setTimeout(function() {
    //   $("#" + tabId + "-content").addClass("active");
    //   loader.hide();
    //   footer.show();
    //   header.find("li").css("pointer-events", "auto");
    // }, 400);

    if (width > 767) {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    } else {
      $("html, body").animate(
        { scrollTop: $("#sidebar").width() + 82 },
        "slow"
      );
    }

    // Progress bar
    if (tabId + "-content" === "tab-skills-content") {
      $(".react").animate({ width: "75%" }, 350);
      $(".redux").animate({ width: "70%" }, 350);
      $(".javascript").animate({ width: "75%" }, 350);
      $(".wordpress").animate({ width: "80%" }, 350);
      $(".bootstrap").animate({ width: "95%" }, 350);
      $(".css").animate({ width: "80%" }, 350);
      $(".html").animate({ width: "90%" }, 350);
      $(".communication").animate({ width: "80%" }, 350);
      $(".confidence").animate({ width: "100%" }, 350);
    } else {
      $(".react").animate({ width: "0%" }, 500);
      $(".redux").animate({ width: "0%" }, 500);
      $(".javascript").animate({ width: "0%" }, 500);
      $(".wordpress").animate({ width: "0%" }, 500);
      $(".bootstrap").animate({ width: "0%" }, 500);
      $(".css").animate({ width: "0%" }, 500);
      $(".html").animate({ width: "0%" }, 500);
      $(".communication").animate({ width: "0%" }, 500);
      $(".confidence").animate({ width: "0%" }, 500);
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

  $(".userName")
    .on("mouseenter", function() {
      $(this)
        .text("Suman Kumar")
        .addClass("hover-name");
    })
    .on("mouseleave", function() {
      $(this)
        .text("Kumar Suman")
        .removeClass("hover-name");
    });
});
