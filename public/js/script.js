
document.addEventListener("DOMContentLoaded", () => {
  
  const botones = document.querySelectorAll("button");

 
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      alert("¡Gracias por tu interés!  Pronto podrás adquirir nuestras fragancias.");
    });
  });
});

