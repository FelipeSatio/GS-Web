var slides = document.querySelectorAll(".slide");
var slideDots = document.getElementById("slideDots");
var slideAtual = 0;
var intervaloSlide;
function criarDots() {
  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement("div");
    dot.classList.add("dot");
    (function (indice) {
      dot.addEventListener("click", function () {
        irParaSlide(indice);
      });
    })(i);
    slideDots.appendChild(dot);
  }
  atualizarDots();
}
function atualizarDots() {
  var dots = document.querySelectorAll(".dot");
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("ativo");
  }
  dots[slideAtual].classList.add("ativo");
}
function irParaSlide(numero) {
  slides[slideAtual].classList.remove("ativo");
  slideAtual = numero;
  if (slideAtual >= slides.length) slideAtual = 0;
  if (slideAtual < 0) slideAtual = slides.length - 1;
  slides[slideAtual].classList.add("ativo");
  atualizarDots();
}
function proximoSlide() { irParaSlide(slideAtual + 1); }
function slideAnterior() { irParaSlide(slideAtual - 1); }
function iniciarIntervaloSlide() {
  intervaloSlide = setInterval(function () { proximoSlide(); }, 5000);
}
function pararIntervaloSlide() { clearInterval(intervaloSlide); }

document.getElementById("btnProximo").addEventListener("click", function () {
  pararIntervaloSlide(); proximoSlide(); iniciarIntervaloSlide();
});
document.getElementById("btnAnterior").addEventListener("click", function () {
  pararIntervaloSlide(); slideAnterior(); iniciarIntervaloSlide();
});
criarDots();
iniciarIntervaloSlide();

function trocarTema(nomeTema) {
  document.body.classList.remove("tema-escuro", "tema-azul", "tema-claro");
  document.body.classList.add(nomeTema);
  var botoesArray = document.querySelectorAll(".btn-tema");
  for (var i = 0; i < botoesArray.length; i++) {
    botoesArray[i].classList.remove("ativo");
  }
  if (nomeTema === "tema-escuro") document.getElementById("temaEscuro").classList.add("ativo");
  else if (nomeTema === "tema-azul") document.getElementById("temaAzul").classList.add("ativo");
  else if (nomeTema === "tema-claro") document.getElementById("temaClaro").classList.add("ativo");
}
document.getElementById("temaEscuro").classList.add("ativo");

var menuToggle = document.getElementById("menuToggle");
var navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("aberto");
});
var linksNav = document.querySelectorAll(".nav-links a");
for (var i = 0; i < linksNav.length; i++) {
  linksNav[i].addEventListener("click", function () {
    navLinks.classList.remove("aberto");
  });
}

