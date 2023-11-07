const quiz = [
  {
    question: 'ふっけいくんの誕生日はいつ？',
    answer: ['4月21日', '6月10日', '7月1日', '9月10日', '10月10日'],
    correct: '7月1日',
  },
  {
    question: 'ふっけいくんの特技はなに？',
    answer: ['柔道', '剣道', '逮捕術', '拳銃', '全部'],
    correct: '全部',
  },
  {
    question: 'ピーポくんは何歳？',
    answer: ['110歳', '59歳', '10歳', '80歳', '36歳'],
    correct: '36歳',
  },
  {
    question: 'ふっけいくんは何歳？',
    answer: ['89歳', '55歳', '33歳', '19歳', '25歳'],
    correct: '19歳',
  },
  {
    question: '福岡県警本部はどこにある？',
    answer: ['中央区', '東区', '博多区', '早良区', '西区'],
    correct: '博多区',
  },
];

// クイズの問題文を取得
const $quizText = document.querySelector('.quiz_text');
// クイズの数を取得
const quizLength = quiz.length;
// クイズのインデックス番号を初期化
let quizIndex = 0;
// スコアを初期化
let score = 0;

// ボタンを取得
const $btnItem = document.querySelectorAll('.quiz_item');
// ボタンの数(ここでは５個)を取得
const btnLength = $btnItem.length;

// クイズの問題文と選択肢を表示
const quizSelect = function () {
  // ボタンのインデックス番号(0-4)を取得
  let btnIndex = 0;
  // ボタンの個数(ここでは５個)以下の場合
  while (btnIndex < btnLength) {
    // クイズの問題文にクイズ配列の１個目の問題文を表示
    $quizText.textContent = quiz[quizIndex].question;
    // ボタン1のテキストにクイズ配列の１個目の質面を表示
    $btnItem[btnIndex].textContent = quiz[quizIndex].answer[btnIndex];
    btnIndex++;
  }
};
// １問目を表示
quizSelect();

// クリックの処理
const clickEvent = function (e) {
  // クイズ配列の答えと選択したボタンのテキストを比較
  if (quiz[quizIndex].correct === e.target.textContent) {
    alert('正解!');
    score++;
  } else {
    alert(`不正解!
正解は${quiz[quizIndex].correct}`);
  }
  //   １問目が終われば月にいく
  quizIndex += 1;
  // 今のクイズがクイズ配列の長さ(ここでは５個)より小さいとき
  if (quizIndex < quizLength) {
    // 上の関数を実行
    quizSelect();
  } else {
    alert(`終了! あなたの正解数は${score} / ${quizIndex} です`);
  }
};

// 正解と選択したテキストが合っているか
let eventIndex = 0;
while (eventIndex < btnLength) {
  $btnItem[eventIndex].addEventListener('click', function (e) {
    // 上の処理を実行
    clickEvent(e);
  });
  //   次へ
  eventIndex++;
}
