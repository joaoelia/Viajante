const nome = prompt("Qual o seu nome?");
let visitadas = [];

const resposta = prompt("Já visitou alguma cidade? (Sim ou Não)");

if (resposta.toLowerCase() === "sim") {
  while (true) {
    const cidade = prompt("Qual cidade você já visitou?");
    visitadas.push(cidade);
    const continuar = prompt("Já visitou alguma outra cidade? (Sim ou Não)");
    if (continuar.toLowerCase() !== "sim") {
      break;
    }
  }
}

let mensagem = "O turista " + nome + " visitou " + visitadas.length + " cidade(s):";
visitadas.forEach(function(cidade) {
  mensagem += "\n- " + cidade;
});

alert(mensagem);
