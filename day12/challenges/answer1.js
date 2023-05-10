// Question 1:

/*
Let's continue with our  football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game  has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was  unfair. So remove this event from the game events log
3. Print the following string to the console: 'An event happened, on average, every 9 minutes' (Keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[First Half] 17: GOAL

Test Data:

const gameEvents = new Map([
    [17,'GOAL'],
    [36,'Substitution'],
    [47,'GOAL'],
    [61,'Substitution'],
    [64,'Yellow card'],
    [69,'Red Card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76,'GOAL'],
    [80,'GOAL'],
    [92,'Yellow card'],
])

*/

// Answer:

// 1
const gameEvents = new Map([
    [17,'GOAL'],
    [36,'Substitution'],
    [47,'GOAL'],
    [61,'Substitution'],
    [64,'Yellow card'],
    [69,'Red Card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76,'GOAL'],
    [80,'GOAL'],
    [92,'Yellow card'],
])
// Way 1:
// let eventsSet = new Set();

// for (const value of gameEvents.values()) {
//     eventsSet.add(value);
// }
// const events = [...eventsSet];
// console.log([...gameEvents.values()]);

// Way 2:
// console.log([...eventsSet]);
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
// console.log(gameEvents.delete(64));
gameEvents.delete(64);
console.log(gameEvents);

// 3
// I don't know, gonna refer the video for the answer 😎
let realTime = [...gameEvents.keys()];
realTime = realTime[realTime.length - 1];
// console.log(realTime);
// We can also use the pop method as it removes the last element of the array and return it
console.log(`An event happened, on average, every ${realTime/gameEvents.size} minutes.`);

// 4
for (const [key,value] of gameEvents.entries()) {
    key <= 45 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
}

