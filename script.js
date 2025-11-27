console.log('pagina due funziona')

const nintendoGames = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Action-Adventure", "Open World"],
        releaseYear: 2017,
        developer: "Monolith Soft, Nintendo EPD",
        isMultiplayer: false,
        rating: 97,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Super Mario Odyssey",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2017,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 97,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Animal Crossing: New Horizons",
        platform: ["Nintendo Switch"],
        genre: ["Life Simulation", "Social Simulation"],
        releaseYear: 2020,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 90,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Metroid Dread",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Platform"],
        releaseYear: 2021,
        developer: "MercurySteam, Nintendo EPD",
        isMultiplayer: false,
        rating: 88,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Splatoon 3",
        platform: ["Nintendo Switch"],
        genre: ["Shooter", "Action"],
        releaseYear: 2022,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 83,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Pokémon Scarlet and Violet",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Adventure"],
        releaseYear: 2022,
        developer: "Game Freak",
        isMultiplayer: true,
        rating: 72,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Super Smash Bros. Ultimate",
        platform: ["Nintendo Switch"],
        genre: ["Fighting", "Action"],
        releaseYear: 2018,
        developer: "Bandai Namco Studios, Sora Ltd.",
        isMultiplayer: true,
        rating: 93,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Mario Kart 8 Deluxe",
        platform: ["Nintendo Switch"],
        genre: ["Racing", "Party"],
        releaseYear: 2017,
        developer: "Nintendo EAD",
        isMultiplayer: true,
        rating: 92,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Fire Emblem: Three Houses",
        platform: ["Nintendo Switch"],
        genre: ["Tactical RPG", "Strategy"],
        releaseYear: 2019,
        developer: "Intelligent Systems, Koei Tecmo",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Luigi’s Mansion 3",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Puzzle"],
        releaseYear: 2019,
        developer: "Next Level Games",
        isMultiplayer: true,
        rating: 86,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Donkey Kong Country: Tropical Freeze",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2018,
        developer: "Retro Studios",
        isMultiplayer: true,
        rating: 87,
        priceUSD: 69.99,
        isExclusive: true
    },
    {
        title: "Xenoblade Chronicles 3",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Action"],
        releaseYear: 2022,
        developer: "Monolith Soft",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 79.99,
        isExclusive: true
    },
    {
        title: "Kirby and the Forgotten Land",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2022,
        developer: "HAL Laboratory",
        isMultiplayer: true,
        rating: 85,
        priceUSD: 19.99,
        isExclusive: true
    },
    {
        title: "Bayonetta 3",
        platform: ["Nintendo Switch"],
        genre: ["Action", "Hack and Slash"],
        releaseYear: 2022,
        developer: "PlatinumGames",
        isMultiplayer: false,
        rating: 87,
        priceUSD: 59.99,
        isExclusive: true
    }
]

