// GestorAcademico.js
import { Aluno } from './Aluno.js';
import { Professor } from './Professor.js';

export class GestorAcademico {
    constructor() {
        this.alunos = [];
        this.professores = [];
    }

    cadastrarAluno(nome, cpf, email, idade, curso) {
        try {
            const novoAluno = new Aluno(nome, cpf, email, idade, curso);
            this.alunos.push(novoAluno);
            console.log("\n[SUCESSO] Aluno matriculado com sucesso!");
        } catch (erro) {
            this.traduzirErroParaOCliente(erro);
        }
    }

    cadastrarProfessor(nome, cpf, email, salario, titulacao) {
        try {
            const novoProfessor = new Professor(nome, cpf, email, salario, titulacao);
            this.professores.push(novoProfessor);
            console.log("\n[SUCESSO] Professor contratado com sucesso!");
        } catch (erro) {
            this.traduzirErroParaOCliente(erro);
        }
    }

    buscarPorCpf(cpf) {
        const pessoaEncontrada = 
            this.alunos.find(a => a.cpf === cpf) || 
            this.professores.find(p => p.cpf === cpf);

        if (!pessoaEncontrada) {
            console.log("\n[AVISO]: Nenhum cadastro encontrado com o CPF informado.");
            return;
        }

        console.log("\n--- DADOS DO CADASTRO ---");
        console.log(`Nome: ${pessoaEncontrada.nome}`);
        console.log(`CPF: ${pessoaEncontrada.cpf}`);
        console.log(`E-mail: ${pessoaEncontrada.email}`);
        
        if (pessoaEncontrada instanceof Aluno) {
            console.log(`Tipo: Aluno`);
            console.log(`Idade: ${pessoaEncontrada.idade}`);
            console.log(`Curso: ${pessoaEncontrada.curso}`);
            console.log(`Status: ${pessoaEncontrada.status}`);
        } else if (pessoaEncontrada instanceof Professor) {
            console.log(`Tipo: Professor`);
            console.log(`Salário: R$ ${pessoaEncontrada.salario.toFixed(2)}`);
            console.log(`Titulação: ${pessoaEncontrada.titulacao}`);
        }
        console.log("-------------------------\n");
    }

    traduzirErroParaOCliente(erro) {
        switch (erro.code) {
            case "ERR_CLASSE_ABSTRATA":
                console.log("\n-> AVISO: Não é possível cadastrar uma Pessoa genérica no sistema.");
                break;
            case "ERR_NOME_VAZIO":
                console.log("\n-> AVISO: O campo de nome é obrigatório e não pode ficar em branco.");
                break;
            case "ERR_CPF_INVALIDO":
                console.log("\n-> AVISO: O CPF informado é inválido. Digite exatamente 11 números sem formatação.");
                break;
            case "ERR_EMAIL_INVALIDO":
                console.log("\n-> AVISO: O endereço de e-mail deve conter um formato válido (ex: nome@dominio.com).");
                break;
            case "ERR_IDADE_MINIMA":
                console.log("\n-> AVISO: O aluno deve ter no mínimo 14 anos para efetuar a matrícula no SENAI.");
                break;
            case "ERR_SALARIO_BASE":
                console.log("\n-> AVISO: O salário registrado não pode ser inferior ao piso da categoria (R$ 1500,00).");
                break;
            default:
                console.log("\n-> AVISO SISTÊMICO: Falha no processamento dos dados. Tente novamente.");
                break;
        }
    }
}