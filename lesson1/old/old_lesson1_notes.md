## [1.13 Assignment: OO RPS Bonus Features](https://launchschool.com/lessons/fb892747/assignments/805b45f6)

- [ ] Keeping score
  - [x] Add match object
  - [ ] Update players
    - [ ] have a state of `RPSGame` that is `players`
    - [ ] pass `...players` to `createMatch` in order to populate the `score` object's keys.
    - [ ] Pass human and computer to create match and add as states of match
    - [ ] Then pass players to `createScore`?
    - [ ] When should arguments get passed?
  - [x] make the score a state of each player instead of the game?
  - [x] create round object?
  - [x] Create separate methods for playMatch and playRound
  - [x] playMatch
  - [ ] Add instructions for match
  - [ ] Move constants
    - [ ] Is there any way to make `VALID_MOVES` a local constant? Maybe a state of `RPSGame`, that is then passed as an argument to `createComputer` and `createHuman`?
  - [ ] By passing human as an argument, a dependency is created because one must access the internal workings of human
    - [ ] Define `playMatch` not within `match` but in `RPSGame`?
    - [ ] But is this a dependency in the relevant sense? All that must be accessed is the method `choose`. So, `playRound` does not actually deal with the inner workings within the human object.
    - [ ] But more worrisome is that `playRound` does seem to have a dependency with respect to `score`: `score[this.roundWinner] += 1;`
      - [ ] Solution: create `updateScore` method.
- [ ] Improve logic of `getRoundWinner`
  - [ ] git branch
  - [ ] PEDAC
  - [ ] add rule
- [ ] Add Lizard and Spock
  - [ ] git branch
- [ ] Keep track of a history moves
  - [ ] git branch
- [ ] Adjust computer choice based on history
  - [ ] git branch

Questions for code review

- For the 'keeping score' bonus feature, I initially tried to create objects for `match` and `round`. Something like this:

```javascript

```

- My motivations were that that seems to be in the spirit of OOP, and that `score` should be a state of `match` instead of `RPSGame` as a whole. But I had some difficulty with doing this. In part, one of the main worries was how to deal with the `human` and `computer` properties/states of `RPSGame`. Namely, it seemed like I would have to pass those properties as arguments to a method.

---

#### * Example 2

(pass arguments)

### * Fix Attempt for Match

Code that doesn't work:

```javascript
function createMatch(player1, player2) {
  return {
    player1,
    player2,
    score: 0,
    playMatch() {
      console.log(`${this.player1.name} vs. ${this.player2}, score = ${this.score}`);
    },
  };
}

const game = {
  player1: {name: 'Curtis'},
  player2: {name: 'Opie'},
  match: createMatch(this.player1, this.player2),

  play() {
    this.match.playMatch();
  },
};

console.log(game);
game.play();
```

Lesson: you can't use the value of one key to determine the value of another key.

`this` always refers to the innermost object in which it appears.

Another attempt:

```javascript
const game = {
  player1: {name: 'Curtis'},
  player2: {name: 'Opie'},
  match: null,

  createMatch() {
    this.match = {
      score: 0,
      displayMatch() {
        console.log(`${this.player1.name} vs. ${this.player2.name}, score = ${this.score}`);
      },
    };
  },

  play() {
    this.createMatch();
    this.match.displayMatch();
  },
};

console.log(game);
game.play();
```
