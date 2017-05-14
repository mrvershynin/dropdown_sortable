$(document).ready(function() {

/*You can add*/
  $('.ui.dropdown').dropdown({
    onChange: function (value, text, $selectedItem) {
      console.log(value);
    },
    forceSelection: false, 
    selectOnKeydown: false, 
    showOnFocus: true,
    hideAdditions: false,
    on: "hover"
  });

  $('#clearValues').click(function() {
    $('.ui.dropdown').dropdown("clear");
  });

  $('#setValues').click(function() {
    $('.ui.dropdown').dropdown("set selected", [
        "angular", "css", "design", "ember", "html", "ia", "javascript",
        "mech", "meteor", "node", "plumbing", "python", "rails", "react",
        "repair", "ruby", "ui", "ux"
    ]);
  });    

/*You can not add*/
$('.ui.dropdown.add').dropdown({
    onChange: function (value, text, $selectedItem) {
      console.log(value);
    },
    forceSelection: false, 
    selectOnKeydown: false, 
    showOnFocus: true,
    allowAdditions: true,
    hideAdditions: false,
    on: "hover"
  });

  $('#clearValues').click(function() {
    $('.ui.dropdown').dropdown("clear");
  });

  $('#setValues').click(function() {
    $('.ui.dropdown').dropdown("set selected", [
        "angular", "css", "design", "ember", "html", "ia", "javascript",
        "mech", "meteor", "node", "plumbing", "python", "rails", "react",
        "repair", "ruby", "ui", "ux"
    ]);
  }); 
  
});