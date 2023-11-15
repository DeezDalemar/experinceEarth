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

function loadMountainData() {
   rightDivContainer.innerHTML = "";
   leftDivContainer.innerHTML = "";

   for (const mountain of mountainsArray) {
      if (mountain.name == mountainSelectList.value) {
         const mountainTitle = document.createElement("h2");
         mountainTitle.innerText = mountain.name;

         const mountainSubData = document.createElement("h5");
         mountainSubData.innerText = `Effort Level: ${mountain.effort}
            Elevation: ${mountain.elevation} ft.`;
         mountainSubData.className = "text-white-50";

         const horizontalRule = document.createElement("hr");

         const mountainDescription = document.createElement("p");
         mountainDescription.innerHTML = mountain.desc;

         //Appending the elements
         rightDivContainer.appendChild(mountainTitle);
         rightDivContainer.appendChild(mountainSubData);
         rightDivContainer.appendChild(horizontalRule);
          rightDivContainer.appendChild(mountainDescription);
          

          const mountainImg = document.createElement("img")
          mountainImg.src = "imgs/" + mountain.img;
          mountainImg.className = "w-100 rounded"
          leftDivContainer.appendChild(mountainImg);
      }
   }
}
