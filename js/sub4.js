let xhr = new XMLHttpRequest();
xhr.open("GET", "sub4.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let list = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    list.forEach((result, index) => {
      let output = "";
      output += `
        <tr>
          <td>${list[index].num}</td>
          <td class="list-name">${list[index].name}</td>
          <td>${list[index].date}</td>
          <td class="list-down">${list[index].txt}<i class="xi-file-download-o"></i></td>
        </tr>
      `;
      result.innerHTML = output;
    });

  }
};
