function init() {
  $("dt").click(function() {
    var text = $(this).children(".plus");
    if (text.length) {
      $(this).next("dd").slideToggle();
      if (text.text() == "+") {
        text.text("-");
      }
      else {
        text.text("+");
      }
    }
  });
  $(".showline").click(function() {
    var id = "li"+$(this).attr("id");
    $( "#"+ id).dialog({height: 440,modal: true, width: 600, title: "Source code"});
    return false;
  });
}
$(document).ready(init);