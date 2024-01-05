const Moves = ["Rock", "Paper", "Scissors"];
const Score = {
  Wins: 0,
  Ties: 0,
  Loses: 0,
};

// Pick a randome select for cup
function CUP_pick() {
  let CPUmove;
  let $random = Math.random();
  if ($random < 1 / 3) {
    CPUmove = Moves[0];
  } else if ($random < 2 / 3) {
    CPUmove = Moves[1];
  } else {
    CPUmove = Moves[2];
  }
  return CPUmove;
}

//The Final Resault
function win_or_lose(PlayerMove) {
  let CPUmove = CUP_pick();
  Choose(PlayerMove);
  Choose2(CPUmove);
  if (PlayerMove == CPUmove) {
    Score.Ties += 1;
    document.getElementById("T").innerHTML = Score.Ties;
    document.getElementById("End").innerHTML = "Ties";
    window.alert("Ties");
  } else if (
    (PlayerMove == "Rock" && CPUmove == "Scissors") ||
    (PlayerMove == "Paper" && CPUmove == "Rock") ||
    (PlayerMove == "Scissors" && CPUmove == "Paper")
  ) {
    Score.Wins += 1;
    document.getElementById("W").innerHTML = Score.Wins;
    document.getElementById("End").innerHTML = "You Won";
    window.alert("You Won!!!!");
  } else {
    Score.Loses += 1;
    document.getElementById("L").innerHTML = Score.Loses;
    document.getElementById("End").innerHTML = "CPU Won";
    window.alert("You Lost Sorry!");
  }
  console.log(CPUmove)
}

function Choose2(CPU) {
  if (CPU == "Rock") {
    return (document.getElementById("bot").data =
      "images/stone-rock-svgrepo-com.svg");
  } else if (CPU == "Paper") {
    return (document.getElementById("bot").data =
      "images/written-paper-svgrepo-com.svg");
  } else {
    return (document.getElementById("bot").data =
      "images/scissors-svgrepo-com.svg");
  }
}
function Choose(Player) {
  if (Player == "Rock") {
    return (document.getElementById("you").data =
      "images/stone-rock-svgrepo-com.svg");
  } else if (Player == "Paper") {
    return (document.getElementById("you").data =
      "images/written-paper-svgrepo-com.svg");
  } else {
    return (document.getElementById("you").data =
      "images/scissors-svgrepo-com.svg");
  }
}
//Reset Score
function Reset() {
  Score.Wins = 0;
  Score.Ties = 0;
  Score.Loses = 0;
  document.getElementById("W").innerHTML = Score.Wins;
  document.getElementById("T").innerHTML = Score.Ties;
  document.getElementById("L").innerHTML = Score.Loses;
  document.getElementById("End").innerHTML = "";
  document.getElementById("you").data = "";
  document.getElementById("bot").data = "";
}
