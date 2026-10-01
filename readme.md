🎓 Sistema de Gestão Acadêmica - SENAI

Sistema de linha de comando (CLI) desenvolvido em JavaScript (Node.js) aplicando conceitos avançados de Programação Orientada a Objetos (POO) para a gestão de alunos e professores.

📌 Sobre o Projeto

O Sistema de Gestão Acadêmica permite o cadastramento, validação e consulta de alunos e professores em uma instituição ensino. O projeto foi estruturado com foco em boas práticas de POO, encapsulamento rígido, tratamento de erros centralizado e validações de domínio (como formato de CPF, e-mail, idade mínima e piso salarial).

✨ Funcionalidades

🎓 Matrícula de Alunos:

Cadastro de nome, CPF, e-mail, idade e curso.

Validação de idade mínima (14 anos - regra para menor aprendiz/aluno).

Status automático da matrícula (Ativa, Trancada ou Cancelada).

👨‍🏫 Contratação de Professores:

Cadastro de nome, CPF, e-mail, salário e titulação.

Validação de piso salarial mínimo (R$ 1.500,00).

Restrição de titulação via Enum (Especialista, Mestre, Doutor).

🔍 Busca por CPF:

Localização rápida de cadastros de alunos e professores no sistema.

Exibição formatada dos dados cadastrais.

⚠️ Tratamento Amigável de Erros:

Mapeamento de exceções com códigos customizados (ERR_CPF_INVALIDO, ERR_IDADE_MINIMA, ERR_SALARIO_BASE, etc.) traduzidos para mensagens claras ao usuário.

🏛️ Conceitos de POO Aplicados

Abstração: Uso da classe abstrata PessoaBase que proíbe a instanciação direta no sistema.

Encapsulamento: Uso de atributos privados nativos do JavaScript (#nome, #cpf, #idade, etc.) acessados e validados rigorosamente via getters e setters.

Herança: As classes Aluno e Professor estendem a classe PessoaBase.

Domínio/Enums: Congelamento de objetos de domínio (Object.freeze) para StatusMatriculaEnum e TitulacaoEnum.

📂 Estrutura de Arquivos

.
├── Dominio.js           # Enums para Status de Matrícula e Titulação
├── PessoaBase.js        # Classe abstrata base para Pessoas com validações
├── Aluno.js             # Classe especialista para Alunos
├── Professor.js         # Classe especialista para Professores
├── ValidadorUtil.js     # Utilitários de validação (CPF e E-mail)
├── GestorAcademico.js   # Regras de negócio, armazenamento e tratamento de erros
├── index.js             # Interface Interativa de Terminal (CLI)
└── package.json         # Configuração do projeto (ES Modules)


🚀 Como Executar o Projeto

📋 Pré-requisitos

Node.js (Versão 18.0.0 ou superior recomendada devido ao suporte nativo a readline/promises e campos privados #).

🔧 Passo a Passo

Clone ou baixe este repositório:

git clone https://github.com/seu-usuario/gestao-academica-senai.git
cd gestao-academica-senai


Certifique-se de habilitar os módulos ES (ESM):
No seu package.json, garanta que possui a propriedade:

{
  "type": "module"
}


Execute a aplicação:

node index.js


🧪 Exemplo de Uso (Menu CLI)

=== SISTEMA DE GESTÃO ACADÊMICA - SENAI ===

Menu Principal:
1. Matricular Aluno
2. Contratar Professor
3. Buscar Cadastro (por CPF)
4. Sair do Sistema

Escolha uma opção: 


📜 Licença

Este projeto é para fins educacionais. Sinta-se livre para utilizar e modificar!