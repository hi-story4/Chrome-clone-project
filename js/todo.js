const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
function deleteToDo(event) {
  //console.dir(event.target.parentElement.innerText);
  const li = event.target.parentElement; //제거를 할때 button이 눌렸는지만 알고 어떤 button이 눌렸는지는 모르기에 이를 알려준다.
  li.remove(); //버튼의 상위요소인 li태그. 물론 const li는 편의상 그렇게 지칭한것.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //localStorage에 저장해야하는데 array는 저장할수 없다. 오직 string만.
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); //다시 array형태로.실
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //배열의 각각의 아이템을 이용하여 함수 실행.; 함수를 따로 쓰지 않고 짧게 쓰기.
}

//filter는 forEach와 비슷하다. 배열의 각각의 item에 대해 함수를 실행한다.
//함수 결과 항상true가 나와야한다. false가 나오는 경우는 제외를 한다.
