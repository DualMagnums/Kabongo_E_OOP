class Player {
    constructor(
        name, 
        role, 
        image,
        wins
        ) {
        this.name = name;
        this.role = role;
        this.image = image;
        this.wins = wins;
    }

    infoPlayers() {
        const playerItem = document.createElement("li");
        const div_image = document.createElement("div");
        playerItem.appendChild(div_image);
        playerItem.classList.add("player-box")
        div_image.classList.add("image_box")
    

        const div_name = document.createElement("div");
        const playerName = document.createElement("h3");
        playerName.textContent = this.name;
        playerItem.appendChild(div_name);
        div_name.classList.add("box-name")
    

        const div_stats = document.createElement("div");
        const roleSpan = document.createElement("span");
        div_stats.classList.add("stats-list")
        roleSpan.textContent = `${this.role}`;

        const winsSpan = document.createElement("span");
        winsSpan.textContent = `Total Wins: ${this.wins}`;

        const imagePlayer = document.createElement("img");
        imagePlayer.classList.add("image-player")
        imagePlayer.src = this.image
        playerItem.appendChild(div_stats);
    
    
        div_image.appendChild(imagePlayer);
        div_name.appendChild(playerName);
        div_stats.appendChild(roleSpan);
        div_stats.appendChild(winsSpan);
    
        return playerItem;
    }
}


class TitleHolder extends Player {
    constructor(
        name, 
        role, 
        image,
        wins,
        loses,
        titles
    ) {
        super(name, role, image, wins);
        this.loses = loses;
        this.titles = titles;
    }

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");


        const losesSpan = document.createElement("span");
        losesSpan.textContent = `Total Losses: ${this.loses}`;
        const titlesSpan = document.createElement("span");
        titlesSpan.textContent = `EVO Titles: ${this.titles}`;

        div_stats.appendChild(losesSpan);
        div_stats.appendChild(titlesSpan);

        return playerItem;
    }
}


class Participant extends Player {
    constructor(
        name, 
        role, 
        image,
        wins,
        loses,
        ratio
    ) {
        super(name, role, image, wins);
        this.loses = loses;
        this.ratio = ratio;
    }

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");

        const losesSpan = document.createElement("span");
        losesSpan.textContent = `Total Losses: ${this.loses}`;
        const ratioSpan = document.createElement("span");
        ratioSpan.textContent = `Set Win Percentage: ${this.ratio}%`;

        div_stats.appendChild(losesSpan);
        div_stats.appendChild(ratioSpan);

        return playerItem;
    }
}



export {Player, TitleHolder, Participant};