var perguntas = [
  {
    pergunta: "Como se chama o fenômeno em que colisões entre detritos orbitais geram novos fragmentos em cascata, podendo tornar uma órbita inutilizável?",
    opcoes: ["Efeito Doppler", "Síndrome de Kessler", "Efeito Hohmann", "Paradoxo de Fermi"],
    correta: 1
  },
  {
    pergunta: "Quantos objetos maiores que 10 cm são rastreados atualmente em órbita terrestre?",
    opcoes: ["Menos de 1.000", "Cerca de 5.000", "Mais de 27.000", "Mais de 1 milhão"],
    correta: 2
  },
  {
    pergunta: "Qual é a velocidade média de um detrito em órbita baixa (LEO)?",
    opcoes: ["Cerca de 3.000 km/h", "Cerca de 10.000 km/h", "Cerca de 28.000 km/h", "Cerca de 100.000 km/h"],
    correta: 2
  },
  {
    pergunta: "Qual foi o primeiro evento registrado de colisão acidental entre dois satélites inteiros no espaço?",
    opcoes: [
      "Iridium 33 e Cosmos 2251 em 2009",
      "ENVISAT e ERS-1 em 2012",
      "Landsat 5 e NOAA-16 em 2005",
      "ISS e Progress em 2003"
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma 'conjunção orbital' no contexto de monitoramento de detritos?",
    opcoes: [
      "A fusão de dois satélites em órbita",
      "Uma passagem próxima entre dois objetos em órbita com risco de colisão",
      "O reingresso de um satélite na atmosfera",
      "A transferência de órbita de um satélite"
    ],
    correta: 1
  },
  {
    pergunta: "Qual algoritmo é amplamente utilizado para propagar a órbita de satélites e calcular posições futuras de detritos?",
    opcoes: ["SHA-256", "SGP4", "TCP/IP", "FFT"],
    correta: 1
  },
  {
    pergunta: "Qual organização mantém o principal catálogo oficial de objetos em órbita terrestre?",
    opcoes: [
      "NASA (Agência Espacial Americana)",
      "ESA (Agência Espacial Europeia)",
      "US Space Surveillance Network (SSN)",
      "JAXA (Agência Espacial Japonesa)"
    ],
    correta: 2
  },
  {
    pergunta: "O que é a órbita GEO (Geoestacionária) e por que é especialmente crítica quanto a detritos?",
    opcoes: [
      "Órbita a 400 km, crítica por abrigar a ISS",
      "Órbita a 35.786 km onde satélites parecem estacionários; detritos ali ficam por milhares de anos",
      "Órbita lunar, crítica para missões Artemis",
      "Órbita polar a 800 km usada por satélites climáticos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual das seguintes medidas é recomendada pelas diretrizes da ONU para mitigar a geração de novos detritos?",
    opcoes: [
      "Desorbitar satélites em até 25 anos após o fim da missão em LEO",
      "Manter satélites em órbita indefinidamente para reúso futuro",
      "Lançar satélites apenas em órbita polar",
      "Proibir lançamentos comerciais acima de 500 km"
    ],
    correta: 0
  },
  {
    pergunta: "Qual tecnologia experimental está sendo desenvolvida para remover ativamente grandes detritos da órbita?",
    opcoes: [
      "Lasers terrestres para vaporizar os fragmentos",
      "Veículos de captura como o ClearSpace-1 da ESA",
      "Redes de satélites GPS dedicadas ao rastreamento",
      "Balões ionosféricos de desaceleração orbital"
    ],
    correta: 1
  }
];

var perguntaAtual = 0;
var pontuacao = 0;
var respostaEscolhida = false;

function mostrarPergunta() {
  var dadosPergunta = perguntas[perguntaAtual];
  document.getElementById("quiz-num-pergunta").textContent =
    "Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length;
  var porcentagem = ((perguntaAtual + 1) / perguntas.length) * 100;
  document.getElementById("barraPreenchimento").style.width = porcentagem + "%";
  document.getElementById("quiz-pergunta").textContent = dadosPergunta.pergunta;
  document.getElementById("quiz-opcoes").innerHTML = "";
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("btn-proximo-quiz").style.display = "none";
  respostaEscolhida = false;
  for (var i = 0; i < dadosPergunta.opcoes.length; i++) {
    var botao = document.createElement("button");
    botao.classList.add("opcao-quiz");
    botao.textContent = dadosPergunta.opcoes[i];
    (function (indice) {
      botao.addEventListener("click", function () { verificarResposta(indice); });
    })(i);
    document.getElementById("quiz-opcoes").appendChild(botao);
  }
}

function verificarResposta(indiceEscolhido) {
  if (respostaEscolhida) return;
  respostaEscolhida = true;
  var dadosPergunta = perguntas[perguntaAtual];
  var botoes = document.querySelectorAll(".opcao-quiz");
  var feedback = document.getElementById("quiz-feedback");
  for (var i = 0; i < botoes.length; i++) botoes[i].disabled = true;
  if (indiceEscolhido === dadosPergunta.correta) {
    botoes[indiceEscolhido].classList.add("correta");
    feedback.textContent = "✅ Correto! Muito bem!";
    feedback.style.color = "#22c55e";
    pontuacao++;
  } else {
    botoes[indiceEscolhido].classList.add("errada");
    botoes[dadosPergunta.correta].classList.add("correta");
    feedback.textContent = "❌ Errado! A resposta correta era: " + dadosPergunta.opcoes[dadosPergunta.correta];
    feedback.style.color = "#ef4444";
  }
  document.getElementById("btn-proximo-quiz").style.display = "inline-block";
}

function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual < perguntas.length) mostrarPergunta();
  else mostrarResultado();
}

