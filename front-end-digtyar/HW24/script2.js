const TILES = [];
let counter = 0;
let score = document.createElement('div');
let gameContainer = document.querySelector('div')
gameContainer.append(score);

function initGame() {
  const tilesContainer = document.getElementById("tiles");
  tilesContainer.innerHTML = "";
  tilesContainer.addEventListener("click", onTileClick);
  TILES.length = 0; 
  let tileIndex = 0;
  counter = 0; 

  const randomIndex = getRandomIndex();
  for (let i = 0; i < 4; i++) {
    TILES[i] = [];
    for (let j = 0; j < 4; j++) {
      tileIndex = randomIndex();
      TILES[i].push(createTileEl(tileIndex));
    }
  }

  checkRender(TILES);
  renderTiles();
  createCounter();
}

function getRandomIndex() {
  let availableIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return function () {
    const randomIndex = Math.floor(Math.random() * availableIdx.length);
    const val = availableIdx[randomIndex];
    availableIdx = availableIdx.filter((el) => el !== val);
    return val;
  };
}

function createTileEl(text) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.textContent = text;
  return tile;
}

function renderTiles() {
  const tilesContainer = document.getElementById("tiles");
  tilesContainer.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      tilesContainer.append(TILES[i][j]);
    }
  }
}

function onTileClick(e) {
  if (e.target.classList.contains("tile")) {
    const id = +e.target.textContent;
    if (id) {
      swapTiles(id);
    }
  }
  renderTiles();
  chekEndGame(TILES);
}

function swapTiles(id) {
  const [tileX, tileY] = findTileCoordById(id);
  const [emptyX, emptyY] = findEmptyTileCoords();

  // are they neibors
  if (
    (tileX === emptyX && Math.abs(tileY - emptyY) === 1) ||
    (tileY === emptyY && Math.abs(tileX - emptyX) === 1)
  ) {
    const temp = TILES[tileX][tileY];
    TILES[tileX][tileY] = TILES[emptyX][emptyY];
    TILES[emptyX][emptyY] = temp;
    score.textContent = `Score: ${counter += 1}`;
  }
}

function findEmptyTileCoords() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (TILES[i][j].textContent === "") {
        return [i, j];
      }
    }
  }
  
}

function findTileCoordById(id) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (TILES[i][j].textContent == id) {
        return [i, j];
      }
    }
  }
  
}

function createCounter(){
  if(counter == 0){
  counter = 0;
  score.textContent = `Score: ${counter}`;
  }
  else {
    counter = 0;
  }
}

function chekEndGame(TILES){
  let newArr = [];
  for(let i = 0; i < 15; i++){
    newArr.push(+TILES.flat()[i].innerHTML)
   }
   if(JSON.stringify(newArr) === JSON.stringify(newArr.sort((a,b) => a-b))){
     alert(`Игра окончена со счетом: ${counter}`)
     initGame()
   }
  }

  function checkRender(TILES){
  let newArr = [];
  let counterNums = 0;
  for(let i = 0; i < 15; i++){
    newArr.push(+TILES.flat()[i].innerHTML)
   }
  for(let i = 0; i < 14 ; i++){
    for(let j = i+1; j < newArr.length; j++){
      if(newArr[i] > newArr[j]){
        counterNums++;
        }
      }
    }
    if(counterNums %2 !== 0){
      getRandomIndex()
      counterNums = 0;
  }
}
