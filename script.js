let itemNum = 0;
let indexNum = 0;
let costs = [55, 3.75, 3.75];
let total = 0;

$(document).ready(function () {
  $('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('#sidebar').removeClass('active');
    $('#sidebar2').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
  });
  $('#sidebarCollapse').on('click', function () {
    if(itemNum > 0) {
      // open sidebar
      $('#sidebar').addClass('active');
    } else {
      //open sidebar that says you have nothing in cart
      $("#sidebar2").addClass('active');
    }
    // fade in the overlay
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

$("#readMore").on('click', () => {
  if($("#more").hasClass("hidden")) {
    $("#readMore").html("Read Less");
  } else {
    $("#readMore").html("Read More");
  }
  $("#more").toggleClass("hidden");
});

$("#add1").on('click', () => {
  itemNum++;
  indexNum++;
  $(".badge-primary").removeClass("hidden");
  $(".badge-primary").html(itemNum);
  addToCart("Custom Gift Box", "Assorted Flavors", 0, "custom gift box.png");

  $("#add1").html("<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/80/white-heavy-check-mark_2705.png' style='width: 20px;'/>&nbsp&nbspAdded to Cart");
  $("#add1").css("background", "#2FC594");
  setTimeout(() => {
    $("#add1").html("+ Add to Cart");
    $("#add1").css("background", "#5DAD93");
  }, 3000);
})

$("#add2").on('click', () => {
  itemNum++;
  indexNum++;
  $(".badge-primary").removeClass("hidden");
  $(".badge-primary").html(itemNum);
  addToCart("Vanilla Earl Grey Macaron", "1 piece", 1, "vanilla.png");

  $("#add2").html("<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/80/white-heavy-check-mark_2705.png' style='width: 20px;'/>&nbsp&nbspAdded to Cart");
  $("#add2").css("background", "#2FC594");
  setTimeout(() => {
    $("#add2").html("+ Add to Cart");
    $("#add2").css("background", "#5DAD93");
  }, 3000);
})

$("#add3").on('click', () => {
  itemNum++;
  indexNum++;
  $(".badge-primary").removeClass("hidden");
  $(".badge-primary").html(itemNum);
  addToCart("Rose Macaron", "1 piece", 2, "rose.png");

  $("#add3").html("<img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/80/white-heavy-check-mark_2705.png' style='width: 20px;'/>&nbsp&nbspAdded to Cart");
  $("#add3").css("background", "#2FC594");
  setTimeout(() => {
    $("#add3").html("+ Add to Cart");
    $("#add3").css("background", "#5DAD93");
  }, 3000);
})

const addToCart = (name, desc, num, img) => {
  let dist = 19;
  if(num==1) {
    dist = 38
  }
  $("#items").append("<div class='miniBox' id='box"+indexNum+"'><table class='invisiTable'><tr><td style='padding-right: 16px; padding-top: 3px;'><img src='assets/" + img + "' style='width: 80px;'/></td><td style='width: 161px;'><h2 style='position: absolute; padding-top: "+dist+"px; font-size: 12px; line-height: 25px;'>" + desc + "</h2><h1 style='margin-bottom: "+(27+dist-19)+"px; font-size: 16px;'>" + name + "</h1><u class='remove' onclick='remove("+indexNum+","+num+");'>Remove</u></td><td style='padding-left: 3px; padding-top: 3px;'><h3 style='font-size: 12px; text-align: center;'>$" + costs[num].toFixed(2) + "</h3></td></tr></table></div>");

  total += costs[num];
  $("#total").html(total.toFixed(2));
}

const remove = (index, num) => {
  total -= costs[num];
  itemNum--;
  $(".badge-primary").html(itemNum);
  $("#box" + index).addClass("hidden");
  $("#total").html(total.toFixed(2));
  if(itemNum==0) {
    // hide sidebar
    $('#sidebar').removeClass('active');
    $('#sidebar2').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
    // hide badge
    $(".badge-primary").addClass("hidden");
  }
}
