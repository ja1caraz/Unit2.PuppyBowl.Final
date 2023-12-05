const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');
const state = {
    players: []     //Created State
}
// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2310-FSA-ET-WEB-PT-SF';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        const results = await response.json();
        // results.map()
        results.data.players.forEach((x) => state.players.push(x));
        return results.data.players;

    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

//Works off the index of the state.players array up top
const createPlayerCard = () => {
    const divPlayerContainer = document.getElementById("all-players-container");

    state.players.map((key) => {
        const section = document.createElement("section");
        section.classList.add("card");
        const name = key.name ? key.name: '';
        const breed = key.breed ? key.breed: '';
        const status = key.status ? key.status: '';
        const imgUrl = key.imageUrl ? key.imageUrl: '';
        const createDate = key.createdAt ? key.createdAt: '';
        const updateDate = key.updatedAt ? key.updatedAt: '';
        const teamId = key.teamId ? key.teamId: '';
        const cohortId = key.cohortId ? key.cohortId: '';

        //insert HTML
        section.innerHTML= `
            <span><img src="${imgUrl}"></span>
            <details>
              <summary>${name}</summary>
              <span>Breed: ${breed}</span>
              <span>Status: ${status}</span>
              <span>Created on: ${createDate}</span>
              <span>Updated on: ${updateDate}</span>
              <span>Team ID: ${teamId}</span>
              <span>Cohort ID: ${cohortId}</span>
            </details>`;

        //Add to All Players list
        divPlayerContainer.appendChild(section);
    });
}

const fetchSinglePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

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
const renderAllPlayers = async (playerList) => {
    try {
        await fetchAllPlayers();
        createPlayerCard(); //Test with one entry for the create card

    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {
        
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
