const searchingMoun = document.querySelector("#mountain-DropList");
const displayDiv = document.querySelector("#display-div");


window.onload = function loadMountains() {
  for (let i = 0; i < mountainsArray.length; i++) {
    let mountainOption = document.createElement("option");
    mountainOption.value = i;
    mountainOption.textContent = mountainsArray[i].name;
    mountainSearch.appendChild(mountainOption);
  }
};

