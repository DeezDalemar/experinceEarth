let mountainSelectList = document.querySelector("#mountainSelectList");
let leftDivContainer = document.querySelector("#leftDiv");
let rightDivContainer = document.querySelector("#rightDiv");

window.onload = init;

mountainSelectList.onchange = loadMountainData;

function init() {
   addMountains();
}

function addMountains() {
   for (const mountain of mountainsArray) {
      let option = new Option(mountain.name);
      mountainSelectList.appendChild(option);
   }
}

async function loadMountainData() {
   rightDivContainer.innerHTML = "";
   leftDivContainer.innerHTML = "";

   for (const mountain of mountainsArray) {
      if (mountain.name == mountainSelectList.value) {
         const sunsetData = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);

         const sunriseTime = formatTime(sunsetData.results.sunrise);
         const sunsetTime = formatTime(sunsetData.results.sunset);

         const mountainTitle = document.createElement("h2");
         mountainTitle.innerText = mountain.name;

         const mountainSubData = document.createElement("h5");
         mountainSubData.innerText = `Effort Level: ${mountain.effort} Elevation: ${mountain.elevation} ft.`;
         mountainSubData.className = "text-white-50";

         const sunsetContainer = document.createElement("div");
         const sunsetInfo = document.createElement("h5");
         sunsetInfo.innerText = `Sunrise: ${sunriseTime}, Sunset: ${sunsetTime}`;
         sunsetInfo.className = "text-white-50";

         const horizontalRule = document.createElement("hr");

         rightDivContainer.appendChild(mountainTitle);
         rightDivContainer.appendChild(mountainSubData);
         rightDivContainer.appendChild(sunsetContainer);
         sunsetContainer.appendChild(sunsetInfo);
         rightDivContainer.appendChild(horizontalRule);

         const mountainDescription = document.createElement("p");
         mountainDescription.innerHTML = mountain.desc;

         rightDivContainer.appendChild(mountainDescription);

         const mountainImg = document.createElement("img");
         mountainImg.src = "imgs/" + mountain.img;
         mountainImg.className = "w-100 rounded";
         leftDivContainer.appendChild(mountainImg);
      }
   }
}

async function getSunsetForMountain(lat, lng) {
   let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
   let data = await response.json();
   return data;
}

function formatTime(fullTime) {
   const [hours, minutes] = fullTime.split(":").slice(0, 2);
   return `${hours}:${minutes}`;
}
