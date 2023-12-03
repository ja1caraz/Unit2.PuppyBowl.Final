// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2310-FSA-ET-WEB-PT-SF';

// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

const state = {
    players: [],
};

//API Documentation https://fsa-puppy-bowl.herokuapp.com/api/

//For selecting the form
const newPlayerForm = document.getElementById('new-player-form');

//For selecting the container for all players.
const playerContainer = document.getElementById('all-players-container');

const playerList = document.querySelector('#players');

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */

//Grabs all players from API
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        const json = await response.json();
        state.players = json.data;
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

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

//Pass Id to function, delete player from API.
const removePlayer = async (playerId) => {
    try {

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

        const playersArray = allPlayers.players;

        if (!playersArray.length) {
            playerList.innerHTML = "<li>No Players</li>"
            return;
        }

        const playerCards = playersArray.map((player) => {
            const li = document.createElement("li");
            li.innerHTML = `
            <h2>${player.name}</h2>
            <p>${player.breed}</p>
            <img src="${player.imageUrl}">
            <p>${player.teamId}</p>
            `;
            playerList.appendChild(li);
        });

        //playerList.appendChild(...playerCards);

    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
//Render from inside of the form tag
const renderNewPlayerForm = () => {
    try {

        if (!state.players.length) {

        }

    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init();
