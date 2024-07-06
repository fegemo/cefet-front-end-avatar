const inpNomeEl = document.getElementById("nome-avatar");
const nomeEl = document.getElementById("avatar-nome");
const corpoEl = document.getElementById("avatar-corpo");
const cabecaEl = document.getElementById("avatar-cabeca");
const inpPeleEl = document.getElementById("cor-pele-avatar");
const inpSeletorCabeloEl = document.getElementById("seletor-cabelo");
const cabeloEl = document.getElementById("avatar-cabelo");
const inpCOculos = document.getElementById("COculos");
const inpCLacinhos = document.getElementById("CLacinhos");
const inpCBandana = document.getElementById("CBandana");
const oculosEl = document.getElementById("avatar-oculos");
const lacinhosEl = document.getElementById("avatar-lacinhos");
const bandanaEl = document.getElementById("avatar-bandana");

inpNomeEl.addEventListener("change", mudancaNome);
inpPeleEl.addEventListener("input", mudancaPele);
inpSeletorCabeloEl.addEventListener("change", mudancaCabelo);
inpCOculos.addEventListener("change", mudancaOculos);
inpCLacinhos.addEventListener("change", mudancaLacinhos);
inpCBandana.addEventListener("change", mudancaBandana);

function mudancaNome() {
  nomeEl.innerHTML = inpNomeEl.value;
}

function mudancaPele() {
  corpoEl.style.backgroundColor = inpPeleEl.value;
  cabecaEl.style.backgroundColor = inpPeleEl.value;
}

function mudancaCabelo() {
  cabeloEl.src = inpSeletorCabeloEl.value;
}

function mudancaOculos() {
  oculosEl.classList.toggle("visivel");
}
function mudancaLacinhos() {
  lacinhosEl.classList.toggle("visivel");
}
function mudancaBandana() {
  bandanaEl.classList.toggle("visivel");
}
