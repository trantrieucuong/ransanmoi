// Kích thước của mỗi ô trên bảng
const CELL_SIZE = 20;

// Số ô trên chiều ngang và chiều dọc của bảng
const BOARD_SIZE = 20;

// Tạo bảng
const board = document.getElementById("game-board");
board.style.width = `${CELL_SIZE * BOARD_SIZE}px`;
board.style.height = `${CELL_SIZE * BOARD_SIZE}px`;

// Tạo rắn
let snake = [{x: 10, y: 10}];

// Tạo mồi
let food = {x: 15, y: 15};

// Hướng di chuyển ban đầu của rắn
let direction = "right";

// Di chuyển rắn
function moveSnake() {
  // Xoá đuôi rắn
  snake.pop();

  // Thêm đầu rắn theo hướng di chuyển mới
  let head = snake[0];
  if (direction === "right") {
    head = {x: head.x + 1, y: head.y};
  } else if (direction === "left") {
    head = {x: head.x - 1, y: head.y};
  } else if (direction === "up") {
    head = {x: head.x, y: head.y - 1};
  } else if (direction === "down") {
    head = {x: head.x, y: head.y + 1};
  }
  snake.unshift(head);

  // Kiểm tra rắn có ăn được mồi không
  if (head.x === food.x && head.y === food.y) {
    // Tạo mồi mới
    food = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  }
}

// Vẽ rắn và mồi
function draw() {
  // Xoá toàn bộ bảng
  board.innerHTML = "";

  // Vẽ rắn
  snake.forEach((cell) => {
    const element = document.createElement("div");
    element.style.width = `${CELL_SIZE}px`;
    element.style.height = `${CELL_SIZE}px`;
    element.style.backgroundColor = "#333";
    element.style.position = "absolute";
    element.style.left = `${cell.x * CELL_SIZE}px`;
    element.style.top = `${cell.y * CELL_SIZE}px`;
    board.appendChild(element);
  });

  // Vẽ mồi
  const element = document.createElement("div");
  element.style.width = `${CELL_SIZE}px`;
  element.style.height = `${CELL_SIZE}px`;
  element.style.backgroundColor = "red";
  element.style.position = "absolute";
  element.style.left = `${food.x * CELL_SIZE}px`;
  element.style.top
}
