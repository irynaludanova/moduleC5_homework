const btn = document.querySelector(".btn-request");
const myJSON = JSON.parse(localStorage.getItem("myJSON"));
if (myJSON) {
  resultDisplay(myJSON);
}
function resultDisplay(data) {
  document.querySelector(".res-request").innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let elem = document.createElement("img");
    elem.setAttribute("src", data[i].download_url);
    document.querySelector(".res-request").appendChild(elem);
  }
}

btn.addEventListener("click", () => {
  const userNum1 = +document.querySelector("#num1").value;
  const userNum2 = +document.querySelector("#num2").value;
  let result = document.querySelector(".res-request");
  result.textContent = "";
  let condition1 =
    userNum1 != NaN && 1 <= userNum1 && userNum1 <= 10
      ? "yes"
      : (result.innerHTML = `Номер ${userNum1}страницы вне диапазона от 1 до 10`);

  let condition2 =
    userNum2 != NaN && 1 <= userNum2 && userNum2 <= 10
      ? "yes"
      : (result.innerHTML = `Лимит ${userNum2} вне диапазона от 1 до 10`);

  if (condition1 === "yes" && condition2 === "yes") {
    fetch(
      `https://picsum.photos/v2/list?page=${userNum1}&limit=${userNum2}`
    ).then((response) => {
      response.json().then((data) => {
        localStorage.setItem("myJSON", JSON.stringify(data));
        resultDisplay(data);
      });
    });
  } else {
    result.innerHTML = `Номер страницы ${userNum1} и лимит ${userNum2} вне диапазона от 1 до 10`;
    return;
  }
});