function renderGameList(games) {
    const gameCont = document.getElementById('card-container');

        gameCont.innerHTML = '';

        for (const game of games) {

            const gameCard = document.createElement('div');
            gameCard.classList.add("flip-card");

            const flipInner = document.createElement('div');
            flipInner.classList.add('flip-inner');

            const flipFront = document.createElement('div');
            flipFront.classList.add('flip-front');

            const title = document.createElement('h2');
            title.appendChild(document.createTextNode(game.title));
            flipFront.appendChild(title);

            const flipBack = document.createElement('div');
            flipBack.classList.add('flip-back')

            const titleSpan = document.createElement('h3');
            titleSpan.appendChild(document.createTextNode(game.title));
            flipBack.appendChild(titleSpan);

            const platformSpan = document.createElement('span');
            platformSpan.appendChild(document.createTextNode('Piattaforma: ' + game.platform.join(", ")));
            flipBack.appendChild(platformSpan);

            const genreSpan = document.createElement('span');
            genreSpan.appendChild(document.createTextNode('Genere: ' + game.genre.join(", ")));
            flipBack.appendChild(genreSpan);

            const releaseYearSpan = document.createElement('span');
            releaseYearSpan.appendChild(document.createTextNode('Anno di uscita: ' + game.releaseYear));
            flipBack.appendChild(releaseYearSpan);

            const developerSpan = document.createElement('span');
            developerSpan.appendChild(document.createTextNode('Sviluppatore: ' + game.developer));
            flipBack.appendChild(developerSpan);

            const isMultiplayerSpan = document.createElement('span');
            isMultiplayerSpan.appendChild(document.createTextNode('Multigiocatore: ' + (game.isMultiplayer ? "sì" : "no")));
            flipBack.appendChild(isMultiplayerSpan);

            const ratingSpan = document.createElement('span');
            ratingSpan.appendChild(document.createTextNode('Valutazione: ' + game.rating));
            flipBack.appendChild(ratingSpan);

            const priceSpan = document.createElement('span');
            priceSpan.appendChild(document.createTextNode('Prezzo: $' + game.priceUSD));
            flipBack.appendChild(priceSpan);

            const isExclusiveSpan = document.createElement('span');
            isExclusiveSpan.appendChild(document.createTextNode('Esclusiva: ' + (game.isExclusive ? "sì" : "no")));
            flipBack.appendChild(isExclusiveSpan);

            flipInner.appendChild(flipFront);
            flipInner.appendChild(flipBack);
            gameCard.appendChild(flipInner);
            gameCont.appendChild(gameCard);
        }
    }


renderGameList(nintendoGames);

//-------------------------FUNZIONE CHE COMPARA I TITOLI PER ORDINARE A ---> Z ----------------//
function compareTitles(g1, g2) {
    return g1.title.localeCompare(g2.title);
}
//-------------------------FUNZIONE CHE ORDINA PER I TITOLI E A ---> Z ----------------//
function orderGamesByTitle() {
    nintendoGames.sort(compareTitles);
    renderGameList(nintendoGames);
}
//-------------------------SI AGGIUNGE L'EVENTO AL BOTONE ----------------//
const orderTitleBtn = document.getElementById('order-title');
orderTitleBtn.addEventListener('click', orderGamesByTitle);

//-------------------------FUNZIONE CHE COMPARA I PREZZI DAL PIU ECONOMICO AL PIU CARO ----------------//
function comparePrices(p1, p2) {
    return p1.priceUSD - p2.priceUSD 
}
//-------------------------FUNZIONE CHE ORDINA I PREZZI DAL PIU ECONOMICO AL PIU CARO ----------------//
function orderPricesFromLowerToHigher() {
    nintendoGames.sort(comparePrices)
    renderGameList(nintendoGames)
}
//-------------------------SI AGGIUNGE L'EVENTO AL BOTONE ----------------//
const priceOrderBtn = document.getElementById("order-lowprice");
priceOrderBtn.addEventListener('click', orderPricesFromLowerToHigher)

//-------------------------FUNZIONE CHE COMPARA GLI I rating ----------------//
function compareRating(r1, r2) {
    return r1.rating - r2.rating
}
//-------------------------FUNZIONE CHE ORDINA I PREZZI DAL PIU ECONOMICO AL PIU CARO ----------------//
function orderRatingFromLowerToHigher() {
    nintendoGames.sort(compareRating)
    renderGameList(nintendoGames)
}
//-------------------------SI AGGIUNGE L'EVENTO AL BOTONE ----------------//
const ratingOrderBtn = document.getElementById("order-rating");
ratingOrderBtn.addEventListener('click', orderRatingFromLowerToHigher)



// /// completare le schede dei giochi rendendole molto belle! (con tutte le proprietà)
// /// aggiungere l'ordinamento per prezzo (dal più economico al più caro)
// /// aggiungere l'ordinamento per rating (dal rating migliore al peggiore)

