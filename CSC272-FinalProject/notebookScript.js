function onCreateClick() {
  console.log("Clicked create")
  window.location.href = "notebookPage2.html"
}

const createButton = document.querySelector('.createButton');
console.log("createbutton", createButton)
createButton.addEventListener('click', onCreateClick);