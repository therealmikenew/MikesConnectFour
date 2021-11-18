const playerClicks = document.querySelectorAll(".squares-click");

for (i = 0; i < playerClicks.length; i++) {
  playerClicks[i].addEventListener("click", (e) => {
    console.log(e.target.getAttribute("id"));
    console.log(document.getElementById("squ-7"));

    if (e.target.getAttribute("id") === "squ-0") {
      if (
        document.getElementById("squ-7").getAttribute("style") ===
        "background-color: white"
      ) {
        //console.log(document.getElementById("squ-7").style.color);
        document.getElementById("squ-7").style = "background-color: black";
      }
    }
  });
}

// const gameMove = () => {
//     if () {

//     }

// }
