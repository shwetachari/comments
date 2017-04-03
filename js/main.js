$('#submitForm').mousedown(function(){
  var formText = document.getElementById("formText").value
  var newLi = document.createElement("li")
  var liDivName = document.createElement("div")
  var liDivText = document.createElement("div")
  var unorderedList = document.getElementById("unorderedList")
  // appends node named newDiv to body
  unorderedList.appendChild(newLi)
  var name = document.getElementById("name").value
  var liName = document.createTextNode(name)
  var liText = document.createTextNode(formText)
  liDivName.appendChild(liName)
  liDivText.appendChild(liText)
  newLi.appendChild(liDivName)
  newLi.appendChild(liDivText)
  liDivName.className = "liDivName"
  liDivText.className = "liDivText"
  newLi.className = "listEntry"
})
