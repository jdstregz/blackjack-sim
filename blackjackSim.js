let ACE = {
    display: "ACE",
    value: 11
}
let KING = {
    display: "KING",
    value: 10
}
let QUEEN = {
    display: "QUEEN",
    value: 10
}
let JACK = {
    display: "JACK",
    value: 10,
}
let TEN = {
    display: "10",
    value: 10
}
let NINE = {
    display: "9",
    value: 9,
}
let EIGHT = {
    display: "8",
    value: 8
}
let SEVEN = {
    display: "7",
    value: 7
}
let SIX = {
    display: "6",
    value: 6
}
let FIVE = {
    display: "5",
    value: 5
}
let FOUR = {
    display: "4",
    value: 4
}
let THREE = {
    display: "3",
    value: 3,
}
let TWO = {
    display: "2",
    value: 2
}

let everyCard = [ACE, KING, QUEEN, JACK, TEN, NINE, EIGHT, SEVEN, SIX, FIVE, FOUR, THREE, TWO];

const buildDeckStack = (numDecks) => {
    let stack = [];
    for (let i = 0; i < numDecks; i += 1) {
        for (let j = 0; j < 4; j += 1) {
            for(const card of everyCard) {
                stack.push(card);
            }
        }
    }
    return stack;
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
    
}

let HIT = 0;
let STAY = 1;
let DOUBLE = 2;
let SPLIT = 3;
let SURRENDER = 4;

const hardTotal = {
    11: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: DOUBLE,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    10: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: DOUBLE,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    9: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: DOUBLE,
        10: DOUBLE,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    8: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: DOUBLE,
        10: DOUBLE,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    7: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: DOUBLE,
        10: DOUBLE,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    6: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: STAY,
        15: STAY,
        14: STAY,
        13: STAY,
        12: STAY,
        11: DOUBLE,
        10: DOUBLE,
        9: DOUBLE,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    5: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: STAY,
        15: STAY,
        14: STAY,
        13: STAY,
        12: STAY,
        11: DOUBLE,
        10: DOUBLE,
        9: DOUBLE,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    4: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: STAY,
        15: STAY,
        14: STAY,
        13: STAY,
        12: STAY,
        11: DOUBLE,
        10: DOUBLE,
        9: DOUBLE,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    3: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: STAY,
        15: STAY,
        14: STAY,
        13: STAY,
        12: HIT,
        11: DOUBLE,
        10: DOUBLE,
        9: DOUBLE,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    },
    2: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: STAY,
        16: STAY,
        15: STAY,
        14: STAY,
        13: STAY,
        12: HIT,
        11: DOUBLE,
        10: DOUBLE,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
    }
}

const softTotal = {
    11: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: HIT,
        17: HIT,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    },
    10: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: HIT,
        17: HIT,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    },
    9: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: HIT,
        17: HIT,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    },
    8: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: STAY,
        17: HIT,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    },
    7: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: HIT,
        17: HIT,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    },
    6: {
        21: STAY,
        20: STAY,
        19: DOUBLE,
        18: DOUBLE,
        17: DOUBLE,
        16: DOUBLE,
        15: DOUBLE,
        14: DOUBLE,
        13: DOUBLE,
        12: DOUBLE,
        11: DOUBLE,
        10: DOUBLE,
        9: DOUBLE,
        8: DOUBLE,
        7: DOUBLE,
        6: DOUBLE,
        5: DOUBLE,
        4: DOUBLE,
        3: DOUBLE,
        2: DOUBLE,
        1: DOUBLE,
    },
    5: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: DOUBLE,
        17: DOUBLE,
        16: DOUBLE,
        15: DOUBLE,
        14: DOUBLE,
        13: DOUBLE,
        12: DOUBLE,
        11: DOUBLE,
        10: DOUBLE,
        9: DOUBLE,
        8: DOUBLE,
        7: DOUBLE,
        6: DOUBLE,
        5: DOUBLE,
        4: DOUBLE,
        3: DOUBLE,
        2: DOUBLE,
        1: DOUBLE,
    },
    4: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: DOUBLE,
        17: DOUBLE,
        16: DOUBLE,
        15: DOUBLE,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    },
    3: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: DOUBLE,
        17: DOUBLE,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    },
    2: {
        21: STAY,
        20: STAY,
        19: STAY,
        18: DOUBLE,
        17: HIT,
        16: HIT,
        15: HIT,
        14: HIT,
        13: HIT,
        12: HIT,
        11: HIT,
        10: HIT,
        9: HIT,
        8: HIT,
        7: HIT,
        6: HIT,
        5: HIT,
        4: HIT,
        3: HIT,
        2: HIT,
        1: HIT,
    }
}

