const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
const idade = Number(prompt("Digite sua idade: "));

const opcoes = ["Saudação", "Dobro da idade", "Mostrar usuário", "Sair"];

const usuario = {
    nome: nome,
    idade: idade
};

const dobro = (num) => num * 2;

const mostrarMenu = () => {
    console.log("\n=== MENU ===");
    opcoes.forEach((op, index) => {
        console.log(`${index + 1} - ${op}`);
    });
};

let escolha;

do {
    mostrarMenu();
    escolha = Number(prompt("Escolha uma opção: "));

    switch (escolha) {
        case 1:
            console.log(`Olá, ${usuario.nome}!`);
            break;

        case 2:
            console.log(`O dobro da sua idade é: ${dobro(usuario.idade)}`);
            break;

        case 3:
            console.log("Dados do usuário:");
            console.log(usuario);
            break;

        case 4:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (escolha !== 4);