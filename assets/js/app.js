
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

// Display the images
function displayGifs() {
// Get the images from Giphy
  // Create the queryURL
  var APIKey = "&api_key=" + "aPXKMDgpfICV4wcHOcnFcWS0Tqgr0w8C";
  var animal = "search?q=" + $(this).attr("data-name");
  var APICall = "https://api.giphy.com/v1/gifs/"
  var limit = "&limit=" + "10";

  var queryURL = APICall + animal + limit + APIKey;

  // Make the ajax call
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function() {

  });
}



            // displayMovieInfo function re-renders the HTML to display the appropriate content
            function displayMovieInfo() {
      
              var movie = $(this).attr("data-name");
              var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
      
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
      
    
            // This function handles events where a movie button is clicked
            $("#add-movie").on("click", function(event) {
              event.preventDefault();
              // This line grabs the input from the textbox
              var movie = $("#movie-input").val().trim();
      
              // Adding movie from the textbox to our array
              movies.push(movie);
      
              // Calling renderButtons which handles the processing of our movie array
              renderButtons();
            });
      
            // Adding a click event listener to all elements with a class of "movie"
            $(document).on("click", ".movie", displayMovieInfo);
      
            // Calling the renderButtons function to display the intial buttons
            renderButtons();
          

