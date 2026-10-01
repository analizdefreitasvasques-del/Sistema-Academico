import { ValidadorUtil } from "./ValidadorUtil.js";

export class pessoaBase {
    constructor(nome, email, cpf) {
        if (new.target === pessoaBase){
            const error = new Error ("não é possivel cadastrar uma pessoa generica no sitema");
            error.code = "ERR_CLASSE_ABSTRATA";
            throw error;
            
        }
    }
}

export class PessoaBase {
    #nome;
    #cpf;
    #email;

    constructor(nome, cpf, email) {
        if (new.target === PessoaBase) {
            const erro = new Error("AVISO: Não é possível cadastrar uma Pessoa genérica no sistema.");
            erro.code = "ERR_CLASSE_ABSTRATA";
            throw erro;
        }

        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }

    // Setters e Getters
    set nome(valor) {
        if (!valor || valor.trim() === "") {
            const erro = new Error("Nome inválido");
            erro.code = "ERR_NOME_VAZIO";
            throw erro;
        }
        this.#nome = valor.trim();
    }

    get nome() {
        return this.#nome;
    }

    set cpf(valor) {
        if (!ValidadorUtil.validarCPF(valor)) {
            const erro = new Error("CPF inválido");
            erro.code = "ERR_CPF_INVALIDO";
            throw erro;
        }
        this.#cpf = valor;
    }

    get cpf() {
        return this.#cpf;
    }

    set email(valor) {
        if (!ValidadorUtil.validarEmail(valor)) {
            const erro = new Error("E-mail inválido");
            erro.code = "ERR_EMAIL_INVALIDO";
            throw erro;
        }
        this.#email = valor;
    }

    get email() {
        return this.#email;
    }
}