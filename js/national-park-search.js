let parkOptionsSelectList = document.querySelector("#parkSearchOptions");
let byLocationButton = document.querySelector("#searchByLocation");
let byParkTypeButton = document.querySelector("#searchByType");
let showAll = document.querySelector("#showAll");
let cardContainer = document.querySelector("#cardContainer");

const selectOne = new Option("~Select One~");

parkOptionsSelectList.style.display = "none";

byLocationButton.addEventListener("change", function () {
   listLocations(locationsArray);
   parkOptionsSelectList.style.display = "block";

   parkOptionsSelectList.addEventListener("change", function () {
      displayParkState(nationalParksArray);
   });

   cardContainer.innerHTML = "";
});

byParkTypeButton.addEventListener("change", function () {
   listParkTypes(parkTypesArray);
   parkOptionsSelectList.style.display = "block";

   parkOptionsSelectList.addEventListener("change", function () {
      displayParkType(nationalParksArray);
   });

   cardContainer.innerHTML = "";
});

showAll.addEventListener("change", function () {
cardContainer.innerHTML = "";

   parkOptionsSelectList.style.display = "none";
   displayAll(nationalParksArray);

   
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
   cardContainer.innerHTML = "";

   for (const park of parksArray) {
      if (park.State == parkOptionsSelectList.value) {
         createCard(park);
      }
   }
}

function displayParkType(parksArray) {
   cardContainer.innerHTML = "";

   for (const park of parksArray) {
      let lowerCaseLocation = park.LocationName.toLowerCase();
      if (lowerCaseLocation.indexOf(parkOptionsSelectList.value.toLowerCase()) !== -1) {
         createCard(park);
      }
   }
}

function displayAll(parksArray) {
   cardContainer.innerHTML = "";

   for (const park of parksArray) {
      createCard(park);
   }
}

function createCard(parkName) {
   let card = document.createElement("div");
   card.className = "card w-25";

   let cardTitle = document.createElement("h5");
   cardTitle.innerText = parkName.LocationName;
   cardTitle.className = "card-title";

   let cardBody = document.createElement("div");
   cardBody.className = "card-body";

   let cardText = document.createElement("p");
   cardText.innerText =
      "Location: " + parkName.State + ", " + parkName.City + ", " + parkName.Address + ", " + parkName.ZipCode;
   cardText.className = "card-text";

   let parkPhone = document.createElement("p");
   parkPhone.innerText = "Phone: " + parkName.Phone;
   parkPhone.className = "card-text";

   let parkFax = document.createElement("p");
   parkFax.innerText = "Fax: " + parkName.Fax;
   parkFax.className = "card-text";

   let parkLink = document.createElement("a");
   parkLink.href = parkName.Visit;
   parkLink.target = "_blank";
   parkLink.textContent = "Learn More";
   parkLink.className = "card-text";

   cardBody.appendChild(cardTitle);
   cardBody.appendChild(cardText);
   card.appendChild(cardBody);
   cardContainer.appendChild(card);

   if (parkName.Phone) {
      cardBody.appendChild(parkPhone);
   } else {
      parkPhone.innerText = "Phone: N/A"
      cardBody.appendChild(parkPhone);
   }

   if (parkName.Fax) {
      cardBody.appendChild(parkFax);
   } else {
      parkFax.innerText = "Fax: N/A"
      cardBody.appendChild(parkFax);
   }

   if (parkName.Visit) {
      cardBody.appendChild(parkLink);
   }
}
