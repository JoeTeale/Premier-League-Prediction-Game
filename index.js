
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
else {
    scoreSort(users)
}
}
   function scoreSort(users)
   {
        let length = users.length;
        let temp;
        let swapped = true;
        while (swapped)
        {
            swapped = false;
            for (let i =0; i<length-1; i++)
            {
                console.log(users[i].name , users[i].score);
                if (users[i].score < users[i+1].score)
                {
                    
                    temp=users[i];
                    users[i]=users[i+1];
                    users[i+1]=temp;
                    swapped=true;
                }
            }

        }

        leaderBoardGenerator(users, 'Sorted');
   }

        
let UserOne = new user ("Joe", 100);
let UserTwo = new user ("Abi", 80);
let UserThree = new user ("Geoff", 90);

let users = [UserOne, UserTwo, UserThree];

leaderBoardGenerator(users);