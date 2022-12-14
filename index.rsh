'reach 0.1';

const [isHand, H_ZERO, H_ONE, H_TWO, H_THREE, H_FOUR, H_FIVE] = makeEnum(6);
const [isGuess, G_ZERO, G_ONE, G_TWO, G_THREE, G_FOUR, G_FIVE, G_SIX, G_SEVEN, G_EIGHT, G_NINE, G_TEN] = makeEnum(11);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

// const winner = (handAlice, handBob)=>((handAlice+(4-handBob))%3);
const winner = (handAlice, handBob, guessAlice, guessBob)=>{
  if(guessAlice == guessBob){
    return DRAW;
  } else if((handAlice+handBob) == guessAlice){
    return A_WINS;
  } else if((handAlice+handBob) == guessBob){
    return B_WINS;
  } else return DRAW; 
};

forall(UInt, handAlice =>
  forall(UInt, handBob =>
    forall(UInt, guessAlice=>
      forall(UInt, guessBob=>
        assert(isOutcome(winner(handAlice, handBob, guessAlice, guessBob)))))));

forall(UInt, handAlice =>
  forall(UInt, handBob=>
    forall(UInt, guess=>
      assert(winner(handAlice, handBob, guess, guess) == DRAW))));


const Player = {
  ...hasRandom,
  getHand: Fun([], UInt),
  getGuess: Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)

};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt, // time delta (in blocks)
  });
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    // we use each instead of two only blocks
    // happens in local step
    each([Alice, Bob], () =>{
      interact.informTimeout();
    })
  };

  Alice.only(() => {
    const amount = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(amount, deadline)
    .pay(amount);
  commit();

  Bob.only(() => {
    interact.acceptWager(amount);
  });
  Bob.pay(amount)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));


  var [outcome] = [DRAW];
  invariant(balance() == 2* amount && isOutcome(outcome));

  while(outcome == DRAW){
    commit();
    Alice.only(()=>{
      const _handAlice = interact.getHand();
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
      const commitAlice = declassify(_commitAlice);

      const _guessAlice = interact.getGuess(_handAlice);
      const [_commitAliceGuess, _saltAliceGuess] = makeCommitment(interact, _guessAlice);
      const commitAliceGuess = declassify(_commitAliceGuess);
    });
    Alice.publish(commitAlice, commitAliceGuess)
    .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _saltAlice, _guessAlice, _saltAliceGuess));

    Bob.only(() => {
      const handBob = declassify(interact.getHand());
      const guessBob = declassify(interact.getGuess(handBob));
    });
    Bob.publish(handBob, guessBob)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(()=>{
      const saltAlice = declassify(_saltAlice);
      const handAlice = declassify(_handAlice);

      const saltAliceGuess = declassify(_saltAliceGuess);
      const guessAlice = declassify(_guessAlice);
    });
    Alice.publish(saltAlice, handAlice, saltAliceGuess, guessAlice)
    .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout)); //if no answear from Alice, return money to Bob

    // guarantee that these peices of information have not been changed
    checkCommitment(commitAlice, saltAlice, handAlice);
    checkCommitment(commitAliceGuess, saltAliceGuess, guessAlice);

    outcome = winner(handAlice, handBob, guessAlice, guessBob);

    continue;
  }

  assert(outcome == A_WINS || outcome == B_WINS);
  transfer(2*amount).to(outcome == A_WINS ? Alice : Bob);

  commit();

  // const            [forAlice, forBob] =
  //   outcome == A_WINS ? [       2,      0] :
  //   outcome == B_WINS ? [       0,      2] :
  //   /* tie      */ [       1,      1];

  // transfer(forAlice * amount).to(Alice);
  // transfer(forBob   * amount).to(Bob);
  // commit();

  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
});