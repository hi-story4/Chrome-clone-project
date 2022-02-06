const quotes = [
  {
    quote: " 하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },

  {
    quote:
      "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
    author: "헬렌켈러",
  },

  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
    author: "톰 모나건",
  },

  {
    quote:
      "단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },

  {
    quote:
      "지금이야 말로 일할때다. 지금이야말로 싸울때다. 지금이야말로 나를 더 훌륭한 사람으로 만들때다 오늘 그것을 못하면 내일 그것을 할수있는가",
    author: "토마스 아켐피스",
  },

  {
    quote:
      "되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다.",
    author: "루소",
  },

  {
    quote:
      " 네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.",
    author: "베토벤",
  },

  {
    quote:
      "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "탈무드",
  },

  {
    quote:
      "The only thing worse than starting something and failing is not starting something",
    author: "Wayne Huizenga",
  },

  {
    quote:
      "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
    author: "Seth Godin",
  },
];
//Array에 object 10개 넣어둠.
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//round는 반올림 ceil은 올림. floor()은 내림.

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;
