function onSaveClick() {
    console.log("clicked")
    localStorage.setItem("savedNotes", userInput)
  }
  
  function onClearClick() {
    console.log("clicked clear")
    text.value = ""
  }
  let userInput = "";
  
    
    const button = document.querySelector('.button1');
    button.addEventListener('click', onSaveClick);
  
    const button2 = document.querySelector('.button2');
    button2.addEventListener('click', onClearClick);
  
    function onTextChange(event) {
      console.log("changed")
      }
    const text = document.querySelector('.text');
    text.addEventListener('change', (event) => {
      console.log("changed", event)
    userInput = event.target.value
    
    });