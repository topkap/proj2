const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

// 코글은 1개의 버튼에 사용한다.
// 분리가 되어있다면 이벤트를 두개로 구성한다.

open.addEventListener("click", () => {
  modalBox.classList.add("active"); //클릭하면 클래스리스트에 .active스타일 추가
})
close.addEventListener("click", () => { //클릭하면 클래스리스트에 .active스타일 제거
  modalBox.classList.remove("active");
})