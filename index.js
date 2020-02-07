$(function() {
  $("#insert").click(function() {
    let str= prompt("何か入力してください！")
    $("#dom").append($("<li>").text(str));
  });
  $(".add").on('click' , function() {
    $(".ar-content").addClass("ar-content-bg");
  });
  $(".remove").on('click' , function() {
    $(".ar-content").removeClass("ar-content-bg");
  });
  $(".show-content").on('click' , function() {
    $(".ar-content").show();
  });
  $(".hide-content").on('click' , function() {
    $(".ar-content").hide();
  });
  $("#modal").dialog({ autoOpen: false, close: function() {
        $('#insert,.add,.remove,.show-content,.hide-content').prop('disabled', false);
      }
  });
  $("#openModal").click(function() {
    $("#modal").dialog("open");
    $('#insert,.add,.remove,.show-content,.hide-content').prop('disabled', true);
  });
});
