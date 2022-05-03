var A = 0;
var B = 0;
function leerdatos(operacion) {
  A = document.getElementById("A").value;
  B = document.getElementById("B").value;

  if (operacion == "suma") {
    document.getElementById("resultado").textContent =
      parseInt(A) + parseInt(B);
  }

  if (operacion == "resta") {
    document.getElementById("resultado").textContent =
      parseInt(A) - parseInt(B);
  }
}
