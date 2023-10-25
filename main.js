const elementoPrecoTotalCompra = document.getElementById('valor-total-compra');
const precoPassagem = 140;
let valorTotalCompra = 0;
let assentosSelecionados = [];


function selecionarCadeira(cadeira) {
  const cadeiraSelecionada = cadeira;
  if (cadeiraSelecionada.classList.contains("ocupado")){
    return;
  }
if(cadeiraSelecionada.classList.contains("selecionado")){
  cadeiraSelecionada.classList.remove("selecionado");
  assentosSelecionados = assentosSelecionados.filter(id => id !== cadeiraSelecionada.id);
  valorTotalCompra = assentosSelecionados.length * precoPassagem;
  atualizarVisualizacaoPreco();
  return;
}
  cadeiraSelecionada.classList.add("selecionado");
  assentosSelecionados.push(cadeiraSelecionada.id);
  valorTotalCompra = assentosSelecionados.length * precoPassagem;
  atualizarVisualizacaoPreco();
}

function atualizarVisualizacaoPreco() {
elementoPrecoTotalCompra.innerText = `R$ ${valorTotalCompra}`
}

function finalizarCompra(){
  if(assentosSelecionados.length === 0){
    return;
  }
  for (const id of assentosSelecionados){
    const assentoComprado = document.getElementById(id);
    assentoComprado.classList.remove('selecionado');
    assentoComprado.classList.add('ocupado');
  }
  assentosSelecionados = [];
  valorTotalCompra = 0;
  atualizarVisualizacaoPreco();
}