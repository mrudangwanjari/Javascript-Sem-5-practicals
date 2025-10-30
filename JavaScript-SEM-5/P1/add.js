function add() {
  
  let a = +document.getElementById("num1").value;
  let b = +document.getElementById("num2").value;
  
  document.getElementById("result").innerText = "Result: " + (a + b);
  
}