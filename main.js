let currencyRatio = {
  USD: {
    KRW: 1313.34,
    USD: 1,
    YEN: 131.97,
    unit: "달러",
    img: "https://cdn-icons-png.flaticon.com/512/555/555526.png",
  },
  KRW: {
    KRW: 1,
    USD: 0.00076,
    YEN: 0.1,
    unit: "원",
    img: "https://cdn.countryflags.com/thumbs/south-korea/flag-400.png",
  },
  YEN: {
    KRW: 9.95,
    USD: 0.0076,
    YEN: 1,
    unit: "엔",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Japan_%281870–1999%29.svg",
  },
};
var unitWords = ["", "만", "억", "조", "경"];
var splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let toCurrency = "USD";
let fromCurrency = "USD";

document.querySelectorAll("#from-currency-list li").forEach(function (item) {
  item.addEventListener("click", function () {
    fromCurrency = this.id;
    console.log(this);
    fromButton.innerHTML = `<img class="flag-img"src="${currencyRatio[fromCurrency].img}"/>${fromCurrency}`;
    convert("from");
  });
});

document.querySelectorAll("#to-currency-list li").forEach(function (item) {
  item.addEventListener("click", function () {
    toCurrency = this.id;
    toButton.innerHTML = `<img class="flag-img"src="${currencyRatio[toCurrency].img}"/>${toCurrency}`;
    convert("from");
  });
});

function convert(type) {
  console.log("here");
  let amount = 0;
  if (type == "from") {
    //입력갑 받기
    amount = document.getElementById("fromAmount").value;
    // 환전하기
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    // 환전한값 보여주기
    document.getElementById("toAmount").value = convertedAmount;
    //환전한값 한국어로
    renderKoreanNumber(amount, convertedAmount);
  } else {
    amount = document.getElementById("toAmount").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("fromAmount").value = convertedAmount;
    renderKoreanNumber(convertedAmount, amount);
  }
}
function renderKoreanNumber(from, to) {
  document.getElementById("fromNumToKorea").textContent =
    readNum(from) + currencyRatio[fromCurrency].unit;
  document.getElementById("toNumToKorea").textContent =
    readNum(to) + currencyRatio[toCurrency].unit;
}
function readNum(num) {
  let resultString = "";
  let resultArray = [];
  for (let i = 0; i < unitWords.length; i++) {
    let unitResult =
      (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }
  return resultString;
}
