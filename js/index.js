document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");
  
    buttonText.addEventListener("click", () => {
      const value = inputText.value; 
      if (value) {
        localStorage.setItem("storedData", value); 
        alert("Dato guardado correctamente.");
      } else {
        alert("Por favor, ingresa un dato antes de guardar.");
      }
    });
  });