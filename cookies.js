// Settig a Cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    // date.setTime(date.getTime() + minutes * 60 * 1000); // Convert minutes to milliseconds
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Getting a Cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null; // Cookie not found
}

// Deleting a Cookie
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Example Usage
// setCookie("user", "JohnDoe", 7);  // Set cookie for 7 days
// console.log(getCookie("user"));   // Get cookie
// deleteCookie("user");             // Delete cookie
// console.log(getCookie("user"));   // Check if deleted