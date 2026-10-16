// =====================================================
// 1) CALCULADORA DO FUTURO (juros compostos)
// =====================================================
function calcular() {
  // Pega os números que a pessoa digitou
  var mensal = Number(document.getElementById("mensal").value);
  var anos = Number(document.getElementById("anos").value);
  var taxaAno = Number(document.getElementById("taxa").value) / 100;

  // Converte a taxa de ano para mês
  var taxaMes = Math.pow(1 + taxaAno, 1 / 12) - 1;
  var meses = anos * 12;

  // Fórmula dos juros compostos com depósito mensal
  var total;
  if (taxaMes === 0) {
    total = mensal * meses;
  } else {
    total = mensal * ((Math.pow(1 + taxaMes, meses) - 1) / taxaMes);
  }

  var investido = mensal * meses;
  var juros = total - investido;

  // Mostra o resultado na tela
  document.getElementById("resultado").innerHTML =
    "Você guardaria " + dinheiro(investido) + " e teria " +
    "<strong>" + dinheiro(total) + "</strong>. " +
    "Só de juros foram " + dinheiro(juros) + ". (Simulação, não é garantia.)";
}

// Deixa o número no formato de dinheiro: R$ 1.234,56
function dinheiro(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// =====================================================
// 2) QUIZ DE PERFIL FINANCEIRO
// =====================================================
function verPerfil() {
  var soma = 0;

  // Passa pelas 5 perguntas (p1 até p5) e soma os pontos marcados
  for (var i = 1; i <= 5; i++) {
    var marcada = document.querySelector('input[name="p' + i + '"]:checked');

    if (marcada === null) {
      document.getElementById("perfil").textContent = "Responda todas as perguntas para ver o resultado.";
      return; // para a função aqui
    }
    soma = soma + Number(marcada.value);
  }

  // Soma vai de 5 a 15
  var texto;
  if (soma <= 8) {
    texto = "Conservador: você prefere segurança. Renda fixa como Tesouro Selic e CDB combina com você.";
  } else if (soma <= 12) {
    texto = "Moderado: você aceita um pouco de risco. Pode misturar renda fixa com previdência e alguns fundos.";
  } else {
    texto = "Arrojado: você aceita mais risco por mais retorno. Ações e investimentos de longo prazo podem servir, sempre com reserva de emergência.";
  }

  document.getElementById("perfil").textContent = "Seu perfil: " + texto;
}