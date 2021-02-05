// NEED TO FIX


// functions here:
// gets the current users shelf data for html rendering
const shelfData = async () => {
    const the_response = await fetch(`http://localhost:8080/api/shelves`);
    const data = await the_response.json();
    return data;
}


// checks if a type has any podcasts in its array of podcasts
const checkArray = (the_array) => {
    if (the_array.length === 0){
        return 'There are no podcasts in this shelf.'
    }
}


// checks if what is passed in is undefined
const makeDecision = (checked_thing, the_array, type_div) => {
    if (checked_thing === undefined){
        // if it is undefined then loop through the array and put each items content to html
        const unordered_list = document.createElement('ul');

        the_array.forEach(eachItem => {
            const list_item = document.createElement('li');
            list_item.innerText = eachItem.name;
            unordered_list.appendChild(list_item);
        });

        type_div.appendChild(unordered_list)


    } else {
        // put the checked_thing in html

    }
}






// selectors here
const shelfContainer = document.querySelector(".shelves");




// DOM window listener here:
window.addEventListener("DOMContentLoaded", async (event) => {


    const result = await shelfData();
    console.log(result);

    // can I wrap all of this in a function???
    const currentDiv = document.createElement("div");
    const mehDiv = document.createElement("div");
    const radarDiv = document.createElement("div");
    const thumbsDownDiv = document.createElement("div");
    const thumbsUpDiv = document.createElement("div");

    // the types here:
    const current_type = result.current_shelf.type;
    const meh_type = result.meh.type;
    const radar_type = result.radar.type;
    const thumbs_down_type = result.thumbs_down.type;
    const thumbs_up_type = result.thumbs_up.type;

    currentDiv.innerHTML = current_type;
    mehDiv.innerHTML = meh_type;
    radarDiv.innerHTML = radar_type;
    thumbsDownDiv.innerHTML = thumbs_down_type;
    thumbsUpDiv.innerHTML = thumbs_up_type;


    // all of the Podcasts arrays here:
    const current_podcasts_array = result.current_shelf.Podcasts;
    const meh_podcasts_array = result.meh.Podcasts;
    const radar_podcasts_array = result.radar.Podcasts;
    const downThumb_podcasts_array = result.thumbs_down.Podcasts;
    const upThumb_podcasts_array = result.thumbs_up.Podcasts;


    // all of the checks here
    let current_result = checkArray(current_podcasts_array);
    let meh_result = checkArray(meh_podcasts_array);
    let radar_result = checkArray(radar_podcasts_array);
    let downThumb_result = checkArray(downThumb_podcasts_array);
    let upThumb_result = checkArray(upThumb_podcasts_array);

    // pass results to makeDecision to return the nessasary info


        // shelfContainer.appendChild(currentDiv);
        // shelfContainer.appendChild(mehDiv);
        // shelfContainer.appendChild(radarDiv);
        // shelfContainer.appendChild(thumbsDownDiv);
        // shelfContainer.appendChild(thumbsUpDiv);


});