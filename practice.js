// 1. 박스 2개 만들기
// 2. 드랍다운 리스트 만들기
// 2. 환율 정도 들고오기
// 3. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 4. 금액을 입력하면 환전이 된다.
// 5. 드랍다운 리스트에서 아이템을 선택하면 다시 단위 기준으로 환전이 된다.
// 6. 숫자를 한국어로 읽는법
// 7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적영이 된다.

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
// 1. console.log(currencyRatio.KRW.unit);
// 2. console.log(currencyRatio["USD"]["unit"]);
// 3. console.log(currencyRatio["USD"].unit);

let fromCurency = "USD";
let toCurency = "USD";

document.querySelectorAll("#from-currency-list li").forEach((menu) =>
  menu.addEventListener("click", function () {
    // 1. 버튼을 가져온다.
    // 2. 버튼에 값을 바꾼다.
    document.getElementById("from-button").textContent = this.textContent;
    console.log(this.textContent);

    // 3. 선택된 currency값을 변수에 저장해준다.
    fromCurency = this.textContent;
    console.log("이거 확인", fromCurency);
    convert();
  })
);

document.querySelectorAll("#to-currency-list li").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurency = this.textContent;
    convert();
  })
);

// 1. 키를 입력하는 순간
// 2. 환전이 된다
// 3. 환전된 값이 보인다.

function convert() {
  // 1. 환전
  // 얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자하는 돈이 뭔지
  // 돈 * 환율 = 환전금액
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurency][toCurency];
  console.log("환전결과 : ", convertedAmount);
  document.getElementById("to-input").value = convertedAmount;
  document.getElementById("to-text").innerText = convertedAmount;
}

function reConvert() {
  let reAmount = document.getElementById("to-input").value;
  let reConvertedAmount = reAmount * currencyRatio[toCurency][fromCurency];
  console.log("밑을 기준으로 환전 : ", reConvertedAmount);
  document.getElementById("from-text").innerText = reConvertedAmount;
}

// 1. 드랍다운 리스트에 값이 바뀔때마다
// 2. 환전을 다시 한다.

// 1. 각 convertedAmount의 값을 저 칸에 넣는다.
// 2. 칸에 있는 값을 반올림해서 한글 단위로 만든다.
// 3. 달러, 원, 엔을 구분한 글자를 넣는다.

// console.log("이거 확인", document.getElementById("from-button").textContent);
