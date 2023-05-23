"use strict";

const selection = document.querySelector("#search-bar");
const parksTblBody = document.querySelector("#parks-tbl-body");
let option = new Option("Search Type");
const searchRadio = document.querySelector(`input[name= "search-by"]:checked`);

function optionsInDDL() {
  selection.innerHTML = "";
  for (const location of locationsArray) {
    let option = new Option(location, location);
    selection.appendChild(option);
  }
}
function typesInDDL() {
  selection.innerHTML = "";
  for (const type of parkTypesArray) {
    let option = new Option(type, type);
    selection.appendChild(option);
  }
}

function buildParkRow(tbody, park) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell(1);
  if (!park.Address) {
    cell2.innerText = "No Address";
  } else {
    cell2.innerText = park.Address;
  }

  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;

  let cell5 = row.insertCell(4);
  if (!park.ZipCode) {
    cell5.innerText = "No ZIP";
  } else {
    cell5.innerText = park.ZipCode;
  }

  let cell6 = row.insertCell(5);
  if (!park.Phone) {
    cell6.innerText = "No Phone";
  } else {
    cell6.innerText = park.Phone;
  }

  let cell7 = row.insertCell(6);
  if (!park.Visit) {
    cell7.innerText = "No URL";
  } else {
    cell7.innerHTML = `<a href="${park.Visit}" target="_blank">Visit Page</a>`;
  }
}
function findMatchParks() {
  const searchBy = document.querySelector(
    "input[name='search-by']:checked"
  );
  switch (searchBy.value) {
    case "location":
      return nationalParksArray.filter((p) => p.State == selection.value);
    case "type":
      return nationalParksArray.filter((p) =>
        p.LocationName.includes(selection.value)
      );
    default:
      return [];
  }
}
function displayMatchingParks(matchParks) {
  parksTblBody.innerHTML = "";
  for (let i = 0; i < matchParks.length; i++) {
    buildParkRow(parksTblBody, matchParks[i]);
  }
}
  
function filterDisplay() {
  parksTblBody.innerHTML = "";
  let filteredParks = findMatchParks();
  displayMatchingParks(filteredParks);
}
