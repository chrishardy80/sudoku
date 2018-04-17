let boardOne =        [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardTwo =        [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardThree =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

let boardDownOne =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardDownTwo =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let boardDownThree =  [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

let squaresOne =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let squaresTwo =      [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
let squaresThree =    [ [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

let completeBoard =    [[],[],[],[],[],[],[],[],[]];

let puzzleBoard =      [['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', ''],
                        ['', '', '', '', '', '', '', '', '']];


const printBoardOne = boardOne => {     console.log(boardOne[0].join(' | '));
                                        console.log(boardOne[1].join(' | '));
                                        console.log(boardOne[2].join(' | '));
                                        console.log('---------------------');};
const printBoardTwo = boardTwo => {     console.log(boardTwo[0].join(' | '));
                                        console.log(boardTwo[1].join(' | '));
                                        console.log(boardTwo[2].join(' | '));
                                        console.log('---------------------');};
const printBoardThree = boardThree => { console.log(boardThree[0].join(' | '));
                                        console.log(boardThree[1].join(' | '));
                                        console.log(boardThree[2].join(' | '));
                                        console.log('---------------------');};

const printBoardDownOne = boardDownOne => {
                                        console.log(boardDownOne[0].join(' | '));
                                        console.log(boardDownOne[1].join(' | '));
                                        console.log(boardDownOne[2].join(' | '));
                                        console.log('---------------------');};
const printBoardDownTwo = boardDownTwo => {
                                        console.log(boardDownTwo[0].join(' | '));
                                        console.log(boardDownTwo[1].join(' | '));
                                        console.log(boardDownTwo[2].join(' | '));
                                        console.log('---------------------');};
const printBoardDownThree = boardDownThree => {
                                        console.log(boardDownThree[0].join(' | '));
                                        console.log(boardDownThree[1].join(' | '));
                                        console.log(boardDownThree[2].join(' | '));
                                        console.log('---------------------');};

const printSquaresOne = squaresOne => { console.log(squaresOne[0].join(' | '));
                                        console.log(squaresOne[1].join(' | '));
                                        console.log(squaresOne[2].join(' | '));
                                        console.log('---------------------');};
const printSquaresTwo = squaresTwo => { console.log(squaresTwo[0].join(' | '));
                                        console.log(squaresTwo[1].join(' | '));
                                        console.log(squaresTwo[2].join(' | '));
                                        console.log('---------------------');};
const printSquaresThree = squaresThree => {
                                        console.log(squaresThree[0].join(' | '));
                                        console.log(squaresThree[1].join(' | '));
                                        console.log(squaresThree[2].join(' | '));
                                        console.log('---------------------');};

let numberFix = 1;
let sumBoardOne = 0;
let sumBoardTwo = 0;
let sumBoardThree = 0;
let fearCounter = 0;

const createBoardOne = boardOne => {
  for (let i = 0; i<boardOne.length; i++) {
    for (let j = 0; j<boardOne[i].length; j++) {
      for (let k = 0; k<boardOne[i][j].length; k++) {
        let number = Math.floor(Math.random()* 9 + 1);
        let n = boardOne[i][0].indexOf(number)*boardOne[i][1].indexOf(number)*boardOne[i][2].indexOf(number);
        let m = boardDownOne[k][j].indexOf(number);
        let o = squaresOne[j][0].indexOf(number)*squaresOne[j][1].indexOf(number)*squaresOne[j][2].indexOf(number);
        if (n === -1 && m === -1 && o === -1) {
          boardOne[i][j][k] = number;
          boardDownOne[k][j][i] = number;
          squaresOne[j][i][k] = number;
        }
        else {
          let counter = 0;
          while (boardOne[i][0].indexOf(numberFix)*
                 boardOne[i][1].indexOf(numberFix)*
                 boardOne[i][2].indexOf(numberFix) !== -1 ||
                 boardDownOne[k][j].indexOf(numberFix) !== -1 ||
                 squaresOne[j][0].indexOf(numberFix)*
                 squaresOne[j][1].indexOf(numberFix)*
                 squaresOne[j][2].indexOf(numberFix) !== -1
                ) {
                    counter++;
                    if (numberFix > 8) {
                          numberFix = 1;
                        }
                    else {
                      numberFix++;
                        }
                    if (counter > 9) {
                      break;
                      }
                  }
          if (counter < 9) {
          boardOne[i][j][k] = numberFix;
          boardDownOne[k][j][i] = numberFix;
          squaresOne[j][i][k] = numberFix;
          }


        }
      sumBoardOne = sumBoardOne + boardOne[i][j][k];
    }
  }
}
if (sumBoardOne === 135 ) {
  printBoardOne(boardOne);
  completeBoard[0].push(  boardOne[0][0][0], boardOne[0][0][1], boardOne[0][0][2],
                          boardOne[0][1][0], boardOne[0][1][1], boardOne[0][1][2],
                          boardOne[0][2][0], boardOne[0][2][1], boardOne[0][2][2]);
  completeBoard[1].push(  boardOne[1][0][0], boardOne[1][0][1], boardOne[1][0][2],
                          boardOne[1][1][0], boardOne[1][1][1], boardOne[1][1][2],
                          boardOne[1][2][0], boardOne[1][2][1], boardOne[1][2][2]);
  completeBoard[2].push(  boardOne[2][0][0], boardOne[2][0][1], boardOne[2][0][2],
                          boardOne[2][1][0], boardOne[2][1][1], boardOne[2][1][2],
                          boardOne[2][2][0], boardOne[2][2][1], boardOne[2][2][2]);
}
else {
  fearCounter++;
  //console.log(fearCounter);
  if (fearCounter === 20) {
    return;
  }
  else{
     boardOne =      [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

     boardDownOne =  [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];

    squaresOne =     [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];
                        sumBoardOne = 0;
                        i = 0;
                        j = 0;
                        k = 0;
  createBoardOne(boardOne);

}
}
};

const createBoardTwo = boardTwo => {
  for (let i = 0; i<boardTwo.length; i++) {
    for (let j = 0; j<boardTwo[i].length; j++) {
      for (let k = 0; k<boardTwo[i][j].length; k++) {
        let number = Math.floor(Math.random()* 9 + 1);
        let n = boardTwo[i][0].indexOf(number)*boardTwo[i][1].indexOf(number)*boardTwo[i][2].indexOf(number);
        let m = boardDownOne[k][j].indexOf(number)*boardDownTwo[k][j].indexOf(number)*boardDownThree[k][j].indexOf(number);
        let o = squaresTwo[j][0].indexOf(number)*squaresTwo[j][1].indexOf(number)*squaresTwo[j][2].indexOf(number);
        if (n === -1 && m === -1 && o === -1) {
          boardTwo[i][j][k] = number;
          boardDownTwo[k][j][i] = number;
          squaresTwo[j][i][k] = number;
        }
        else {
          let counter = 0;
          while (boardTwo[i][0].indexOf(numberFix)*
                 boardTwo[i][1].indexOf(numberFix)*
                 boardTwo[i][2].indexOf(numberFix) !== -1 ||
                 boardDownOne[k][j].indexOf(numberFix)*
                 boardDownTwo[k][j].indexOf(numberFix)*
                 boardDownThree[k][j].indexOf(numberFix)!== -1 ||
                 squaresTwo[j][0].indexOf(numberFix)*
                 squaresTwo[j][1].indexOf(numberFix)*
                 squaresTwo[j][2].indexOf(numberFix) !== -1
                ) {
                    counter++;
                    if (numberFix > 8) {
                          numberFix = 1;
                        }
                    else {
                      numberFix++;
                        }
                    if (counter > 9) {
                      break;
                      }
                  }
          if (counter < 9) {
          boardTwo[i][j][k] = numberFix;
          boardDownTwo[k][j][i] = numberFix;
          squaresTwo[j][i][k] = numberFix;
          }


        }
      sumBoardTwo = sumBoardTwo + boardTwo[i][j][k];
    }
  }
}
if (sumBoardTwo === 135 ) {
  printBoardTwo(boardTwo);
  completeBoard[3].push(  boardTwo[0][0][0], boardTwo[0][0][1], boardTwo[0][0][2],
                          boardTwo[0][1][0], boardTwo[0][1][1], boardTwo[0][1][2],
                          boardTwo[0][2][0], boardTwo[0][2][1], boardTwo[0][2][2]);
  completeBoard[4].push(  boardTwo[1][0][0], boardTwo[1][0][1], boardTwo[1][0][2],
                          boardTwo[1][1][0], boardTwo[1][1][1], boardTwo[1][1][2],
                          boardTwo[1][2][0], boardTwo[1][2][1], boardTwo[1][2][2]);
  completeBoard[5].push(  boardTwo[2][0][0], boardTwo[2][0][1], boardTwo[2][0][2],
                          boardTwo[2][1][0], boardTwo[2][1][1], boardTwo[2][1][2],
                          boardTwo[2][2][0], boardTwo[2][2][1], boardTwo[2][2][2]);
}
else {
  fearCounter++;
  //console.log(fearCounter);
  if (fearCounter === 20) {
    return;
  }
  else{
     boardTwo =      [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

     boardDownTwo =  [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];

    squaresTwo =     [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],];
                        sumBoardTwo = 0;
                        i = 0;
                        j = 0;
                        k = 0;
  createBoardTwo(boardTwo);

}
}
};

const createBoardThree = boardThree => {
  for (let i = 0; i<boardThree.length; i++) {
    for (let j = 0; j<boardThree[i].length; j++) {
      for (let k = 0; k<boardThree[i][j].length; k++) {
        let number = Math.floor(Math.random()* 9 + 1);
        let n = boardThree[i][0].indexOf(number)*boardThree[i][1].indexOf(number)*boardThree[i][2].indexOf(number);
        let m = boardDownOne[k][j].indexOf(number)*boardDownTwo[k][j].indexOf(number)*boardDownThree[k][j].indexOf(number);
        let o = squaresThree[j][0].indexOf(number)*squaresThree[j][1].indexOf(number)*squaresThree[j][2].indexOf(number);
        if (n === -1 && m === -1 && o === -1) {
          boardThree[i][j][k] = number;
          boardDownThree[k][j][i] = number;
          squaresThree[j][i][k] = number;
        }
        else {
          let counter = 0;
          while (boardThree[i][0].indexOf(numberFix)*
                 boardThree[i][1].indexOf(numberFix)*
                 boardThree[i][2].indexOf(numberFix) !== -1 ||
                 boardDownOne[k][j].indexOf(numberFix)*
                 boardDownTwo[k][j].indexOf(numberFix)*
                 boardDownThree[k][j].indexOf(numberFix)!== -1 ||
                 squaresThree[j][0].indexOf(numberFix)*
                 squaresThree[j][1].indexOf(numberFix)*
                 squaresThree[j][2].indexOf(numberFix) !== -1
                ) {
                    counter++;
                    if (numberFix > 8) {
                          numberFix = 1;
                        }
                    else {
                      numberFix++;
                        }
                    if (counter > 9) {
                      break;
                      }
                  }
          if (counter < 9) {
          boardThree[i][j][k] = numberFix;
          boardDownThree[k][j][i] = numberFix;
          squaresThree[j][i][k] = numberFix;
          }


        }
      sumBoardThree = sumBoardThree + boardThree[i][j][k];
    }
  }
}
if (sumBoardThree === 135 ) {
  printBoardThree(boardThree);
  completeBoard[6].push(  boardThree[0][0][0], boardThree[0][0][1], boardThree[0][0][2],
                          boardThree[0][1][0], boardThree[0][1][1], boardThree[0][1][2],
                          boardThree[0][2][0], boardThree[0][2][1], boardThree[0][2][2]);
  completeBoard[7].push(  boardThree[1][0][0], boardThree[1][0][1], boardThree[1][0][2],
                          boardThree[1][1][0], boardThree[1][1][1], boardThree[1][1][2],
                          boardThree[1][2][0], boardThree[1][2][1], boardThree[1][2][2]);
  completeBoard[8].push(  boardThree[2][0][0], boardThree[2][0][1], boardThree[2][0][2],
                          boardThree[2][1][0], boardThree[2][1][1], boardThree[2][1][2],
                          boardThree[2][2][0], boardThree[2][2][1], boardThree[2][2][2]);
  for (let ii = 0; ii<completeBoard.length; ii++) {
    for (let jj = 0; jj<completeBoard[ii].length; jj++) {
        let numberOne = Math.random();
          if (numberOne < 0.375) {
            puzzleBoard[ii][jj] = completeBoard[ii][jj];
          }
      }
    }
}

else {
  fearCounter++;
  //console.log(fearCounter);
  if (fearCounter === 5000) {
    return;
  }
  else{
     boardThree =      [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

     boardDownThree =  [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];

    squaresThree =     [  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
                        [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]];
                        sumBoardThree = 0;
                        i = 0;
                        j = 0;
                        k = 0;
  createBoardThree(boardThree);

}
}
};

createBoardOne(boardOne);
createBoardTwo(boardTwo);
createBoardThree(boardThree);
