$(function () {
  $(".form").on("submit", (event) => {
    event.preventDefault();

    newBurger = {
      burger_name: $(".burgerName").val().trim(),
    }
    console.log(newBurger);
    $.ajax('/api/burgers', {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("Burger ready to be devoured");
      location.reload();
    });
  });

  $(".devour").on("click", function (event) {
    console.log($(this));
    var id = $(this).data('id');
    console.log(id);
    $.ajax('/api/burgers/' + id, {
      type: "PUT",
      data: id,
    }).then(() => {
      console.log("Burger Devoured!");
      location.reload();
    })
  });
});