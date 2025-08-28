const heartCount = document.getElementById("heartCount");
const heartIcons = document.querySelectorAll(".heart-icon");

for (const heart of heartIcons) {
  heart.addEventListener("click", () => {
    
    if(heart.classList.contains("fa-regular"))heart.classList.replace("fa-regular", "fa-solid");
    else if (heart.classList.contains("fa-solid"))heart.classList.replace("fa-solid","fa-regular");

    let count = parseInt(heartCount.innerText);
    count++;
    console.log(count);
    heartCount.innerText = count;
  });
}
