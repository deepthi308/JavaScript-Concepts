//Question 2:

/*
Back to the two gymnastics teams, the dolphins and koalas! There is new gymnastics discipline, which works differently.
Each team competes 3 times and then the average of the 3 scores is calculated (So one average score per team).
The team only wins if it has at least Double the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of the 3 scores.
2. Use the function to calculate the average for both teams.
3. Create a function 'checkWinner' that takes the averagevscore of each team as parameters (avgDolphins, avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: 'Koalas win (30 Vs. 13)'.
4. Use the checkWinner function to  determine the winner for both DATA 1 and DATA 2.
5. Ignore draw this time.

Test Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49.
Test Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27.
*/

const calcAverage = (score1, score2, score3) => {
    const total = score1 + score2 + score3;
    return (total / 3);
}

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (2 * avgKoalas)) {
        console.log(`Dolphins win🏆 (Dolphins:${dolphinsAvg} VS ${koalasAvg}:Koalas)`);
    } else if (avgKoalas >= (2 * avgDolphins)) {
        console.log(`Koalas win🏆 (Dolphins:${dolphinsAvg} VS ${koalasAvg}:Koalas)`);
    } else {
        console.log(`No team wins🙅‍♀️ (Dolphins:${dolphinsAvg} VS ${koalasAvg}:Koalas)`);
    }
}

// Test Data 1:

let dolphinsAvg = calcAverage(44,23,71);
let koalasAvg = calcAverage(65,54,49);

checkWinner(dolphinsAvg, koalasAvg);

// Test Data  2:

dolphinsAvg = calcAverage(85,54,41);
koalasAvg = calcAverage(23,34,27);

checkWinner(dolphinsAvg, koalasAvg);
