
// Initial array of animals
var animals = ["Bird", "cat", "Mr. Nobody", "The Lion King"];

// Function for displaying movie data
function renderButtons() {
  $('#animalButtons').empty();
  // Loop through the array and generate buttons 
  for (i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    var newButton = $("<button>");
    newButton.addClass("animalButtons");
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

    // Render buttons
    renderButtons();
});

// Click event for animal buttons
$(".animalButtons").on("click", function() {
    var clickedAnimal = $(this).attr("data-name");
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

  // Make the ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);


  });
}

  <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">

// Gif click event
function $(".gif").on("click", function() {
        // STEP ONE: study the html above.
        // Look at all the data attributes.
        // Run the file in the browser. Look at the images.

        // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

        // STEP TWO: make a variable named state and then store the image's data-state into it.
        // Use the .attr() method for this.

       var state = $(this).attr('data-state');

        // CODE GOES HERE

        // =============================================

        // STEP THREE: Check if the variable state is equal to 'still',
        // then update the src attribute of this image to it's data-animate value,
        // and update the data-state attribute to 'animate'.

        // If state is equal to 'animate', then update the src attribute of this
        // image to it's data-still value and update the data-state attribute to 'still'
        // ============== FILL IN CODE HERE FOR STEP THREE =========================

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          // var animatedSrc = $(this).attr("data-animate");
          $(this).attr('data-state',"animated");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr('data-state',"still");
        }

      
              // Creating an AJAX call for the specific movie button being clicked
              $.ajax({
                url: queryURL,
                method: "GET"
              }).done(function(response) {
      
      
                $('#test').html('hello')
                // Creating a div to hold the movie
                var movieDiv = $("<div class='movie'>");
      
                // Storing the rating data
                var rating = response.Rated;
      
                // Creating an element to have the rating displayed
                var pOne = $("<p>").text("Rating: " + rating);
      
                // Displaying the rating
                movieDiv.append(pOne);
      
                // Storing the release year
                var released = response.Released;
      
                // Creating an element to hold the release year
                var pTwo = $("<p>").text("Released: " + released);
      
                // Displaying the release year
                movieDiv.append(pTwo);
      
                // Storing the plot
                var plot = response.Plot;
      
                // Creating an element to hold the plot
                var pThree = $("<p>").text("Plot: " + plot);
      
                // Appending the plot
                movieDiv.append(pThree);
      
                // Retrieving the URL for the image
                var imgURL = response.Poster;
      
                // Creating an element to hold the image
                var image = $("<img>").attr("src", imgURL);
      
                // Appending the image
                movieDiv.append(image);
      
                // Putting the entire movie above the previous movies
                $("#movies-view").prepend(movieDiv);
              });
      
            }
      

          

