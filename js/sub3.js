let xhr = new XMLHttpRequest();
xhr.open("GET", "sub3.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let lng = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
      <h3>${lng[index].name}</h3>
      <ul>
        <li>${lng[index].point1}</li>
        <li>${lng[index].point2}</li>
        <li>${lng[index].point3}</li>
        <li>${lng[index].point4}</li>
      </ul>
      `;
      result.innerHTML = output;
    });

  }
};
