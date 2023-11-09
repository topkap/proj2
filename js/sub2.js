let xhr = new XMLHttpRequest();
xhr.open("GET", "sub2.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let news = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
        <ul>
          <li>${news[index].tag1}</li>
          <li>${news[index].tag2}</li>
        </ul>
        <p>${news[index].tit}</p>
        <span>${news[index].date}</span>
      `;
      result.innerHTML = output;
    });

  }
};


