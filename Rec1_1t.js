// Importa prompt-sync
const prompt = require("prompt-sync")();

// =======================
// Variáveis e Constantes
// =======================
let rodando = true;

const menuOpcoes = [
  "1 - Criar usuário",
  "2 - Mostrar usuário",
  "3 - Adicionar habilidade",
  "4 - Listar habilidades",
  "5 - Calcular nível (baseado em XP)",
  "0 - Sair"
];

// =======================
// Objeto principal
// =======================
let usuario = {
  nome: "",
  idade: 0,
  xp: 0,
  habilidades: []
};

// =======================
// Arrow Functions
// =======================
const mostrarMenu = () => {
  console.log("\n===== MENU =====");
  menuOpcoes.forEach(op => console.log(op));
};

const calcularNivel = (xp) => {
  if (xp < 100) return "Iniciante";
  if (xp < 300) return "Intermediário";
  if (xp < 600) return "Avançado";
  return "Mestre";
};

const adicionarHabilidade = (habilidade) => {
  usuario.habilidades.push(habilidade);
};

// =======================
// Loop principal
// =======================
while (rodando) {
  mostrarMenu();
  let escolha = prompt("Escolha uma opção: ");

  switch (escolha) {
    case "1":
      usuario.nome = prompt("Digite o nome: ");
      usuario.idade = Number(prompt("Digite a idade: "));
      usuario.xp = Number(prompt("Digite o XP inicial: "));
      console.log("Usuário criado com sucesso!");
      break;

    case "2":
      console.log("\n=== DADOS DO USUÁRIO ===");
      console.log(`Nome: ${usuario.nome}`);
      console.log(`Idade: ${usuario.idade}`);
      console.log(`XP: ${usuario.xp}`);
      break;

    case "3":
      let novaHab = prompt("Digite a habilidade: ");
      adicionarHabilidade(novaHab);
      console.log("Habilidade adicionada!");
      break;

    case "4":
      console.log("\n=== HABILIDADES ===");
      if (usuario.habilidades.length === 0) {
        console.log("Nenhuma habilidade cadastrada.");
      } else {
        usuario.habilidades.forEach((hab, index) => {
          console.log(`${index + 1} - ${hab}`);
        });
      }
      break;

    case "5":
      const nivel = calcularNivel(usuario.xp);
      console.log(`Nível do usuário: ${nivel}`);
      break;

    case "0":
      console.log("Encerrando programa...");
      rodando = false;
      break;

    default:
      console.log("Opção inválida!");
  }
}