splitWorthy = {
    11: {
        20: false,
        18: false,
        16: true,
        14: false,
        12: false,
        10: false,
        8: false,
        6: false,
        4: false,
        2: true,
    },
    10: {
        20: false,
        18: false,
        16: true,
        14: false,
        12: false,
        10: false,
        8: false,
        6: false,
        4: false,
        2: true,
    },
    9: {
        20: false,
        18: true,
        16: true,
        14: false,
        12: false,
        10: false,
        8: false,
        6: false,
        4: false,
        2: true,
    },
    8: {
        20: false,
        18: true,
        16: true,
        14: false,
        12: false,
        10: false,
        8: false,
        6: false,
        4: false,
        2: true,
    },
    7: {
        20: false,
        18: false,
        16: true,
        14: true,
        12: false,
        10: false,
        8: false,
        6: false,
        4: false,
        2: true,
    },
    6: {
        20: false,
        18: true,
        16: true,
        14: true,
        12: true,
        10: false,
        8: true,
        6: true,
        4: true,
        2: true,
    },
    5: {
        20: false,
        18: true,
        16: true,
        14: true,
        12: true,
        10: false,
        8: true,
        6: true,
        4: true,
        2: true,
    },
    4: {
        20: false,
        18: true,
        16: true,
        14: true,
        12: true,
        10: false,
        8: false,
        6: true,
        4: true,
        2: true,
    },
    3: {
        20: false,
        18: true,
        16: true,
        14: true,
        12: true,
        10: false,
        8: false,
        6: true,
        4: true,
        2: true,
    },
    2: {
        20: false,
        18: true,
        16: true,
        14: true,
        12: true,
        10: false,
        8: false,
        6: true,
        4: true,
        2: true,
    }
}

const actionMap = {
    splitWorthy,
    hardTotal,
    softTotal
}

const getHandValueObject = hand => {
    let value = 0;
    let highValue = 0;
    let isSoft = false;
    let isSplitworthy = false;
    
    // is it splitty
    if (hand.length == 2) {
        if(hand[0].display == hand[1].display) {
            isSplitworthy = true;
        }
    }

    let numAces = 0;
    for (const card of hand) {
        if (card.display === "ACE") {
            numAces += 1;
        } else {
            value += card.value;
        }
    }
    highValue = value;

    if (numAces > 0) {
        for (let i = 0; i < numAces; i += 1) {
            if (highValue + 11 > 21) {
                highValue += 1;
            } else {
                highValue += 11;
            }
            value += 1;
        }
    }

    if (highValue <= 21 && highValue != value) {
        isSoft = true;
    }

    return {
        value,
        highValue,
        isSoft,
        isSplitworthy
    }
}

const whatDoIDo = (dealerCard, playerHand) => {
    let dealerValue = dealerCard.value;
    let {value, highValue, isSoft, isSplitworthy} = getHandValueObject(playerHand);

    let action = null;

    if (isSplitworthy) {
        action = actionMap.splitWorthy[`${dealerValue}`][`${value}`];
    } 
    if (action) {
        return SPLIT;
    }

    if (isSoft) {
        action = actionMap.softTotal[`${dealerValue}`][`${highValue}`];
    }else {
        action = actionMap.hardTotal[`${dealerValue}`][`${value}`];
    }
    return action;
}

const whatDoesDealerDo = (hand) => {

}

