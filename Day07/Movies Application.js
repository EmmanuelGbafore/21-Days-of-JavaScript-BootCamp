// Movie application using objects and functions

// Movie object constructor
function Movie(title, director, releaseYear) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
  }
  
  // Movie application object
  const movieApp = {
    movies: [],
  
    // Function to add a movie
    addMovie: function(title, director, releaseYear) {
      const newMovie = new Movie(title, director, releaseYear);
      this.movies.push(newMovie);
      console.log(`${newMovie.title} added to the movie list.`);
    },
  
    // Function to delete a movie
    deleteMovie: function(title) {
      const index = this.movies.findIndex(movie => movie.title === title);
      if (index !== -1) {
        const deletedMovie = this.movies.splice(index, 1)[0];
        console.log(`${deletedMovie.title} deleted from the movie list.`);
      } else {
        console.log(`Movie with title "${title}" not found.`);
      }
    },
  
    // Function to display all movies
    displayMovies: function() {
      if (this.movies.length === 0) {
        console.log("No movies in the list.");
      } else {
        console.log("Movies in the list:");
        this.movies.forEach(movie => {
          console.log(`${movie.title} - ${movie.director} (${movie.releaseYear})`);
        });
      }
    }
  };
  
  // Example usage
  movieApp.displayMovies(); // No movies in the list.
  
  movieApp.addMovie("Hard Target", "John Woo", 1993);
  movieApp.addMovie("Salt", "Philip Noyce", 2010);
  movieApp.addMovie("The Dark Knight", "Christopher Nolan", 2008);
  
  movieApp.displayMovies();
  // Movies in the list:
  // Hard Target - John Woo (1993)
  // Salt - Philip Noyce (2010)
  // The Dark Knight - Christopher Nolan (2008)
  
  movieApp.deleteMovie("Salt");
  
  movieApp.displayMovies();
  // Movies in the list:
  // Hard Target - John Woo (1993)
  // The Dark Knight - Christopher Nolan (2008)
  