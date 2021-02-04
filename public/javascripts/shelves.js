
// functions here:
const shelfData = async () => {
    const the_response = await fetch("http://localhost:8080/api/shelves");
    const data = await the_response.json();
    return data;
}


// selectors here
const shelfContainer = document.querySelector(".shelves");

// DOM window listener here:
window.addEventListener("DOMContentLoaded", async (event) => {

    const result = await shelfData();
    result.forEach(eachObj => {
        const nestedDiv = document.createElement("div");
        nestedDiv.innerHTML = eachObj.type;
        shelfContainer.appendChild(nestedDiv);
    });


});
