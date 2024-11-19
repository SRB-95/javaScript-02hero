/**
 * Fetches movie data from the API.
 */
async function fetchMovieData() {
    const apiUrl = "https://dummyapi.online/api/movies";

    try {
        console.log("Fetching movie data...");
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Movie data fetched successfully.");
        return data;
    } catch (error) {
        console.error("Error fetching movie data:", error);
        throw error; // Re-throw for higher-level handling
    }
}

/**
 * Function to fetch and process movie data.
 * Handles fetching and displaying movie data in a structured way.
 */
async function displayMovies() {
    try {
        const movies = await fetchMovieData();
        console.log("List of movies:", movies);
    } catch (error) {
        console.error("Failed to fetch movies:", error.message);
    }
}

// Call the displayMovies function
// displayMovies();
