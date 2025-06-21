$(document).ready(function () {
  let activeOverlay = null;

  // radio buttons for view option
  $("input[name='view-option']").on("change", function () {
    const viewOption = $(this).val();

    if (viewOption === "list") {
      $("#board-view").addClass("hide");
      $("#list-view").removeClass("hide");
    } else if (viewOption === "board") {
      $("#list-view").addClass("hide");
      $("#board-view").removeClass("hide");
    }
  });

  // add task
  $("#add-task-cta").on("click", function () {
    $("#set-task-overlay").removeClass("hide");
    activeOverlay = $("#set-task-overlay");
    $("body").addClass("overflow-hidden");
  });

  // close buttons inside overlays
  $(".close-button").on("click", function () {
    if (activeOverlay) {
      activeOverlay.addClass("hide");
      activeOverlay = null;
      $("body").removeClass("overflow-hidden");
    }
  });

  // open status dropdown
  $("#status-select").on("click", function () {
    $("#status-dropdown").toggleClass("hide");
  });

  // click a task
  $(".task-item").on("click", function () {
    $("#view-task-overlay").removeClass("hide");
    activeOverlay = $("#view-task-overlay");
    $("body").addClass("overflow-hidden");
  });

  // delete a task
  $("#delete-task-cta").on("click", function () {
    if (activeOverlay) {
      activeOverlay.addClass("hide");
      activeOverlay = null;
      $("body").removeClass("overflow-hidden");
    }

    $("#notification").addClass("show");
    setTimeout(function () {
      $("#notification").removeClass("show");
    }, 3000);
  });
});
