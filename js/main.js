let xhr = new XMLHttpRequest();
xhr.open("GET", "main.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let techs = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
        <h2>${techs[index].name}</h2>
        <ul>
          <li>${techs[index].con1}</li>
          <li>${techs[index].con2}</li>
          <li>${techs[index].con3}</li>
          <li>${techs[index].con4}</li>
        </ul>
      `;
      result.innerHTML = output;
    });

  }
};


