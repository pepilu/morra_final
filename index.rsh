'reach 0.1';

const [isHand, H_ZERO, H_ONE, H_TWO, H_THREE, H_FOUR, H_FIVE] = makeEnum(6);
const [isGuess, G_ZERO, G_ONE, G_TWO, G_THREE, G_FOUR, G_FIVE, G_SIX, G_SEVEN, G_EIGHT, G_NINE, G_TEN] = makeEnum(11);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

// const winner = (handAlice, handBob)=>((handAlice+(4-handBob))%3);
const winner = (handAlice, handBob, guessAlice, guessBob)=>{
  if(handAlice == handBob){
    return DRAW;
  } else if((handAlice+handBob) == guessAlice){
    return A_WINS;
  } else if((handAlice+handBob) == guessBob){
    return B_WINS;
  } else return DRAW; 
}

//const checkSameGuess = (guessAlice, guessBob) => (guessAlice == guessBob) ? DRAW : ;

// assert(winner(ROCK, PAPER) ==B_WINS);
// assert(winner(PAPER, ROCK) ==A_WINS);
// assert(winner(G_ZERO, G_ZERO) ==DRAW);
// assert(winner(G_ONE, G_ONE) ==DRAW);
// assert(winner(G_TWO, G_TWO) ==DRAW);
// assert(winner(G_THREE, G_THREE) ==DRAW);
// assert(winner(G_FOUR, G_FOUR) ==DRAW);
// assert(winner(G_FIVE, G_FIVE) ==DRAW);
// assert(winner(G_SIX, G_SIX) ==DRAW);
// assert(winner(G_SEVEN, G_SEVEN) ==DRAW);
// assert(winner(G_EIGHT, G_EIGHT) ==DRAW);
// assert(winner(G_NINE, G_NINE) ==DRAW);
// assert(winner(G_TEN, G_TEN) ==DRAW);

// forall(UInt, handAlice =>
//   forall(UInt, handBob =>
//     assert(isOutcome(winner(handAlice, handBob)))));

// forall(UInt, (hand) => 
//   assert(winner(hand, hand) == DRAW));

const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  getGuess: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),

};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  Alice.only(() => {
    const amount = declassify(interact.wager);

    const _handAlice = interact.getHand();
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
    const commitAlice = declassify(_commitAlice);

    const _guessAlice = interact.getGuess();
    const [_commitAliceGuess, _saltAliceGuess] = makeCommitment(interact, _guessAlice);
    const commitAliceGuess = declassify(_commitAliceGuess);
  });
  Alice.publish(commitAlice, commitAliceGuess, amount)
    .pay(amount);
  commit();

  unknowable(Bob, Alice(_handAlice, _saltAlice, _guessAlice, _saltAliceGuess));

  Bob.only(() => {
    interact.acceptWager(amount);
    const handBob = declassify(interact.getHand());
    const guessBob = declassify(interact.getGuess());
    // const handBob = (handAlice + 1) % 3;
  });
  Bob.publish(handBob, guessBob)
    .pay(amount);

  commit();

  Alice.only(()=>{
    const saltAlice = declassify(_saltAlice);
    const handAlice = declassify(_handAlice);

    const saltAliceGuess = declassify(_saltAliceGuess);
    const guessAlice = declassify(_guessAlice);
  });
  Alice.publish(saltAlice, handAlice, saltAliceGuess, guessAlice);
  checkCommitment(commitAlice, saltAlice, handAlice);
  checkCommitment(commitAliceGuess, saltAliceGuess, guessAlice);

  const outcome = winner(handAlice, handBob, guessAlice, guessBob);
  //require(handBob == (handAlice + 1) % 3);
  //assert(outcome == 0);
  const            [forAlice, forBob] =
    outcome == A_WINS ? [       2,      0] :
    outcome == B_WINS ? [       0,      2] :
    /* tie      */ [       1,      1];

  transfer(forAlice * amount).to(Alice);
  transfer(forBob   * amount).to(Bob);
  commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});