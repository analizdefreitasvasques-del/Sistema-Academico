// index.js
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import { GestorAcademico } from './GestorAcademico.js';
import { TitulacaoEnum } from './Dominio.js';

async function iniciarSistema() {
    const rl = readline.createInterface({ input, output });
    const gestor = new GestorAcademico();
    let sistemaRodando = true;

    console.log("=== SISTEMA DE GESTÃO ACADÊMICA - SENAI ===");

    while (sistemaRodando) {
        console.log("\nMenu Principal:");
        console.log("1. Matricular Aluno");
        console.log("2. Contratar Professor");
        console.log("3. Buscar Cadastro (por CPF)");
        console.log("4. Sair do Sistema");

        const opcao = await rl.question("\nEscolha uma opção: ");

        switch (opcao.trim()) {
            case '1': {
                console.log("\n--- Cadastro de Aluno ---");
                const nome = await rl.question("Nome: ");
                const cpf = await rl.question("CPF (11 números): ");
                const email = await rl.question("E-mail: ");
                const idade = await rl.question("Idade: ");
                const curso = await rl.question("Curso: ");

                gestor.cadastrarAluno(nome, cpf, email, Number(idade), curso);
                break;
            }
            case '2': {
                console.log("\n--- Cadastro de Professor ---");
                const nome = await rl.question("Nome: ");
                const cpf = await rl.question("CPF (11 números): ");
                const email = await rl.question("E-mail: ");
                const salario = await rl.question("Salário (R$): ");
                
                console.log(`Titulações permitidas: ${Object.values(TitulacaoEnum).join(', ')}`);
                const titulacao = await rl.question("Titulação: ");

                gestor.cadastrarProfessor(nome, cpf, email, Number(salario), titulacao.toUpperCase());
                break;
            }
            case '3': {
                console.log("\n--- Buscar Cadastro ---");
                const cpf = await rl.question("Digite o CPF para busca: ");
                gestor.buscarPorCpf(cpf);
                break;
            }
            case '4': {
                console.log("\nEncerrando o sistema com segurança. Até logo!");
                sistemaRodando = false;
                break;
            }
            default:
                console.log("\n[AVISO]: Opção inválida. Escolha um número de 1 a 4.");
                break;
        }
    }

    rl.close();
}

iniciarSistema();