function mostrarResultado() {
  document.getElementById("quiz-box").style.display = "none";
  document.getElementById("quiz-resultado").style.display = "block";
  var porcentagem = Math.round((pontuacao / perguntas.length) * 100);
  var titulo = "", texto = "";
  if (porcentagem >= 80) {
    titulo = "🏆 Especialista em Debris!";
    texto = "Impressionante! Você domina o tema de monitoramento e detritos orbitais.";
  } else if (porcentagem >= 50) {
    titulo = "🛰️ Bom conhecimento!";
    texto = "Você conhece bem o tema! Continue estudando para dominar ainda mais o cenário orbital.";
  } else {
    titulo = "🌱 Continue aprendendo!";
    texto = "Você está começando sua jornada. Explore mais o conteúdo desta página sobre detritos orbitais!";
  }
  document.getElementById("resultado-titulo").textContent = titulo;
  document.getElementById("resultado-texto").textContent = texto;
  document.getElementById("resultado-pontos").textContent =
    "Sua pontuação: " + pontuacao + " de " + perguntas.length + " (" + porcentagem + "%)";
}

function reiniciarQuiz() {
  perguntaAtual = 0; pontuacao = 0; respostaEscolhida = false;
  document.getElementById("quiz-resultado").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";
  mostrarPergunta();
}
mostrarPergunta();

// ===================== FORMULÁRIO =====================
function enviarFormulario() {
  var nome = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim();
  var assunto = document.getElementById("assunto").value.trim();
  var mensagem = document.getElementById("mensagem").value.trim();
  var temErro = false;
  limparErros();
  if (nome === "") { mostrarErro("nome", "erro-nome", "Por favor, informe seu nome."); temErro = true; }
  else if (nome.length < 3) { mostrarErro("nome", "erro-nome", "O nome deve ter pelo menos 3 caracteres."); temErro = true; }
  if (email === "") { mostrarErro("email", "erro-email", "Por favor, informe seu e-mail."); temErro = true; }
  else if (!emailValido(email)) { mostrarErro("email", "erro-email", "Digite um e-mail válido (ex: nome@email.com)."); temErro = true; }
  if (assunto === "") { mostrarErro("assunto", "erro-assunto", "Por favor, informe o assunto."); temErro = true; }
  if (mensagem === "") { mostrarErro("mensagem", "erro-mensagem", "Por favor, escreva sua mensagem."); temErro = true; }
  else if (mensagem.length < 10) { mostrarErro("mensagem", "erro-mensagem", "A mensagem deve ter pelo menos 10 caracteres."); temErro = true; }
  if (!temErro) {
    document.getElementById("sucesso-form").style.display = "block";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("assunto").value = "";
    document.getElementById("mensagem").value = "";
    setTimeout(function () { document.getElementById("sucesso-form").style.display = "none"; }, 5000);
  }
}
function mostrarErro(idCampo, idErro, mensagem) {
  document.getElementById(idCampo).classList.add("campo-erro");
  document.getElementById(idErro).textContent = mensagem;
}
function limparErros() {
  var campos = ["nome", "email", "assunto", "mensagem"];
  for (var i = 0; i < campos.length; i++) document.getElementById(campos[i]).classList.remove("campo-erro");
  var erros = ["erro-nome", "erro-email", "erro-assunto", "erro-mensagem"];
  for (var i = 0; i < erros.length; i++) document.getElementById(erros[i]).textContent = "";
  document.getElementById("sucesso-form").style.display = "none";
}
function emailValido(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
var camposFormulario = ["nome", "email", "assunto", "mensagem"];
for (var i = 0; i < camposFormulario.length; i++) {
  (function (campo) {
    document.getElementById(campo).addEventListener("input", function () {
      document.getElementById(campo).classList.remove("campo-erro");
      document.getElementById("erro-" + campo).textContent = "";
    });
  })(camposFormulario[i]);
}
