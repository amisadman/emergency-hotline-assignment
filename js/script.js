const heartCount = document.getElementById("heartCount");
const heartIcons = document.querySelectorAll(".heart-icon");

for (const heart of heartIcons) {
  heart.addEventListener("click", () => {
    if (heart.classList.contains("fa-regular"))
      heart.classList.replace("fa-regular", "fa-solid");
    else if (heart.classList.contains("fa-solid"))
      heart.classList.replace("fa-solid", "fa-regular");

    let count = parseInt(heartCount.innerText);
    count++;
    //console.log(count);
    heartCount.innerText = count;
  });
}

const coinCount = document.getElementById("coinCount");
const callButton = document.querySelectorAll(".call-button");
const history = document.getElementById("history");

for (const btn of callButton) {
  btn.addEventListener("click", () => {
    let coins = parseInt(coinCount.innerText);
    if (coins < 20) {
      alert("Not Enough Coin!!! Please Reload...");
      return;
    }

    const card = btn.closest(".card");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;
    // console.log(serviceName);
    // console.log(serviceNumber);

    alert(`Calling ${serviceName} at ${serviceNumber}`);
    coins -= 20;
    coinCount.innerText = coins;
  });
}
