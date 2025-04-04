const container = document.querySelector(".container");
const button = document.querySelector(".newGridBtn");
const buttonClear = document.querySelector(".clearBtn");

function createGrid(size) {
  container.innerHTML = ""; // Clear previous grid
  const boxSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    box.addEventListener("mouseover", () => {
      box.classList.add("active");
    });

    container.append(box);
  }
}

button.addEventListener("click", () => {
  let newSize = prompt("Enter number of squares per side (max 100):");

  if (newSize !== null) {
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
      createGrid(newSize);
    } else {
      alert("Please enter a number between 1 and 100.");
    }
  }
});

buttonClear.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => box.classList.remove("active"));
});

createGrid(16); /* initial grid 16x16 */
