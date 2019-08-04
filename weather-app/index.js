//assignment variables
const paths = document.querySelectorAll(".mieszkanie");
const urlBooked = "https://bookeddata-42feb.firebaseio.com/floors.json";
const $tooltip = $("<div class=tooltip-map></div>");

//if something will go wrong with downloading data, tooltip will show this html
$tooltip.html(
  `<div class="tooltip-img"></div><h4>Restart website</h4><h5>please</h5><p></p>`
);
$tooltip.css({ display: "none" });

//function responsible for seting tooltip near cursor
function setTooltipPos(x, y) {
  $tooltip.css({ left: `${x + 20}px` });
  $tooltip.css({ top: `${y + 20}px` });
  if (
    parseInt($tooltip.css("left"), 10) + $tooltip.width() >
    $(window).innerWidth()
  ) {
    $tooltip.css({ left: `${x - $tooltip.width() - 60}px` });
  }
  if (
    parseInt($tooltip.css("top"), 10) + $tooltip.height() >
    $(window).innerHeight()
  ) {
    $tooltip.css({ top: `${y - $tooltip.height() - 0}px` });
  }
}

$("body").append($tooltip);
$.ajax({
  method: "GET",
  url: urlBooked,
  dataType: "JSON"
}).done(function(res) {
  let i = 0;
  for (key in res) {
    const $floorAccomodation = $(`.floor${i}`);
    const tab = res[key];
    const keySaved = key;

    for (subKey in tab) {
      const $accomodation = $floorAccomodation.find(
        `#mieszkanie${subKey} path`
      );
      //if its not taken
      if (tab[subKey].status == 0) {
        //set colors, tooltips, actions to buttons
        $accomodation.addClass("free");
        $accomodation.css({ fill: "rgb(90, 216, 96)" });
        const subKeySaved = subKey;
        $accomodation.mouseenter(function(e) {
          setTooltipPos(e.pageX, e.pageY);
          $tooltip
            .find("h4")
            .html(
              "Price: " +
                tab[subKeySaved].price +
                "<br>Price per meter: " +
                tab[subKeySaved].priceMeter
            );
          $tooltip.find("h5").html("Direction: " + tab[subKeySaved].direction);
          $tooltip.find("p").html(tab[subKeySaved].description);
          $tooltip.css({ display: "block" });
          $tooltip
            .find(".tooltip-img")
            .css("background-image", tab[subKeySaved].image);
          $accomodation.css({ fill: "rgb(67, 161, 71)" });
        });

        $accomodation.mouseout(function() {
          $accomodation.css({ fill: "rgb(90, 216, 96)" });
          $tooltip.css({ display: "none" });
        });
        $accomodation.mousemove(function(e) {
          setTooltipPos(e.pageX, e.pageY);
        });
        $accomodation.click(function(e) {
          $(".imageModal").css("background-image", tab[subKeySaved].image);
          $(".buttonModalOrder").css({ display: "block" });
          $(".buttonModalSend").on("click", function(event) {
            var realKey = keySaved.match(/\d/g);
            realKey = realKey.join("");
            var patch = {
              status: 1,
              fullName: $("#inputName").val(),
              email: $("#inputEmail").val(),
              number: $("#inputNumber").val(),
              message: $("#inputMessage").val()
            };
            //all inputs must have some value when ordering
            if (
              $("#inputName").val() == 0 ||
              $("#inputEmail").val() == 0 ||
              $("#inputNumber").val() == 0 ||
              $("#inputMessage").val() == 0
            ) {
              event.preventDefault();
              $(".notation").text("All fields must be filled");
              $(".notation").css("background-color", "rgb(255, 51, 51)");
            } else {
              $.ajax({
                type: "PATCH",
                url: `https://bookeddata-42feb.firebaseio.com/floors/floor${realKey}/${subKeySaved}.json`,
                data: JSON.stringify(patch),
                processData: false,
                contentType: "application/merge-patch+json"
              });
              event.preventDefault();
              $(".buttonModalSend").off("click");
              $(".notation").text(
                "Your Order has been registered, website will automaticaly reload"
              );
              $(".notation").css("background-color", "rgb(51, 133, 255)");
              console.log(`Name = ${$("#inputName").val()}`);
              setTimeout(function() {
                location.reload();
              }, 3000);
            }
          });
          //setting properties to modals and expanding form
          $(".form-style-8").css({ display: "block" });
          $(".modalTopText")
            .find("h3")
            .html(tab[subKeySaved].price);
          $(".modalTopText")
            .find("p")
            .html(tab[subKeySaved].description);
          $(".divButtonModalOrder").html(" ");
          $("#ex1").modal();
          $(".imageModal").on("click", function() {
            $(".imageModalZoom").css(
              "background-image",
              tab[subKeySaved].image
            );
            $("#ex2").modal({ closeExisting: false });
          });
        });
      }
      //if acomodation is taken
      if (tab[subKey].status == 1) {
        $accomodation.addClass("occupied");
        $accomodation.css({ fill: "rgb(248, 164, 167)" });
        const subKeySaved = subKey;
        $accomodation.mouseenter(function(e) {
          $tooltip.find("h4").html("SOLD");
          $tooltip.find("h5").html("Direction: " + tab[subKeySaved].direction);
          $tooltip.find("p").html(tab[subKeySaved].description);
          $accomodation.css({ fill: "rgb(241, 73, 80)" });
          setTooltipPos(e.pageX, e.pageY);
          $tooltip.css({ display: "block" });
          $tooltip
            .find(".tooltip-img")
            .css("background-image", tab[subKeySaved].image);
        });
        $accomodation.mousemove(function(e) {
          setTooltipPos(e.pageX, e.pageY);
        });
        $accomodation.mouseout(function(e) {
          $accomodation.css({ fill: "rgb(248, 164, 167)" });
          $tooltip.css({ display: "none" });
        });
        $accomodation.click(function(e) {
          $(".imageModal").css("background-image", tab[subKeySaved].image);
          $(".modalTopText")
            .find("h3")
            .html("SOLD");
          $(".modalTopText")
            .find("p")
            .html(tab[subKeySaved].description);
          $(".divButtonModalOrder").html("Its already taken, try another one.");
          $(".buttonModalOrder").css({ display: "none" });
          $(".form-style-8").css({ display: "none" });
          $("#ex1").modal();
          $(".imageModal").on("click", function() {
            $(".imageModalZoom").css(
              "background-image",
              tab[subKeySaved].image
            );
            $("#ex2").modal({ closeExisting: false });
          });
        });
      }
    }
    i = i + 1;
  }
});

