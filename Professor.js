// Professor.js
import { PessoaBase } from './PessoaBase.js';
import { TitulacaoEnum } from './Dominio.js';

export class Professor extends PessoaBase {
    #salario;
    #titulacao;

    constructor(nome, cpf, email, salario, titulacao) {
        super(nome, cpf, email);
        this.salario = salario;
        this.titulacao = titulacao;
    }

    set salario(valor) {
        const salarioNum = Number(valor);
        if (isNaN(salarioNum) || salarioNum < 1500) {
            const erro = new Error("Salário abaixo do piso");
            erro.code = "ERR_SALARIO_BASE";
            throw erro;
        }
        this.#salario = salarioNum;
    }

    get salario() {
        return this.#salario;
    }

    set titulacao(valor) {
        // Normaliza para maiúsculas para evitar erros de digitação
        const titUpper = String(valor).trim().toUpperCase();
        
        if (!Object.values(TitulacaoEnum).includes(titUpper)) {
            const erro = new Error("Titulação inválida");
            erro.code = "ERR_TITULACAO_INVALIDA";
            throw erro;
        }
        this.#titulacao = titUpper;
    }

    get titulacao() {
        return this.#titulacao;
    }
}