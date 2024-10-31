//filtra pelo nome

const inputBusca = document.getElementById("nome");
const tabela = document.getElementById("corpoTabela");

inputBusca.addEventListener("keyup", () => {
  let expressao = inputBusca.value.toLowerCase();
  let linhas = tabela.getElementsByTagName("tr");

  for (let posicao in linhas) {
    if (true === isNaN(posicao)) {
      continue;
    }
    let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();
    if (true === conteudoDaLinha.includes(expressao)) {
      linhas[posicao].style.display = "";
    } else {
      linhas[posicao].style.display = "none";
    }
  }
});

//altera a cor do botao
const btnFavorito = document.querySelectorAll(".favorite-btn");
btnFavorito.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.preventDefault();
    const icone = botao.querySelector(".favorite-icon");
    icone.classList.toggle("favorito");
  });
});

//filtro favorito

btnFavorito.forEach((botao) => {
  botao.addEventListener("click", (event) => {
    event.preventDefault();
    const row = botao.closest("tr");
    if (row.classList.contains("sim")) {
      row.classList.remove("sim");
      row.classList.add("nao");
    } else {
      row.classList.add("sim");
      row.classList.remove("nao");
    }
  });
});

const plano = document.getElementById("tipoPlano");
plano.addEventListener("change", (event) => {
  const filterValue = event.target.value;
  const rows = document.querySelectorAll("#corpoTabela .row");

  rows.forEach((row) => {
    if (filterValue === "sim") {
      row.style.display = row.classList.contains("sim") ? "" : "none";
    } else if (filterValue === "não") {
      row.style.display = row.classList.contains("nao") ? "" : "none";
    } else {
      row.style.display = "";
    }
  });
});
