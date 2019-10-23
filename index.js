
class user {

    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
function scoreSort(users) {

/* place holder */

}
/* generate leaderboard */
function leaderBoardGenerator(users, sortFlag) {

if (sortFlag == 'Sorted') {

    users.forEach(element => {
        let leaderBoard = document.getElementById("leaderBoard");
        let list = document.createElement('li'); 
        leaderBoard.appendChild(list).innerHTML ='<h3>'+ element.name + " " + element.score + '</h3>';
    });
}

   /*scoreSort(users)*/
}
        
let UserOne = new user ("Joe", 100);
let UserTwo = new user ("Abi", 80);
let UserThree = new user ("Geoff", 90);

let users = [UserOne, UserTwo, UserThree];

leaderBoardGenerator(users, 'Sorted');