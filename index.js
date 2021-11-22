/////////////////global variables
const playerClicks = document.querySelectorAll(".squares-click");
const colZero = document.querySelector("#squ-0");
const colOne = document.querySelector("#squ-1");
const colTwo = document.querySelector("#squ-2");
const colThree = document.querySelector("#squ-3");
const colFour = document.querySelector("#squ-4");
const colFive = document.querySelector("#squ-5");
const colSix = document.querySelector("#squ-6");

const listWinner = document.querySelector("#list-winner");

const squares = document.querySelectorAll(".squares");

let clicks = 0;

let color = "hotpink";

let modal = document.getElementById("myModal");

const nextPlayer = document.querySelector("#nextplayer");
console.log(nextPlayer);

const displayPlayerTurn = () => {
  if (clicks % 2 === 0) {
    nextPlayer.innerText = "Player One next";
    console.log(clicks);
  } else if (clicks % 2 !== 0) {
    nextPlayer.innerText = "Player Two next";
    console.log(clicks);
  }
};

// //////////////////////////////////functions

const displayWinner = () => {
  modal.style.display = "block";
  if (clicks % 2 === 0) {
    listWinner.innerText = "Player One";
  } else {
    listWinner.innerText = "Player Two";
  }
};

const currentColor = () => {
  clicks % 2 === 0 ? (color = "hotpink") : (color = "black");
};

const playMusic = () => {
  let myMusic = new Audio("./music/music.m4a");
  myMusic.play();
};

////////////// playermoves events

// const gameover = () => {
//   gameActive = false;
//   console.log("gameover?");
//   colZero.removeEventListener("click", () => {});
//   colOne.removeEventListener("click", () => {});
//   colTwo.removeEventListener("click", () => {});
//   colThree.removeEventListener("click", () => {});
//   colFour.removeEventListener("click", () => {});
//   colFive.removeEventListener("click", () => {});
//   colSix.removeEventListener("click", () => {});
// };

const playGame = () => {
  const checkWins = () => {
    const gameWins = [
      [35, 36, 37, 38],
      [36, 37, 38, 39],
      [37, 38, 39, 40],
      [38, 39, 40, 41],
      [28, 29, 30, 31],
      [29, 30, 31, 32],
      [30, 31, 32, 33],
      [31, 32, 33, 34],
      [21, 22, 23, 24],
      [22, 23, 24, 25],
      [23, 24, 25, 26],
      [24, 25, 26, 27],
      [14, 15, 16, 17],
      [15, 16, 17, 18],
      [16, 17, 18, 19],
      [17, 18, 19, 20],
      [7, 8, 9, 10],
      [8, 9, 10, 11],
      [9, 10, 11, 12],
      [10, 11, 12, 13],
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [0, 7, 14, 21],
      [7, 14, 21, 28],
      [14, 21, 28, 35],
      [1, 8, 15, 22],
      [8, 15, 22, 29],
      [15, 22, 29, 36],
      [2, 9, 16, 23],
      [9, 16, 23, 30],
      [16, 23, 30, 37],
      [3, 10, 17, 24],
      [10, 17, 24, 31],
      [17, 24, 31, 38],
      [4, 11, 18, 25],
      [11, 18, 25, 32],
      [18, 25, 32, 39],
      [5, 12, 19, 26],
      [12, 19, 26, 33],
      [19, 26, 33, 40],
      [6, 13, 20, 27],
      [13, 20, 27, 34],
      [20, 27, 34, 41],
      [0, 8, 16, 24],
      [1, 9, 17, 25],
      [2, 10, 18, 26],
      [3, 11, 19, 27],
      [6, 12, 18, 24],
      [5, 11, 17, 23],
      [4, 10, 16, 22],
      [3, 9, 15, 21],
      [7, 15, 23, 31],
      [8, 16, 24, 32],
      [9, 17, 25, 33],
      [10, 18, 26, 34],
      [13, 19, 25, 31],
      [12, 18, 24, 30],
      [11, 17, 23, 29],
      [10, 16, 22, 28],
      [14, 22, 30, 38],
      [15, 23, 31, 39],
      [16, 24, 32, 40],
      [17, 25, 33, 41],
      [20, 26, 32, 38],
      [19, 25, 31, 37],
      [18, 24, 30, 36],
      [17, 23, 29, 35],
    ];

    for (i = 0; i < gameWins.length; i++) {
      let squ1 = squares[gameWins[i][0]];
      let squ2 = squares[gameWins[i][1]];
      let squ3 = squares[gameWins[i][2]];
      let squ4 = squares[gameWins[i][3]];

      if (
        squ1.style.backgroundColor === `${color}` &&
        squ2.style.backgroundColor === `${color}` &&
        squ3.style.backgroundColor === `${color}` &&
        squ4.style.backgroundColor === `${color}`
      ) {
        displayWinner();
      }
    }
  };

  colZero.addEventListener("click", () => {
    if (
      document.getElementById("squ-42").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-42").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-35").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-35").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-28").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-28").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-21").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-21").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-14").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-14").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-7").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-7").style = `background-color: ${color}`;
    }

    checkWins();
    clicks++;
    currentColor();
    displayPlayerTurn();
  });

  colOne.addEventListener("click", () => {
    if (
      document.getElementById("squ-43").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-43").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-36").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-36").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-29").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-29").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-22").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-22").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-15").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-15").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-8").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-8").style = `background-color: ${color}`;
    }

    checkWins();
    clicks++;
    currentColor();
    displayPlayerTurn();
  });

  colTwo.addEventListener("click", () => {
    if (
      document.getElementById("squ-44").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-44").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-37").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-37").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-30").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-30").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-23").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-23").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-16").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-16").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-9").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-9").style = `background-color: ${color}`;
    }

    checkWins();
    clicks++;
    currentColor();
    displayPlayerTurn();
  });

  colThree.addEventListener("click", () => {
    if (
      document.getElementById("squ-45").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-45").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-38").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-38").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-31").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-31").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-24").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-24").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-17").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-17").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-10").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-10").style = `background-color: ${color}`;
    }

    checkWins();
    clicks++;
    currentColor();
    displayPlayerTurn();
  });

  colFour.addEventListener("click", () => {
    if (
      document.getElementById("squ-46").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-46").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-39").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-39").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-32").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-32").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-25").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-25").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-18").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-18").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-11").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-11").style = `background-color: ${color}`;
    }

    checkWins();
    clicks++;
    currentColor();
    displayPlayerTurn();
  });

  colFive.addEventListener("click", () => {
    if (
      document.getElementById("squ-47").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-47").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-40").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-40").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-33").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-33").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-26").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-26").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-19").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-19").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-12").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-12").style = `background-color: ${color}`;
    }

    checkWins();
    clicks++;
    currentColor();
    displayPlayerTurn();
  });

  colSix.addEventListener("click", () => {
    if (
      document.getElementById("squ-48").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-48").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-41").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-41").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-34").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-34").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-27").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-27").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-20").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-20").style = `background-color: ${color}`;
    } else if (
      document.getElementById("squ-13").getAttribute("style") ===
      "background-color: white"
    ) {
      document.getElementById("squ-13").style = `background-color: ${color}`;
    }

    checkWins();
    clicks++;
    currentColor();
    displayPlayerTurn();
  });
};
playGame();
