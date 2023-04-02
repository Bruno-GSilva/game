const ground = document.querySelector("#grid > .item:nth-child(1)");

function changeImagePlayer(v1, v2, v3, v4) {
  left.style.opacity = v1;
  right.style.opacity = v2;
  front.style.opacity = v3;
  back.style.opacity = v4;
}

let x = 1;
let y = 1;

function mover() {
  ground.style.gridRowStart = y;
  ground.style.gridColumnStart = x;
}

document.addEventListener("keydown", (event) => {
  console.log("y:", y);
  console.log("x:", x);

  if (event.key === "a" && x > 1) {
    // Move para a esquerda
    changeImagePlayer("1", "0", "0", "0");
    x--;
    mover();
  } else if (event.key === "w" && y > 1) {
    // Move para cima
    changeImagePlayer("0", "0", "0", "1");
    y--;
    mover();
  } else if (event.key === "s" && y < 4) {
    // Move para baixo
    changeImagePlayer("0", "0", "1", "0");
    y++;
    mover();
  } else if (event.key === "d" && x < 4) {
    // Move para a direita
    changeImagePlayer("0", "1", "0", "0");
    x++;
    mover();
  }
});
