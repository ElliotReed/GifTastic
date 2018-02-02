
// Initial array of animals
var animals = [];

// Function for displaying movie data
function renderButtons() {
  $('#animalButtons').empty();
  // Loop through the array and generate buttons 
  for (i = 0; i < animals.length; i++) {
    var newButton = $("<button>");
    newButton.addClass("animalButtons btn");
    newButton.attr("data-name", animals[i]);
    newButton.text(animals[i]);
    $("#animalButtons").append(newButton);
  };
}

// Render buttons on page load
renderButtons();

// Add addAnimal click event
$("#addAnimal").on("click", function() {
    event.preventDefault();
    // Get the user input
    var newAnimal = $("#animalInput").val();
    // Clear the input.
    $("#animalInput").val("");
    // Add to the array
    animals.push(newAnimal);
    console.log(animals);
    $("#animalInput").text("");
    // Render buttons
    renderButtons();
});

// Click event for animal buttons
$(document.body).on("click", ".animalButtons", function() {
    var clickedAnimal = $(this).attr("data-name");
    $("#animals").empty();
    // Display gifs
    displayGifs(clickedAnimal);
});

// Display the images
function displayGifs(clickedAnimal) {
// Get the images from Giphy
  // Create the queryURL
  var APIKey = "&api_key=" + "aPXKMDgpfICV4wcHOcnFcWS0Tqgr0w8C";
  var animal = "search?q=" + clickedAnimal;
  var APICall = "https://api.giphy.com/v1/gifs/"
  var limit = "&limit=" + "10";

  var queryURL = APICall + animal + limit + APIKey;
  $(".loader").show();
  // Make the ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    $(".loader").hide();
    // Create a variable to hold the information
    var results = response.data;
    // Add all to the html

    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
      var animalDiv = $("<div>");
      animalDiv.addClass("imageContainer");
      var ratingP = $("<p>");
      ratingP.text("Rating: " + results[i].rating);
      // var image = $("<img src=" + results[i].images.fixed_height_still.url + "/>");
      var animalImage = $("<img>");
      animalImage.addClass("clickable");

      // Set the image's src to results[i]'s fixed_height.url.
      animalImage.attr("src", results[i].images.fixed_height_still.url);
      animalImage.attr("data-still", results[i].images.fixed_height_still.url);
      animalImage.attr("data-animated", results[i].images.fixed_height.url);   
      animalImage.attr('data-state', "still");  
      $(animalDiv).append(animalImage, ratingP); 
      $("#animals").append(animalDiv);  
    };

  });
}

// Gif click event
$(document.body).on("click", ".clickable", function() {
       var state = $(this).attr('data-state');

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animated"));
          // var animatedSrc = $(this).attr("data-animate");
          $(this).attr('data-state',"animated");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr('data-state',"still");
        }
});
      
         
          

