/**
 * Fetches movie data from the API.
 */
function fetchMovieData() {
    const apiUrl = "https://dummyapi.online/api/movies";

    return fetch(apiUrl)
        .then((response) => {
            // Check for HTTP errors
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response
            return response.json();
        })
        .then((data) => {
            console.log("Movie data fetched successfully:", data);
            return data; // Pass data to the next `then` or caller
        })
        .catch((error) => {
            console.error("Error fetching movie data:", error);
            throw error; // Re-throw for higher-level error handling if needed
        });
}

// Usage
// fetchMovieData()
//     .then((movies) => {
//         // Process or display the movie data
//         console.log("Number of movies fetched:", movies.length);
//         movies.forEach((movie) => {
//             console.log(`Title: ${movie.movie}, Rating: ${movie.rating}`);
//         });
//     })
//     .catch((error) => {
//         // Handle errors gracefully
//         console.error("Failed to fetch movies:", error.message);
//     });