//showing first floor
$(`.floor${0}`).css({ display: "block" });

//giving actions to each button to show actual floor
$(".buttons button").each(function(i) {
  $(this).on("click", function() {
    $("[class^=floor]").css({ display: "none" });
    $(`.floor${i}`).css({ display: "block" });
    $(".actualFloor").text(i + 1);
  });
});

//when modal is open give him appropriate size
$("#ex1").on($.modal.OPEN, function() {
  if ($(window).width() > 874) {
    $("body").css("overflow-y", "auto");
    $(".modal").css("max-width", "800px");
    $(".modal").css("width", "800px");
  } else if ($(window).width() > 768) {
    $("body").css("overflow-y", "auto");
    $(".modal").css("max-width", "700px");
    $(".modal").css("width", "700px");
  } else if ($(window).width() > 670) {
    $("body").css("overflow-y", "auto");
    $(".modal").css("max-width", "600px");
    $(".modal").css("width", "600px");
  } else if ($(window).width() > 570) {
    $("body").css("overflow-y", "auto");
    $(".modal").css("max-width", "500px");
    $(".modal").css("width", "500px");
  } else if ($(window).width() > 400) {
    $("body").css("overflow-y", "auto");
    $(".modal").css("max-width", "350px");
    $(".modal").css("width", "350px");
  } else if ($(window).width() > 0) {
    $("body").css("overflow-y", "hidden");
    $(".modal").css("max-width", "90%");
    $(".modal").css("width", "90%");
    $(".modalTop").css("flex-direction", "column");
    $(".modalTop").css("justify-content", "center");
    $(".modalTop").css("width", "100%");
    $(".imageModal").css("width", "100%");
    $(".modalTopText").css("width", "100%");
  }
});

//clear all inputs when modal is closed
$("#ex1").on($.modal.CLOSE, function() {
  content.style.maxHeight = null;
  coll.innerText = "Order";
  $(".notation").text("Order Your picked flat");
  $(".notation").css("background-color", "#1d4619");
  $("#inputName").val("");
  $("#inputEmail").val("");
  $("#inputNumber").val("");
  $("#inputMessage").val("");
  $(".buttonModalSend").off("click");
  $(".imageModal").off();
});

//clear inputs when second modal is opened
$("#ex2").on($.modal.CLOSE, function() {
  content.style.maxHeight = null;
  coll.innerText = "Order";
});
$("#ex2").on($.modal.OPEN, function() {
  $("body").css("overflow-y", "auto");
});

var coll = document.getElementById("buttonModalOrder");
var content = document.getElementById("form-style-8");

//if developing modal
coll.addEventListener("click", function() {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    coll.innerText = "Order";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    coll.innerText = "Changed Mind?";
  }
});
