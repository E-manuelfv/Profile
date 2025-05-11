document.addEventListener("DOMContentLoaded", function () {
  const botaoSeguir = document.querySelector(".botao-seguir");
  const linkTree = document.getElementById("linkTree");

  botaoSeguir.addEventListener("click", function () {
    linkTree.classList.toggle("ativo");

    event.stopPropagation();
  });

  linkTree.addEventListener("click", function (e) {
    if (e.target === linkTree) {
      linkTree.classList.remove("ativo");
    }
  });

  const conteudo = linkTree.querySelector(".link-tree-conteudo");
  const botaoFechar = document.createElement("button");
  botaoFechar.className = "botao-fechar";
  botaoFechar.innerHTML = "×";
  botaoFechar.addEventListener("click", function () {
    linkTree.classList.remove("ativo");
  });
  conteudo.prepend(botaoFechar);
});
