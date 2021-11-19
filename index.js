const colOne = document.querySelectorAll(".col-1");

////////////////

const playerClicks = document.querySelectorAll(".squares-click");

for (i = 0; i < playerClicks.length; i++) {
  playerClicks[i].addEventListener("click", (e) => {
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
  });
}
