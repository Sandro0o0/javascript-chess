let blackPieces = Array.from(document.getElementsByClassName(`black-pieces`));
let whitePieces = Array.from(document.getElementsByClassName(`white-pieces`));
let allPieces = blackPieces.concat(whitePieces);

let mappedPositons = [];

const starterPositions = [
  // Black pieces
  { id: "black-rook-1", position: "8a" },
  { id: "black-knight-1", position: "8b" },
  { id: "black-bishop-1", position: "8c" },
  { id: "black-queen", position: "8d" },
  { id: "black-king", position: "8e" },
  { id: "black-bishop-2", position: "8f" },
  { id: "black-knight-2", position: "8g" },
  { id: "black-rook-2", position: "8h" },

  { id: "black-pawn-1", position: "7a" },
  { id: "black-pawn-2", position: "7b" },
  { id: "black-pawn-3", position: "7c" },
  { id: "black-pawn-4", position: "7d" },
  { id: "black-pawn-5", position: "7e" },
  { id: "black-pawn-6", position: "7f" },
  { id: "black-pawn-7", position: "7g" },
  { id: "black-pawn-8", position: "7h" },

  // White pieces
  { id: "white-rook-1", position: "1a" },
  { id: "white-knight-1", position: "1b" },
  { id: "white-bishop-1", position: "1c" },
  { id: "white-queen", position: "1d" },
  { id: "white-king", position: "1e" },
  { id: "white-bishop-2", position: "1f" },
  { id: "white-knight-2", position: "1g" },
  { id: "white-rook-2", position: "1h" },

  { id: "white-pawn-1", position: "2a" },
  { id: "white-pawn-2", position: "2b" },
  { id: "white-pawn-3", position: "2c" },
  { id: "white-pawn-4", position: "2d" },
  { id: "white-pawn-5", position: "2e" },
  { id: "white-pawn-6", position: "2f" },
  { id: "white-pawn-7", position: "2g" },
  { id: "white-pawn-8", position: "2h" },
];

let selectedPiece = null;
let selectedPosition = null;

class pieces {
  constructor(piece, map) {
    this.piece = piece;
    this.map = map;
  }
  move(selectedPiece, selectedPosition) {
    this.selected = mappedPositons.find((e) => e.piece === selectedPiece);

    const parent = document.getElementById(selectedPosition);
    const child = document.getElementById(selectedPiece);

    // child.remove(x);
    parent.appendChild(child);

    if (this.selected) {
      this.map = selectedPosition;
    }
    console.log(mappedPositons);
  }

  update(newPosition) {
    this.map = newPosition;
    const changeElement = chessBoxes.find((e) => selectedPiece === e.id);
    changeElement.map = newPosition;
  }
}

function sortPieces() {
  for (let piece of starterPositions) {
    const findTarget = starterPositions.find((e) => piece.id === e.id);

    let element = document.createElement(`img`);
    element.id = piece.id;
    element.classList.add(
      "piece",
      piece.id.startsWith(`black`) ? `blacks` : `whites`,
    );
    element.src = `./assets/${piece.id.startsWith(`black`) ? `blacks` : `whites`}/${cutId(piece.id)}.png`;

    document.getElementById(`${findTarget.position}`).appendChild(element);
    const createElement = new pieces(piece.id, findTarget.position);
    mappedPositons.push(createElement);
  }
}

function cutId(pieceName) {
  const result = pieceName.replace(`-`, "_");
  if (result.includes(`king`) || result.includes(`queen`)) {
    return result;
  }
  return result.slice(0, result.length - 2);
}

sortPieces();
console.log(mappedPositons);
function selectPiece(select) {
  selectedPiece = select;
  console.log("Piece selected:", selectedPiece);
  return selectedPiece;
}

function selectPosition(position) {
  if (selectedPiece === null) {
    return;
  } else {
    selectedPosition = position;

    const pieceObj = mappedPositons.find((p) => p.piece === selectedPiece);
    pieceObj.move(selectedPiece, selectedPosition);
    selectedPiece = null;
    selectedPosition = null;
    pieceObj.update(selectedPosition);
  }
}

chessBoxes.forEach((piece) => {
  piece.addEventListener("click", () => {
    if (piece.innerHTML === "" && selectedPiece !== null) {
      selectPosition(piece.id);
    } else {
      selectPiece(piece.getElementsByClassName(`piece`)[0].id);
    }
  });
});
