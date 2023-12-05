// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2310-FSA-ET-WEB-PT-SF';

// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const state = {
    players: [],
};

//API Documentation https://fsa-puppy-bowl.herokuapp.com/api/

//For selecting the form
let newPlayerForm = document.getElementById('new-player-form');

//For selecting the container for all players.
let playerContainer = document.getElementById('all-players-container');

let playerList = document.querySelector('#players');

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

const clearDOM = () => {
    document.body.innerHTML = '';

    const playerForm = document.createElement('div');
    playerForm.id = 'new-player-form';
    newPlayerForm = playerForm;

    const newPlayerContainer = document.createElement('div');
    newPlayerContainer.id = 'all-players-container';
    playerContainer = newPlayerContainer;

    const newPlayerList = document.createElement('ul');
    newPlayerList.id = 'players';
    playerList = newPlayerList;

    playerContainer.appendChild(playerList);
    document.body.append(newPlayerForm, playerContainer);

}

//Grabs all players from API
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        const json = await response.json();
        state.players = json.data.players;
        return state.players;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

//Pass player id to function movie from puppies unselected to puppies selected
const fetchSinglePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

//Call up in addevent listener for Button Add New Player to API
const addNewPlayer = async (playerObj) => {


    try {


        const response = await fetch(APIURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playerObj),
        });

        if (!response.ok) {
            throw new Error("Failed to add Player")
        }

        const addedPlayer = await response.json();
        console.log(addedPlayer.data, "New Player");
        state.players.push(addedPlayer.data.newPlayer);
        renderSinglePlayer(addedPlayer.data.newPlayer);
        renderAllPlayers();

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const renderSinglePlayer = (player) => {
    console.log(player, "Single Player");
    const li = document.createElement("li");
    li.innerHTML = `
    <h2>${player.name}</h2>
    <p>${player.breed}</p>
    <img src="${player.imageUrl}">
    `;
    playerList.appendChild(li);
}

//Pass Id to function, delete player from API.
const removePlayer = async (playerId) => {
    try {

        //Probably something like this
        // const response = await fetch(`${APIURL}/${playerId}`, {
        //     method: 'DELETE',
        // });

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */
//const renderAllPlayers = (playerList) => {

const renderAllPlayers = (allPlayers) => {
    try {

        //const playersArray = allPlayers.players;

        //Add a filter attribute and only display them their status is on field?
        const playerCards = allPlayers.map((player) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${player.name}</h2>
            <details>
            <p>${player.breed}</p>
            <img src="${player.imageUrl}">
            </details>
            `;

            //Something like this for delete button
            // const deleteButton = document.createElement("button");
            // deleteButton.textContent = "Delete Event";
            // deleteButton.setAttribute("data-event-id", event.id);

            // deleteButton.addEventListener("click", (e) => {
            //   e.preventDefault();
            //   deletePlayer(player.id);
            // });

            //li.appendChild(deleteButton);
            return li;
            //playerList.appendChild(li);
        });

        playerList.append(...playerCards);

    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = async () => {
    try {

        let form = document.createElement('form');
        form.id = 'playerForm';
        newPlayerForm.appendChild(form);

        //Name label and form
        let nameLabel = document.createElement('label');
        nameLabel.htmlFor = 'name';
        nameLabel.textContent = 'Name: ';
        nameLabel.name = 'name';
        form.appendChild(nameLabel);

        let nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'name';
        nameInput.name = 'name';
        form.appendChild(nameInput);

        let breedLabel = document.createElement('label');
        breedLabel.htmlFor = 'breed';
        breedLabel.textContent = 'Breed: ';
        breedLabel.name = 'breed';
        form.appendChild(breedLabel);

        let breedInput = document.createElement('input');
        breedInput.type = 'text';
        breedInput.id = 'breed';
        breedInput.name = 'breed';
        form.appendChild(breedInput);

        let imageUrlLabel = document.createElement('label');
        imageUrlLabel.htmlFor = 'imageUrl';
        imageUrlLabel.textContent = 'Image Url: ';
        imageUrlLabel.name = 'imageUrl';
        form.appendChild(imageUrlLabel);

        let imageUrlInput = document.createElement('input');
        imageUrlInput.type = 'text';
        imageUrlInput.id = 'imageUrl';
        imageUrlInput.name = 'imageUrl';
        form.appendChild(imageUrlInput);

        let teamIdLabel = document.createElement('label');
        teamIdLabel.htmlFor = 'teamId';
        teamIdLabel.textContent = 'Team ID: ';
        teamIdLabel.name = 'teamId';
        form.appendChild(teamIdLabel);

        let teamIdInput = document.createElement('input');
        teamIdInput.type = 'number';
        teamIdInput.id = 'teamId';
        teamIdInput.name = 'teamId';
        form.appendChild(teamIdInput);

        let submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
        form.appendChild(submitButton);

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const breedInput = document.getElementById('breed');
            const imageUrlInput = document.getElementById('imageUrl');
            const teamIdInput = document.getElementById('teamId');

            // Validate Name
            if (!nameInput.value.trim()) {
                alert('Please enter a name.');
                return;
            }

            // Validate Breed
            if (!breedInput.value.trim()) {
                alert('Please enter a breed.');
                return;
            }

            // Validate Image URL (basic validation for URL format)
            if (!imageUrlInput.value.trim() || !imageUrlInput.value.startsWith('http')) {
                alert('Please enter a valid image URL.');
                return;
            }

            // Validate Team ID (basic numeric check)
            if (!teamIdInput.value.trim() || isNaN(teamIdInput.value)) {
                alert('Please enter a valid team ID.');
                return;
            }

            const playerObject = {
                name: nameInput.value,
                breed: breedInput.value,
                imageUrl: imageUrlInput.value,
                teamId: Number(teamIdInput.value)
            };

            addNewPlayer(playerObject);
            //init();


        });

    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    await renderNewPlayerForm();
}

init();