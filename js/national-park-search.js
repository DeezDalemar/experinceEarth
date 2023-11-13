let parkOptionsSelectList = document.querySelector("#parkSearchOptions");
let byLocationButton = document.querySelector("#searchByLocation");
let byParkTypeButton = document.querySelector("#searchByType");
let cardContainer = document.querySelector("#cardContainer");

const selectOne = new Option("~Select One~");







byLocationButton.addEventListener("change", function () {
    listLocations(locationsArray);

    parkOptionsSelectList.addEventListener("change", function () {
       displayParkState(nationalParksArray);
    });

    cardContainer.innerHTML = "";
});

byParkTypeButton.addEventListener("change", function () {
    listParkTypes(parkTypesArray);

    parkOptionsSelectList.addEventListener("change", function () {
       displayParkType(nationalParksArray);
    });

     cardContainer.innerHTML = "";
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



function displayParkState(parksArray) {
    cardContainer.innerHTML = ""
   
    for (const park of parksArray) {
        if (park.State == parkOptionsSelectList.value) {
            createCard(park)
        } 
    } 
}



function displayParkType(parksArray) {
   cardContainer.innerHTML = "";

    for (const park of parksArray) {
       let lowerCaseLocation = park.LocationName.toLowerCase()
      if (lowerCaseLocation.indexOf(parkOptionsSelectList.value.toLowerCase()) !== -1) {
         createCard(park);
      } else {
          console.log(lowerCaseLocation, parkOptionsSelectList);
      }
   }
}



function createCard(parkName) {
    let card = document.createElement("div")
    card.className = "card w-50";

    let cardBody = document.createElement("div")
    cardBody.className = "card-body"

    let cardText = document.createElement("p")
    cardText.innerText = parkName.LocationName
    cardText.className = "card-text"

    cardBody.appendChild(cardText);
    card.appendChild(cardBody)
    cardContainer.appendChild(card);
}