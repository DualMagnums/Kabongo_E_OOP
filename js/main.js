import {Game} from './Game.js';
import {Player, TitleHolder, Participant} from './Player.js';

//=== Mortal Kombat 11 ===

//Ninjakilla_212
const ninjakilla = new TitleHolder("Ninjakilla_212", "Character: Fujin", "images/mk11/fujin.png", 11, 2, 1);

//Nicolas
const nicolas = new Participant("Nicolas", "Character: Johnny Cage", "images/mk11/johnny.png", 8, 2, 80);

//=== DragonBall FighterZ ===

//HIKARI
const hikari = new TitleHolder("Hikari", "Character: Vegito", "images/dbz/vegito.png", 10, 0, 1);

//Yasha
const yasha = new Participant("Yasha", "Character: Gotenks", "images/dbz/gotenks.png", 13, 2, 86.67);

//=== Tekken 7 ===

//Arslan Ash
const ash = new TitleHolder("Arslan Ash", "Character: Kunimitsu", "images/tekken7/kuni.png", 11, 0, 1);

//AO
const ao = new Participant("AO", " Character: Akuma", "images/tekken7/akuma.png", 10, 2, 83.33);

//=== Street Fighter 6 ===

//Angry Bird
const angrybird = new TitleHolder("AngryBird", "Character: Ken", "images/sf6/ken.png", 13, 1, 1);

//MenaRD
const menard = new Participant("MenaRD", "Character: Luke", "images/sf6/luke.png", 15, 2, 88.24);


//Match players to corresponding game

const MortalKombat11 = new Game("Mortal Kombat 11", "images/mk11.png");
MortalKombat11.addPlayer(ninjakilla)
MortalKombat11.addPlayer(nicolas)


const DragonBallFighterZ = new Game("DragonBall FighterZ", "images/dbz.png");
DragonBallFighterZ.addPlayer(hikari)
DragonBallFighterZ.addPlayer(yasha)



const Tekken7 = new Game("Tekken 7", "images/t7.png");
Tekken7.addPlayer(ash)
Tekken7.addPlayer(ao)





const StreetFighter6 = new Game("Street Fighter 6", "images/sf6.png");
StreetFighter6.addPlayer(angrybird);
StreetFighter6.addPlayer(menard);


// Game dropdown element
const gameSelect = document.querySelector("#game-select");

const games = [MortalKombat11, DragonBallFighterZ, Tekken7, StreetFighter6]

games.forEach(game => {
    game.addToDropdown(gameSelect);
});


const listPlayersContainer = document.querySelector("#list-players");

MortalKombat11.renderGamePlayers(listPlayersContainer);

function changeGame(){
    const selectedGameName = gameSelect.value;
    let selectedGame;

    if (selectedGameName === "MortalKombat11") {
        selectedGame = MortalKombat11;
    } else if (selectedGameName === "Tekken 7") {
        selectedGame = Tekken7;
    }else if (selectedGameName === "Street Fighter 6") {
        selectedGame = StreetFighter6;
    }else if (selectedGameName === "DragonBall FighterZ") {
        selectedGame = DragonBallFighterZ;
    }

    if (selectedGame) {
        selectedGame.renderGamePlayers(listPlayersContainer);
    }
}

gameSelect.addEventListener("change", changeGame);


