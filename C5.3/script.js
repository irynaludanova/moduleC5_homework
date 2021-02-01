const resultNode = document.querySelector(".res-request");
const btnNode = document.querySelector(".btn-request");

btn1.onclick = function () {
  let num = document.querySelector("input").value;

  //console.log(num);

  if (num >= 1 && num <= 10) {
    useRequest(`https://picsum.photos/v2/list?limit=${num}`, displayResult);

    function useRequest(url, cb) {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function () {
        if (xhr.status != 200) {
          console.log("Статус ответа: ", xhr.status);
        } else {
          const result = JSON.parse(xhr.response);
          if (cb) {
            cb(result);
          }
        }
      };
      xhr.onprogress = function (e) {
        console.log("Загружено ${e.loaded} из ${e.total}");
      };
      xhr.onerror = function () {
        console.log("Ошибка! Статус ответа: ", xhr.status);
      };
      xhr.send();
    }

    function displayResult(apiData) {
      let cards = " ";
      apiData.forEach((item) => {
        const cardBlock = `
              <div class='card'>
                  <img src='${item.download_url}'
                  class= 'card-image'/>
                  <p>${item.author}</p>
                  </div>
                  `;
        cards = cards + cardBlock;
      });
      resultNode.innerHTML = cards;
    }
  } else {
    resultNode.innerHTML = "Вы ввели число вне диапазона от 1 до 10";
  }
};
