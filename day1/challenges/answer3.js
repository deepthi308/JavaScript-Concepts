// Question 3:

/*
There are two gynastics teams, Dolphins and Koalas.
They compete against eachother 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below.
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and at the same time a score of atleast 100 points.
HINT: Use logical operator to test for minimun score, as well as multiple else-if blocks 😊

4.BONUS 2:
Minimum score also applies to a draw! So a draw only happens when both the teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA:
Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.
*/

// Answer:

const dolphinsTotalScore = 100 + 108 + 91;
const koalasTotalScore = 95 + 95 + 110;

const dolphinsAvgScore = Number((dolphinsTotalScore / 3).toFixed(0));
const koalasAvgScore = Number((koalasTotalScore / 3).toFixed(0));

console.log(`Dolphins team average score: ${dolphinsAvgScore}
Koalas team average score: ${koalasAvgScore}`);

if ((dolphinsAvgScore > koalasAvgScore) && (dolphinsAvgScore >= 100)) {
    console.log(`Dophins team won by ${dolphinsAvgScore-koalasAvgScore} points`);
} else if ((koalasAvgScore > dolphinsAvgScore) && (koalasAvgScore >= 100)) {
    console.log(`Koalas team won by ${koalasAvgScore-dolphinsAvgScore} points`);
} else if ((dolphinsAvgScore === koalasAvgScore) && (dolphinsAvgScore >= 100 && koalasAvgScore >= 100)) {
    console.log(`Match tied with ${koalasAvgScore}`);
} else {
    console.log(`Nobody won the trophy`);
}


