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
        if (!Object.values(TitulacaoEnum).includes(valor)) {
            throw new Error("Titulação inválida");
        }
        this.#titulacao = valor;
    }

    get titulacao() {
        return this.#titulacao;
    }
}