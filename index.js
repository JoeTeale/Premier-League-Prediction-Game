
class user {

    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

/* generate leaderboard */
    function leaderBoardGenerator(user) {
        let leaderBoard = document.getElementById("leaderBoard");
        let list = document.createElement('li'); 
        leaderBoard.appendChild(list).innerHTML ='<h3>'+ user.name + " " + user.score + '</h3>';
    }
        

let UserJoe = new user ("Joe", 100);

leaderBoardGenerator(UserJoe);