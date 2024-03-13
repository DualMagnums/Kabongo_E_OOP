class Game {
    constructor(
        name,
        image
        ) {
        this.name = name;
        this.image = image;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player);
    }

    renderGamePlayers() {
        const gameBox = document.querySelector("#list-players");
        gameBox.innerHTML = ''; 

        const gameDiv = document.createElement('div');
        const gameName = document.createElement('h2');
        const imgGame = document.createElement('img');
        const playerList = document.createElement('ul');

        gameName.textContent = this.name;
        gameDiv.classList.add('game');
        playerList.classList.add('players');

        imgGame.src = this.image;
        imgGame.classList.add("image-game")

        this.players.forEach(player => {
            const playerItem = player.infoPlayers();
            playerList.appendChild(playerItem);
        });

        gameDiv.appendChild(imgGame);
        gameDiv.appendChild(playerList);

        gameBox.appendChild(gameDiv);
    }

    addToDropdown(selectGame) {
        const optionGame = document.createElement("option");
        optionGame.text = this.name;
        optionGame.value = this.name;
        selectGame.add(optionGame);
    }
}

export { Game };








