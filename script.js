$(document).ready(function() {
  let s1, s2, s3 = false;
  $("#img1").click(function() {
    if (s1) {
      $("#slide1").hide(1500);
      s1 = false;
    }
    else {
      $("#slide1").show(1500);
      s1 = true;
    }
  });
  $("#img2").click(function() {
    if (s2) {
      $("#slide2").hide(1500);
      s2 = false;
    }
    else {
      $("#slide2").show(1500);
      s2 = true;
    }
  });
  $("#c").click(function() {
    $("#slide2").hide(1500);
  });
  $("#img3").click(function() {
    if (s3) {
      $("#slide3").hide(1500);
      s3 = false;
    }
    else {
      $("#slide3").show(1500);
      s3 = true;
    }
  });
  $("#img4").click(function() {
    
  });
  $("#img5").click(function() {
    
  });
  $("#img6").click(function() {
    
  });
  $("#img7").click(function() {
    
  });
  $("#img8").click(function() {
    
  });
  $("#img9").click(function() {
    
  });
});
