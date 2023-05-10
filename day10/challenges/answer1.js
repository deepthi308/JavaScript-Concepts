// Question 1:
/*
1. Create one player array for each team (Variables 'players1' and 'player2')
2. The first player in any player  array is the goal keeper and the others are field players.
For Bayern Munich (team1) create one variable ('gk') with the goalkeepers  name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich(team1) used 3 substitute players.  So create a new array ('playersFinal') containing all the original  team1 players plus 'Thiago', 'Coutinho' and 'Peristic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'team2','draw')
6. Write a function ('printGoals) that recieves an arbitary number of player names (NOT an array) and print each of them in console, along with the number of goals who were scored(number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or  the ternary operator.

Test Data For 6:
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
    score:'4:0'
    scoored:['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date:'Nov 9th, 2037',
    odds:{
        team1:1.33,
        x:3.25,
        team2:6.5,
    }

}
*/

// Answer:

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

const [players1, players2] = game.players;
const [gk1,...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

console.log(gk1, gk2);
// console.log(players1);
const allPlayers = [...players1, ...players2];
console.log(allPlayers)

for (let i = 0; i < 3; i++){
    players1.pop()
}

console.log(players1);
const finalPlayers = [...players1, 'Thiago', 'Coutinho', 'Peristic'];
console.log(finalPlayers);

const { odds: { team1, draw, team2 } } = game;

game.printGoals = (...values) => {
    const goalArray = values.forEach((value) => {
        let count = 0;
        let i = 0;
        while (i < game.scored.length) {
            if (game.scored[i] === value) {
                count++;
                i++;
            }
            else {
                i++
            }
        }
        console.log(`${value} : ${count}`);
        
    })
}

game.printGoals('Lewandowski', 'Gnarby', 'jsdj');

(team1 < team2) && console.log('Team 1 is most likely to win');
(team1 > team2) && console.log('Team 2 is most likely to win');
