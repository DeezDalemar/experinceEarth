let parkOptionsSelectList = document.querySelector("#parkSearchOptions");
let byLocationButton = document.querySelector("#searchByLocation");
let byParkTypeButton = document.querySelector("#searchByType");

const selectOne = new Option("~Select One~");



byLocationButton.addEventListener("click", function () {
   listLocations(locationsArray);
});

byParkTypeButton.addEventListener("click", function () {
   listParkTypes(parkTypesArray);
});



function listParkTypes(parkTypes) {
   parkOptionsSelectList.innerHTML = "";
   parkOptionsSelectList.appendChild(selectOne);

   for (const parkType of parkTypes) {
      let option = new Option(parkType);
      parkOptionsSelectList.appendChild(option, option);
   }
}

function listLocations(locations) {
   parkOptionsSelectList.innerHTML = "";
   parkOptionsSelectList.appendChild(selectOne);

   for (const location of locations) {
      let option = new Option(location);
      parkOptionsSelectList.appendChild(option, option);
   }
}

function displayParkType() {
    
}
