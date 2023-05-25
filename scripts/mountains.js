const mountainDropList = document.querySelector("#mountains-DropList");
const mountainTblBody = document.querySelector("#mountain-tbl-body");

function buildMountainRow(tbody, mountain) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = mountain.name;

  let cell2 = row.insertCell(1);
  cell2.innerText = mountain.desc;

  let cell3 =  row.insertCell(2);
  cell3.innerText = mountain.elevation;

  let cell4 =  row.insertCell(3);
  cell4.innerText = mountain.effort;

  let cell5 =  row.insertCell(4);
  cell5.innerHTML = `<img src='images/${mountain.img}'>`;
}

function displayMountainDropList() {
  mountainDropList.innerHTML = "";
  for (const mountain of mountainsArray) {
    let option = new Option(mountain.name, mountain.name);
    mountainDropList.appendChild(option);
  }
}
displayMountainDropList();

function displayMountainInfo() {
  mountainTblBody.innerHTML = "";

let mountainInfo = mountainsArray.find(function(mountain) {
    return mountainDropList.value == mountain.name
}) 
buildMountainRow(mountainTblBody, mountainInfo);

}
displayMountainInfo();

