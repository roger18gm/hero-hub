
// function that takes care of sending user query to search result page

export const handleSearchQuery = () => {

    const searchSubmitBtn = document.querySelector(".search-submit-btn");
    const searchInputField = document.querySelector(".search-input");
    
    const searchButtonClick = () => {
        const searchItem = searchInputField.value.trim();
    
        // place search into search.html? search param
        if (searchItem) {
            // Construct the URL with the search term as a parameter
            const searchUrl = `search.html?query=${encodeURIComponent(searchItem)}`;

            // Redirect to the search results page
            window.location.href = searchUrl;
        } else {
            alert('Please enter a search term.'); // Or handle empty input as desired
        }
    }

    // Add event listener for clicking submit and Enter key press in the input field
    searchSubmitBtn.addEventListener("click", searchButtonClick);
    searchInputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            searchButtonClick();
        }
    });
}
