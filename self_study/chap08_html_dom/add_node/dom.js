function add1() {
  //우선 추가
  const tag1 = document.getElementById("place");
  if (tag1.value) {
    const floor = document.getElementById("floor");
    // const tag2 = document.getElementById("table");
    const newPlace = document.createElement("div");
    const newNode = document.createTextNode(tag1.value);
    newPlace.appendChild(newNode);
    // tag2.insertBefore(newPlace, floor);
    floor.appendChild(newPlace);
    tag1.value = "";
  }
}
function add2() {
  //나중 추가
  const tag1 = document.getElementById("place");
  const tag2 = document.getElementById("table");
  const newPlace = document.createElement("div");
  if (tag1.value) {
    const newNode = document.createTextNode(tag1.value);
    newPlace.appendChild(newNode);
    tag2.appendChild(newPlace);
    tag1.value = "";
  }
}

function remove1() {}
/*
할 일 목록 만드는 사이트 만들기
1. 아래에 추가하기
2. 맨 위에 추가하기
3. 삭제하기 
   -> 삭제하고 나면 삭제 후 목록에 추가하기
4. 수정하기
*/
