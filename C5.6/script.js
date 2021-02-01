const btn = document.querySelector(".btn-request");

btn.addEventListener("click", () => {
  const userNum1 = +document.querySelector("#num1").value;
  const userNum2 = +document.querySelector("#num2").value;

  let result = document.querySelector(".res-request");
  result.textContent = "";
  if (
    userNum1 >= 100 &&
    userNum1 <= 300 &&
    userNum2 >= 100 &&
    userNum2 <= 300
  ) {
    fetch(`https://picsum.photos/${userNum1}/${userNum2}`).then((response) => {
      document.querySelector(".image-result").src = response.url;
    });
  } else {
    result.innerHTML = "Одно из чисел вне диапазона от 100 до 300";
    return;
  }
});
