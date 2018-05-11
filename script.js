$(document).ready(function() {
    let s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14 = false;
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
        if (s4) {
            $("#slide4").hide(1500);
            s4 = false;
          }
          else {
            $("#slide4").show(1500);
            s4 = true;
          }
    });
    $("#img5").click(function() {
        if (s5) {
            $("#slide5").hide(1500);
            s5 = false;
          }
          else {
            $("#slide5").show(1500);
            s5 = true;
          }
    });
    $("#c1").click(function() {
        $("#slide5").hide(1500);
    });
    
    $("#img6").click(function() {
        if (s6) {
            $("#slide6").hide(1500);
            s6 = false;
          }
          else {
            $("#slide6").show(1500);
            s6 = true;
          }
    });
    $("#img7").click(function() {
      
    });
    $("#img8").click(function() {
      
    });
    $("#img9").click(function() {
      
    });
    $("#img10").click(function() {
      
    });
    $("#img11").click(function() {
      
    });
    $("#img12").click(function() {
      
    });
    $("#img13").click(function() {
      
    });
    $("#img14").click(function() {
      
    });
  });