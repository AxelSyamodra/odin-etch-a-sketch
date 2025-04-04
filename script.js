const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  const box = document.createElement("div");
  box.classList.add("box");

  box.addEventListener("mouseover", () => {
    box.classList.add("active");
  });

  container.append(box);
}
