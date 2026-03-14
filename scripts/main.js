const chessBoxes = Array.from(document.getElementsByClassName(`chess-box`));
const chessBoxRows = [];
const chessBoxColumns = [];
let rowPack = [];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];
let numeric = ["8", "7", "6", "5", "4", "3", "2", "1"];

const claculatedPositons = [
  chessBoxes.map((box) => ({
    id: box.id,
    top: box.offsetTop,
    left: box.offsetLeft,
  })),
];

// Create Rows ======================================================>

for (let i = 0; i < chessBoxes.length; i++) {
  rowPack.push(chessBoxes[i]);
  if (rowPack.length % 8 === 0) {
    chessBoxRows.push(rowPack);
    rowPack = [];
  }
}
// Create Rows ======================================================>

// Create Columns ======================================================>
let columnPack = [];
for (let i = 0; i < alphabet.length; i++) {
  for (let j = 0; j < numeric.length; j++) {
    let element = document.getElementById(`${numeric[j]}${alphabet[i]}`);
    columnPack.push(element);
    if (columnPack.length % 8 === 0) {
      chessBoxColumns.push(columnPack);
      columnPack = [];
    }
  }
}
// Create Columns ======================================================>

// Chess Pattern =======================================================>
for (let i = 0; i < chessBoxRows.length; i++) {
  for (let j = 0; j < chessBoxRows[i].length; j++) {
    chessBoxRows[i][j].style.backgroundColor =
      (i + j) % 2 === 0 ? "green" : "#f4f4f4";
  }
}
// Chess Pattern =======================================================>
