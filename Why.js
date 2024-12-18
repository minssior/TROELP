var textArray = [];

// 페이지가 로드될 때 이전에 저장된 텍스트를 불러옴
window.onload = function() {
  var storedText = localStorage.getItem("savedText");
  if (storedText) {
    textArray = JSON.parse(storedText);
    updateOutput();
  }
}

function addText() {
  var input = document.getElementById("inputText").value;
  textArray.push(input);
  updateOutput();
  document.getElementById("inputText").value = "";
  
  // 새로운 텍스트를 로컬 저장소에 저장
  localStorage.setItem("savedText", JSON.stringify(textArray));
}

function clearText() {
  textArray = [];
  updateOutput();
  
  // 로컬 저장소에서 텍스트 데이터를 삭제
  localStorage.removeItem("savedText");
}

function updateOutput() {
  var output = document.getElementById("outputText");
  output.innerHTML = "";
  for (var i = 0; i < textArray.length; i++) {
    var textNode = document.createElement("p");
    textNode.innerText = textArray[i];
    output.appendChild(textNode);
  }
}



