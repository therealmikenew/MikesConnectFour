const playerClicks = document.querySelectorAll(".squares-click");
const colZero = document.querySelector("#squ-0");
const colOne = document.querySelector("#squ-1");
const colTwo = document.querySelector("#squ-2");
const colThree = document.querySelector("#squ-3");
const colFour = document.querySelector("#squ-4");
const colFive = document.querySelector("#squ-5");
const colSix = document.querySelector("#squ-6");

let clicks = 0;

let color = "red";

const currentColor = () => {
  clicks % 2 === 0 ? (color = "red") : (color = "black");
};

console.log(clicks);
console.log(color);

//playermoves events

colZero.addEventListener("click", () => {
  if (
    document.getElementById("squ-42").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-42").style = "background-color: black";
  } else if (
    document.getElementById("squ-35").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-35").style = "background-color: black";
  } else if (
    document.getElementById("squ-28").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-28").style = "background-color: black";
  } else if (
    document.getElementById("squ-21").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-21").style = "background-color: black";
  } else if (
    document.getElementById("squ-14").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-14").style = "background-color: black";
  } else if (
    document.getElementById("squ-7").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-7").style = "background-color: black";
  }

  clicks++;
  currentColor();
  console.log(clicks);
  console.log(color);
});

colOne.addEventListener("click", () => {
  if (
    document.getElementById("squ-43").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-43").style = "background-color: black";
  } else if (
    document.getElementById("squ-36").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-36").style = "background-color: black";
  } else if (
    document.getElementById("squ-29").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-29").style = "background-color: black";
  } else if (
    document.getElementById("squ-22").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-22").style = "background-color: black";
  } else if (
    document.getElementById("squ-15").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-15").style = "background-color: black";
  } else if (
    document.getElementById("squ-8").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-8").style = "background-color: black";
  }
});

colTwo.addEventListener("click", () => {
  if (
    document.getElementById("squ-44").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-44").style = "background-color: black";
  } else if (
    document.getElementById("squ-37").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-37").style = "background-color: black";
  } else if (
    document.getElementById("squ-30").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-30").style = "background-color: black";
  } else if (
    document.getElementById("squ-23").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-23").style = "background-color: black";
  } else if (
    document.getElementById("squ-16").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-16").style = "background-color: black";
  } else if (
    document.getElementById("squ-9").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-9").style = "background-color: black";
  }
});

colThree.addEventListener("click", () => {
  if (
    document.getElementById("squ-45").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-45").style = "background-color: black";
  } else if (
    document.getElementById("squ-38").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-38").style = "background-color: black";
  } else if (
    document.getElementById("squ-31").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-31").style = "background-color: black";
  } else if (
    document.getElementById("squ-24").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-24").style = "background-color: black";
  } else if (
    document.getElementById("squ-17").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-17").style = "background-color: black";
  } else if (
    document.getElementById("squ-10").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-10").style = "background-color: black";
  }
});

colFour.addEventListener("click", () => {
  if (
    document.getElementById("squ-46").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-46").style = "background-color: black";
  } else if (
    document.getElementById("squ-39").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-39").style = "background-color: black";
  } else if (
    document.getElementById("squ-32").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-32").style = "background-color: black";
  } else if (
    document.getElementById("squ-25").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-25").style = "background-color: black";
  } else if (
    document.getElementById("squ-18").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-18").style = "background-color: black";
  } else if (
    document.getElementById("squ-11").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-11").style = "background-color: black";
  }
});

colFive.addEventListener("click", () => {
  if (
    document.getElementById("squ-47").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-47").style = "background-color: black";
  } else if (
    document.getElementById("squ-40").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-40").style = "background-color: black";
  } else if (
    document.getElementById("squ-33").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-33").style = "background-color: black";
  } else if (
    document.getElementById("squ-26").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-26").style = "background-color: black";
  } else if (
    document.getElementById("squ-19").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-19").style = "background-color: black";
  } else if (
    document.getElementById("squ-12").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-12").style = "background-color: black";
  }
});

colSix.addEventListener("click", () => {
  if (
    document.getElementById("squ-48").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-48").style = "background-color: black";
  } else if (
    document.getElementById("squ-41").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-41").style = "background-color: black";
  } else if (
    document.getElementById("squ-34").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-34").style = "background-color: black";
  } else if (
    document.getElementById("squ-27").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-27").style = "background-color: black";
  } else if (
    document.getElementById("squ-20").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-20").style = "background-color: black";
  } else if (
    document.getElementById("squ-13").getAttribute("style") ===
    "background-color: white"
  ) {
    document.getElementById("squ-13").style = "background-color: black";
  }
});
