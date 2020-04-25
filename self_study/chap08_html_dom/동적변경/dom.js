function f() {
  console.log("call");
  let obj1 = document.getElementById("f1");
  const flag = document.getElementById("btn");
  if (flag.innerText == "자바스크립트 마스터") {
    obj1.src = "../image/html.png";
    flag.innerText = "자바스크립트";
  } else {
    obj1.src = "../image/js.png";
    flag.innerText = "자바스크립트 마스터";
  }
  obj1.style.width = "70px";
  obj1.style.height = "70px";
}

function changeContent() {
  let fun = document.getElementById("p1");
  fun.innerText = "자바스크립트 마스터";
}
