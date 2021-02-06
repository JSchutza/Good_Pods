// imports here:



// functions here:
// gets the current users shelf data for html rendering
const shelfData = async () => {
    const the_response = await fetch(`http://localhost:8080/api/shelves`);
    const data = await the_response.json();
    return data;
}


// sends a delete request to the api that deletes a users shelf item
const removeFromShelf = async (the_shelf, the_podcast) => {
    const response = await fetch(`http://localhost:8080/api/shelves/${the_shelf}/podcasts/${the_podcast}`, {
        method: 'DELETE'
    });

    return await response.json();
};




// checks if a type has any podcasts in its array of podcasts
const checkArray = (the_array) => {
    if (the_array.length === 0) {
        return 'There are no podcasts in this shelf.'
    }
}


// checks if what is passed in is undefined
const makeDecision = (checked_thing, the_array, type_div) => {
    if (checked_thing === undefined) {
        // if it is undefined then loop through the array and put each items content to html
        const unordered_list = document.createElement('ul');


        the_array.forEach(eachItem => {
            const item = document.createElement('li');
            const link_item = document.createElement('a');
            const removeButton = document.createElement('button');
            removeButton.innerText = `Remove`;
            removeButton.setAttribute('class', `${eachItem.PodShelf.shelfId}`);
            removeButton.setAttribute('id', `${eachItem.PodShelf.podcastId}`);

            link_item.href = `/podcasts/${eachItem.id}`;
            link_item.innerHTML = `<img alt=${eachItem.name} src=/images/catalog/${eachItem.id}.jpeg
                                        onError="src='/images/logo.png'"> <span>${eachItem.name}</span>`;


            item.appendChild(link_item);
            item.appendChild(removeButton);
            unordered_list.appendChild(item);
        });

        type_div.appendChild(unordered_list)


    } else {
        // put the checked_thing in html
        const message = document.createElement('p');
        message.innerHTML = checked_thing;
        type_div.appendChild(message);

    }
}






// selectors here
const shelfContainer = document.querySelector(".shelves");




// DOM window listener here:
window.addEventListener("DOMContentLoaded", async (event) => {


    const result = await shelfData();
    // console.log(result);

    // can I wrap all of this in a function???
    const currentDiv = document.createElement("div");
    const mehDiv = document.createElement("div");
    const radarDiv = document.createElement("div");
    const thumbsDownDiv = document.createElement("div");
    const thumbsUpDiv = document.createElement("div");

    // need to give each of the above divs an class and an id


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
    makeDecision(current_result, current_podcasts_array, currentDiv);
    makeDecision(meh_result, meh_podcasts_array, mehDiv);
    makeDecision(radar_result, radar_podcasts_array, radarDiv);
    makeDecision(downThumb_result, downThumb_podcasts_array, thumbsDownDiv);
    makeDecision(upThumb_result, upThumb_podcasts_array, thumbsUpDiv);


    shelfContainer.appendChild(currentDiv);
    shelfContainer.appendChild(mehDiv);
    shelfContainer.appendChild(radarDiv);
    shelfContainer.appendChild(thumbsDownDiv);
    shelfContainer.appendChild(thumbsUpDiv);


    // select all of the remove buttons
    const RemoveButtons = document.querySelectorAll('button');

    // add click listeners to each button
    RemoveButtons.forEach(eachButton => {
        eachButton.addEventListener('click', async (event) => {

            const the_shelf = eachButton.className;
            const the_podcast = eachButton.id;

            const data = await removeFromShelf(the_shelf, the_podcast);
            



        });

    });




});
