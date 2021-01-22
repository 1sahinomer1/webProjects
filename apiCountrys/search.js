var countryArray = [];

function onInput() {
  let input = document.getElementById("myInput").value;
    let newArray = countryArray.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
  createTable(newArray);
}

function createTable(array) {
  var output = "";
  for (var i in array) {
    output += `
        <tr>
            <th scope ="row">${i}</th>
            <td><img src="${array[i].flag}" width=85 height=65</i></td>
            <td>${array[i].name}</td>
            <td>${array[i].capital}</td>
            <td>${array[i].demonym}</td>
        </tr>
       `;
  }
  document.getElementById("tbody").innerHTML = output;
  document.getElementById("count").innerText = array.length;
}

async function onLoad() {
  let response = await fetch("https://restcountries.eu/rest/v2/all");
  countryArray = await response.json();
  createTable(countryArray);
}

onLoad();