const runBlackJackRound = (deck, bankroll, minBet) => {
    // deal out player hand
    let playerHands = [];
    let playerHand = [];
    let dealerHand = [];
    playerHand.push(deck.pop());
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
    dealerHand.push(deck.pop());
    let playerHandObject = {bet: minBet, hand: playerHand}
    playerHands.push(playerHandObject);

    // runs player hand
    for (let i = 0; i < playerHands.length; i += 1) {
        let handObject = playerHands[i];
        let hand = handObject.hand;
        let bet = handObject.bet;
        while (true) {
            let action = whatDoIDo(dealerHand[0], hand);
            if (action === HIT) {
                hand.push(deck.pop());
            } else if (action === STAY) {
                break;
            } else if (action === DOUBLE) {
                hand.push(deck.pop());
                bet += bet;
                break;
            } else if (action === SPLIT) {
                let card = hand[0];
                hand = [card];
                hand.push(deck.pop());
                let newPlayerHand = {
                    hand = [card, deck.pop()],
                    bet: bet,
                }
                playerHands.push(newPlayerHand);
            }
        }
    }

    // player hands are done, so we run dealerHand
    while (true) {
        let dealerValue = getHandValueObject(dealerHand)
        if (dealerValue.isSoft) {
            if (dealerValue.highValue > 16) {
                break;
            } else {
                dealerHand.push(deck.pop());
            }
        } else {
            if (dealerValue.value > 16) {
                break;
            } else {
                dealerHand.push(deck.pop());
            }
        }
    }

    let dealerValue = getHandValueObject(dealerHand);
    let value = dealerValue.isSoft ? dealerValue.highValue : dealerValue.value;

    let totalWin = 0;

    for (let i = 0; i < playerHands.length; i += 1) {
        let handObject = playerHands[i];
        let playerValue = getHandValueObject(handObject.hand);
        if (playerValue == 21) {
            totalWin += handObject.bet * 1.5;
        } else if (playerValue > )
    }
    
}

const main = (numRounds, numDecks, bankroll, minBet) => {
    let round = 0;
    let deck = buildDeckStack(numDecks);
    deck = deck.shuffle;
    while(round <= numRounds) {
        round += 1;
    } 
}

const testWhatDoIDo = () => {
    console.assert(whatDoIDo(ACE, [KING, ACE]) === STAY, "11, 21")
    console.assert(whatDoIDo(ACE, [KING, KING]) === STAY, "11, 20")
    console.assert(whatDoIDo(ACE, [KING, NINE]) === STAY, "11, 19")
    console.assert(whatDoIDo(ACE, [KING, SEVEN]) === STAY, "11, 17")
    console.assert(whatDoIDo(ACE, [KING, SIX]) === HIT, "11, 16")
    console.assert(whatDoIDo(ACE, [KING, FIVE]) === HIT, "11, 15")
    console.assert(whatDoIDo(ACE, [KING, FOUR]) === HIT, "11, 14")
    console.assert(whatDoIDo(ACE, [KING, THREE]) === HIT, "11, 13")
    console.assert(whatDoIDo(ACE, [KING, TWO]) === HIT, "11, 12")
    console.assert(whatDoIDo(ACE, [ACE, NINE]) === STAY, "11, A9")
    console.assert(whatDoIDo(ACE, [ACE, EIGHT]) === STAY, "11, A8")
    console.assert(whatDoIDo(ACE, [ACE, SEVEN]) === HIT, "11, A7")
    console.assert(whatDoIDo(ACE, [ACE, SIX]) === HIT, "11, A6")
    console.assert(whatDoIDo(ACE, [ACE, FIVE]) === HIT, "11, A5")
    console.assert(whatDoIDo(ACE, [ACE, FOUR]) === HIT, "11, A4")
    console.assert(whatDoIDo(ACE, [ACE, THREE]) === HIT, "11, A3")
    console.assert(whatDoIDo(ACE, [ACE, TWO]) === HIT, "11, A2")
    console.assert(whatDoIDo(ACE, [ACE, ACE]) === SPLIT, "11, AA")
    console.assert(whatDoIDo(ACE, [EIGHT, EIGHT]) === SPLIT, "11, A7")
    console.assert(whatDoIDo(ACE, [TEN, TEN]) === STAY, "11, TT")













    


    //console.log(getHandValueObject([ACE, ACE, ACE, ACE]))

}

testWhatDoIDo();