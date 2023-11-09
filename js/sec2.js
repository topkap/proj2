// let xhr = new XMLHttpRequest();
// xhr.open("GET", "sec2.json");
// xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let news = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result2");
    results.forEach((result, index) => {
      let output = "";
      output += `
        <img src=${news[index].img} />
        <h2>${news[index].name}</h2>
        <span>${news[index].desc}</span>
      `;
      result.innerHTML = output;
    });

  }
};
