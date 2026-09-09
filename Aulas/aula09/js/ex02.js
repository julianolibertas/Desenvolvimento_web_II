const frm = document.querySelector("form");
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const nome = frm.inNome.value;
  const feminino= frm.inFeminino.checked;
  const altura = Number(frm.inAltura.value);
  // let peso;
  // if (feminino) {
  //   peso = 21 * Math.pow(altura, 2);
  // } else {
  //   peso = 22 * Math.pow(altura, 2);
  // } 
  // Operador ternário 
  const peso = feminino ? 21 * Math.pow(altura, 2) : 22 * Math.pow(altura, 2);

  resp.innerText=`${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
});

frm.addEventListener("reset", ()=>{
  resp.innerText = "";
})