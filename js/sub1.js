let xhr = new XMLHttpRequest();
xhr.open("GET", "sub1.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let content = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
          <p>${content[index].desc}</p>
      `;
      result.innerHTML = output;
    });

  }
};

