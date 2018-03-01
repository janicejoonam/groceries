$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var grocery1Input = $("input#grocery1").val();
    var grocery2Input = $("input#grocery2").val();
    var grocery3Input = $("input#grocery3").val();
    var grocery4Input = $("input#grocery4").val();
    var initialLists = [grocery1Input, grocery2Input, grocery3Input, grocery4Input];
    initialLists.sort();
    var sortLists = initialLists.map(function(initialList) {
      return initialList.toUpperCase();
    });

    $(".grocery1").text(sortLists[0]);
    $(".grocery2").text(sortLists[1]);
    $(".grocery3").text(sortLists[2]);
    $(".grocery4").text(sortLists[3]);
    $("#grocery-list").show();

    event.preventDefault();
  });
});
