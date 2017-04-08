$("#submitForm").mousedown(function(){
  var newLi = document.createElement("li");
  var liDivName = document.createElement("div");
  var liDivText = document.createElement("div");
  var unorderedList = document.getElementById("unorderedList");
  // appends node newLi to unorderedList
  unorderedList.appendChild(newLi);
  var formText = document.getElementById("formText").value;
  var name = document.getElementById("name").value;
  var liName = document.createTextNode(name);
  var liText = document.createTextNode(formText);
  liDivName.appendChild(liName);
  liDivText.appendChild(liText);
  newLi.appendChild(liDivName);
  newLi.appendChild(liDivText);
  liDivName.className = "liDivName";
  liDivText.className = "liDivText";
  newLi.className = "listEntry";
  document.getElementById("name").value = "";
  document.getElementById("formText").value = "";
})

$("#deleteAll").click(function(){
  var unorderedList = document.getElementById("unorderedList");
  while (unorderedList.hasChildNodes()) {
    unorderedList.removeChild(unorderedList.lastChild);
  }
})
$("#deleteLast").click(function(){
  var unorderedList = document.getElementById("unorderedList");
  unorderedList.removeChild(unorderedList.lastChild);
})
