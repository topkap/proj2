const userNumber = document.querySelector("#user-number");
const sch = document.querySelector("#sch");

// form 요소에 들어있는 submit 기능은 전송후 화면을 띄우는 개념인데, 전송할 목적지가 없으면 새로고침 된다. UI상으로만 표현한다면 type="button"으로 구성하거나, 클릭이벤트 안에 e.preventDefault()를 넣어 기본기능 막기를 실행시킨다.
// e.preventDefault()는 a링크에도 사용가능하다.

sch.addEventListener("click", (e) => {
  e.preventDefault();
  let n = userNumber.value;

  try {
    if (n === "" || isNaN(n)) throw "검색하신 내용을 찾을 수 없습니다.";

    n = Number(n);
  } catch (err) {
    result.textContent = err;
  } finally {
    userNumber.value = "";
  }
});
