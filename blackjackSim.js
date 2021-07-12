let ACE = {
    display: "ACE",
    short: "A",
    value: 11
}
let KING = {
    display: "KING",
    short: "K",
    value: 10
}
let QUEEN = {
    display: "QUEEN",
    short: "Q",
    value: 10
}
let JACK = {
    display: "JACK",
    short: "J",
    value: 10,
}
let TEN = {
    display: "10",
    short: "T",
    value: 10
}
let NINE = {
    display: "9",
    short: "9",
    value: 9,
}
let EIGHT = {
    display: "8",
    short: "8",
    value: 8
}
let SEVEN = {
    display: "7",
    short: "7",
    value: 7
}
let SIX = {
    display: "6",
    short: "6",
    value: 6
}
let FIVE = {
    display: "5",
    short: "5",
    value: 5
}
let FOUR = {
    display: "4",
    short: "4",
    value: 4
}
let THREE = {
    display: "3",
    short: "3",
    value: 3,
}
let TWO = {
    display: "2",
    short: "2",
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

const printHand = (hand) => {
    let handString = '';
    for (const card of hand) {
        handString = handString + `[${card.short}]`;
    }
    console.log(handString)
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

    console.log(`Dealer is showing: [${dealerHand[0].short}]`)

    // runs player hand
    for (let i = 0; i < playerHands.length; i += 1) {
        console.log("Playing new hand");
        let handObject = playerHands[i];
        let hand = handObject.hand;
        let bet = handObject.bet;
        while (true) {
            printHand(hand)
            // if user busted then we break
            let playerValueObject = getHandValueObject(hand);
            let playerValue = playerValueObject.isSoft ? playerValueObject.highValue : playerValueObject.value;
            if (playerValue > 21) {
                break;
            }
            let action = whatDoIDo(dealerHand[0], hand);
            if (action === HIT) {
                console.log("HITTING")
                hand.push(deck.pop());
            } else if (action === STAY) {
                console.log("STAYING");
                break;
            } else if (action === DOUBLE) {
                console.log("DOUBLING");
                hand.push(deck.pop());
                bet += bet;
                break;
            } else if (action === SPLIT) {
                console.log("SPLITTING")
                let card = hand[0];
                hand = [card];
                hand.push(deck.pop());
                let newPlayerHand = {
                    hand: [card, deck.pop()],
                    bet: bet,
                }
                playerHands.push(newPlayerHand);
            }
        }
        console.log("Ending hand");
        printHand(hand);
    }

    let totalWin = 0;
    let pushes = 0;
    let wins = 0;
    let losses = 0;
    let totalBusted = 0;

    // if the player busted we need to figure out whether we even need to do the dealer play
    for (let i = 0; i < playerHands.length; i += 1) {
        let playerValueObject = getHandValueObject(playerHands[i].hand);
        let playerValue = playerValueObject.isSoft ? playerValueObject.highValue : playerValueObject.value;
        console.log(`Player hand ${i + 1} has value: ${playerValue}`);
        if (playerValue > 21) {
            console.log(`Player busted, moving on...`)
            // the player busted;
            totalBusted += 1;
            totalWin -= playerHands[i].bet;
            losses += 1;
        }
    }

    if (totalBusted === playerHands.length) {
        console.log("Player busted all hands, moving onto next round")
        // we dont run the dealer portion
        return {
            totalWin,
            wins,
            losses,
            pushes,
        }
    }

    // player hands are done, so we run dealerHand
    console.log("Dealer flipping card...")
    while (true) {
        printHand(dealerHand);
        let dealerValue = getHandValueObject(dealerHand)
        if (dealerValue.isSoft) {
            console.log(`Dealer has a soft ${dealerValue.highValue}`);
            if (dealerValue.highValue > 16) {
                break;
            } else {
                console.log("Dealer hitting...")
                dealerHand.push(deck.pop());
            }
        } else {
            console.log(`Dealer has a ${dealerValue.value}`);
            if (dealerValue.value > 16) {
                break;
            } else {
                console.log("Dealer hitting...")
                dealerHand.push(deck.pop());
            }
        }
    }
    printHand(dealerHand);

    let dealerValueObject = getHandValueObject(dealerHand);
    let dealerValue = dealerValueObject.isSoft ? dealerValueObject.highValue : dealerValueObject.value;


    for (let i = 0; i < playerHands.length; i += 1) {
        let handObject = playerHands[i];
        let playerValueObject = getHandValueObject(handObject.hand);
        let playerValue = playerValueObject.isSoft ? playerValueObject.highValue : playerValueObject.value;
        if ((playerValue > dealerValue && playerValue <= 21) || (dealerValue > 21 && playerValue <= 21)) {
            console.log(`Hand ${i + 1} wins`);
            // playerWins
            totalWin += handObject.bet;
            wins += 1;
        } else if (playerValue < dealerValue  && dealerValue <= 21) {
            console.log(`Hand ${i + 1} loses`)
            // player loses
            totalWin -= handObject.bet;
            losses += 1;
        } else if (playerValue === dealerValue && dealerValue <= 21) {
            console.log(`Hand ${i + 1} pushes`);
            pushes += 1;
        }
    }

    return {
        totalWin,
        wins,
        losses,
        pushes,
    }
    
}

const main = (numRounds, numDecks, bankroll, baseBet) => {
    let round = 0;
    let minBet = baseBet
    let deck = buildDeckStack(numDecks);
    deck = shuffle(deck);
    let totalWins = 0;
    let totalLosses = 0;
    let totalPushes = 0;
    let maxLossesInARow = 0;
    let maxWinsInARow = 0;
    let lossesInARow = 0;
    let winsInARow = 0;
    while (round < numRounds && bankroll > minBet) {
        while (deck.length > 15 && round < numRounds && bankroll >= minBet) {
            console.log(`----------------- ROUND ${round} -----------------`)
            const { totalWin, wins, losses, pushes} = runBlackJackRound(deck, bankroll, minBet)
            totalWins += wins;
            totalLosses += losses;
            totalPushes += pushes;
            bankroll += totalWin;
            if (totalWin < 0) {
                // thats a loss
                lossesInARow += 1;
                winsInARow = 0;
                minBet = minBet * 2;
            } else if (totalWin >= minBet) {
                lossesInARow = 0;
                winsInARow += 1;
                minBet = baseBet;
            } else {
                minBet = minBet - totalWin;
            }
            if (lossesInARow > maxLossesInARow) {
                maxLossesInARow = lossesInARow;
            }
            if (winsInARow > maxWinsInARow) {
                maxWinsInARow = winsInARow;
            }
            round += 1;
        }
        deck = shuffle(buildDeckStack(numDecks));
    }
    if (bankroll < minBet) {
        console.log(`MARTINGALE FAILED! - Min Bet: ${minBet}`)
    }
    console.log(`BANKROLL: ${bankroll}`)
    console.log(`TOTAL WINS: ${totalWins}`);
    console.log(`TOTAL LOSSES: ${totalLosses}`);
    console.log(`TOTAL PUSHES: ${totalPushes}`);
    console.log(`MAX WINS IN A ROW: ${maxWinsInARow}`);
    console.log(`MAX LOSSES IN A ROW: ${maxLossesInARow}`);

    console.log(`% WIN: ${(totalWins / (totalLosses + totalWins)) * 100}`)
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

}

testWhatDoIDo();
main(10000, 8, 5000, 1)

// 1
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096