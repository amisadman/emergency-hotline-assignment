//--------------------------------------------------------------------------------------
/*
    Heart counter part
*/
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
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
/*
    Call and add call history part
*/
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
    const callTime = new Date().toLocaleTimeString();
    // console.log(callTime);

    const li = document.createElement("li");
    li.innerHTML = `
    <div class="flex justify-between items-center p-3 rounded-lg bg-[#fafafa] shadow">
      <div class="flex flex-col">
        <span class="text-[#111111]">${serviceName}</span>
        <span class="text-xs text-[#5c5c5c]">${serviceNumber}</span>
      </div>
      <span class="text-xs text-[#5c5c5c]">${callTime}</span>
    </div>
  `;
    history.appendChild(li);
  });
}
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
/*
    Clear history part
*/
const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", () => {
    history.innerHTML = "";
  });
  
//----------------------------------------------------------------------------------------

