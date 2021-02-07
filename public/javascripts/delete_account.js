


//  functions here:
const deleteUser = async (user_id) => {
    const response = await fetch(`/api/users/${user_id}`, {
        method: 'DELETE'
    });


};




// DOM listener here:
window.addEventListener("DOMContentLoaded", async (event) => {


    // event listener for the delete account link
    const deleteLink = document.querySelector('.delete-account');
    deleteLink.addEventListener("click", async (event) => {
        // keep the link from its default behavior
        event.preventDefault();

        const user_id = event.target.id;
        await deleteUser(user_id);


    });




});
