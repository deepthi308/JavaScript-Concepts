// Question 1:
/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number  (Example:'Goal 1: Lewandowski')

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can  go check if you don't remember)

3. Print the 3 odds to  the console, but in the nice formatted way, exactly like this:
    Odd of victory bayern munich: 1.33
    Odd of draw: 3.25
    Odd of victory borrussia dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for "draw").
HINT: Note how the odds and the  game objects have the same property names

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and  the number of goals as the value. In this game, It will look like this:

{
    Gnarby:1,
    Hummels:1,
    Lewandowski:2
}
*/

// Answer :

const game = {
    team1:'Bayern Munich',
    team2:'Borrussia Dortmund',
    players:[
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Mullar',
        'Gnarby',
        'Lewandowski'
    ],
    [
        'Burki',
        'Schullz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ]
    ],
    score:'4:0',
    scored:['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date:'Nov 9th, 2037',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    }
}

// 1
for (const [index, element] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${element}`);
}

// 2
let total = 0;
let count = Object.values(game.odds).length;
for (const oddValue of Object.values(game.odds)) {
    total = total + oddValue;
}
const average = total / count;
console.log(`Average odds: ${average.toFixed(2)}`);
// console.log(Object.values(game.odds).length)

// 3
for (const [key, value] of Object.entries(game.odds)) {
    console.log(`Odd of victory ${key==='x'?'draw':game[key]}: ${value}`);
}

// 4
const scorers = {

}

for (const element of game.scored) {
    if (scorers.hasOwnProperty(element)) {
        scorers[element] = scorers[element] + 1;
    } else {
        scorers[element] = 1;
    }
}

game.goals = scorers;

console.log(game.goals);