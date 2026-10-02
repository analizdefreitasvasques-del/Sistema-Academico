// Aluno.js
import { PessoaBase } from './PessoaBase.js';
import { StatusMatriculaEnum } from './Dominio.js';

export class Aluno extends PessoaBase {
    #idade;
    #curso;
    #status;

    constructor(nome, cpf, email, idade, curso) {
        super(nome, cpf, email);
        this.idade = idade;
        this.#curso = curso;
        this.#status = StatusMatriculaEnum.ativa;
    }

    set idade(valor) {
        const idadeNum = Number(valor);
        if (isNaN(idadeNum) || idadeNum < 14 || idadeNum > 120) {
            const erro = new Error("Idade inválida para menor aprendiz/aluno");
            erro.code = "ERR_IDADE_MINIMA";
            throw erro;
        }
        this.#idade = idadeNum;
    }

    get idade() {
        return this.#idade;
    }

    get curso() {
        return this.#curso;
    }

    
    get status() {
        return this.#status;
    }

    set status(novoStatus) {
        if (!Object.values(StatusMatriculaEnum).includes(novoStatus)) {
            throw new Error("Status de matrícula inválido");
        }
        this.#status = novoStatus;
    }
}