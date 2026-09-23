# Yongtech 🔥

> Uma oficina para transformar imaginação em experiências reais.

A **Yongtech** é minha presença pessoal na web e, ao mesmo tempo, um laboratório público de desenvolvimento de software.

O projeto está sendo construído de forma incremental enquanto aprofundo minha formação em engenharia de software. A base técnica (estrutura de API, conexão com o banco e testes) foi construída acompanhando o curso.dev, e a partir dela a Yongtech segue com identidade, interface e decisões próprias. Em vez de adicionar ferramentas apenas para aumentar a stack, procuro usar cada etapa para resolver uma necessidade real da aplicação.

A regra que orienta o desenvolvimento é simples:

> Cada etapa deve produzir uma melhoria real na Yongtech e uma capacidade que eu consiga explicar, defender e reutilizar.

---

## 🚧 Estado do projeto

A Yongtech ainda está em uma fase inicial de desenvolvimento e está sendo construída de forma incremental.

Atualmente, o repositório já possui:

- aplicação web com Next.js e React;
- desenvolvimento em JavaScript;
- landing page pública responsiva e acessível;
- identidade visual inicial da Yongtech;
- ambiente Node.js versionado com `.nvmrc`;
- banco de dados PostgreSQL para desenvolvimento local;
- serviços locais executados com Docker Compose;
- módulo inicial de acesso ao banco de dados;
- endpoint `/api/v1/status`;
- estrutura inicial de testes com Jest;
- primeiro teste de integração da API;
- configuração de caminhos com `jsconfig.json`;
- configuração com EditorConfig;
- formatação de código com Prettier;
- scripts para desenvolvimento, serviços, testes e formatação;
- documentação do projeto em `docs/`;
- acompanhamento da evolução por meio de Issues e commits;
- deploy público da aplicação.

Neste momento, o objetivo não é apresentar um produto concluído, mas construir sua base de maneira consciente e registrar a evolução técnica do projeto.

---

## 🛠️ Tecnologias atuais

### Aplicação

- JavaScript
- React
- Next.js
- CSS

### Backend e dados

- Node.js
- PostgreSQL
- `node-postgres` (`pg`)

### Desenvolvimento e infraestrutura

- Docker
- Docker Compose
- npm
- Git
- GitHub

### Qualidade e testes

- Jest
- Prettier
- EditorConfig

O ambiente do projeto utiliza **Node.js 24**.

Novas tecnologias devem entrar no projeto quando houver uma necessidade real que justifique sua adoção.

---

## 💻 Executando localmente

### Pré-requisitos

Para executar o projeto atualmente são necessários:

- Node.js 24
- npm
- Docker
- Docker Compose

Clone o repositório:

```bash
git clone https://github.com/WilksonPedro/yongtech.git
```

Entre no diretório:

```
bash
cd yongtech
```

Se estiver utilizando NVM:

```bash
nvm use
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Por padrão, a aplicação estará disponível em:

```text
http://localhost:3000
```

---

## 🧹 Formatação

O projeto utiliza Prettier para manter uma formatação consistente no código.

Para verificar a formatação dos arquivos:

```
bash
npm run lint:check
```

Para aplicar a formatação:

```
bash
npm run lint:fix
```

---

## 🧭 Como o projeto está sendo desenvolvido

A Yongtech também funciona como meu principal ambiente de transferência entre estudo e prática.

Quando encontro uma nova ferramenta, prática ou conceito durante meus estudos, a intenção não é adicioná-lo automaticamente ao projeto.

Antes disso, procuro entender:

1. qual problema ele resolve;
2. se esse problema realmente existe na Yongtech;
3. quais alternativas poderiam ser utilizadas;
4. por que determinada solução faz sentido;
5. como verificar se a implementação funciona;
6. o que consigo aprender, explicar e reutilizar depois dela.

Isso significa que algumas ferramentas ou funcionalidades podem aparecer mais lentamente do que apareceriam em um projeto criado a partir de um template completo.

Essa evolução gradual é intencional.

O histórico do repositório também deve registrar o processo de aprendizagem, as decisões tomadas e a evolução da minha capacidade de desenvolver software.

---

## 🗺️ Próximas frentes

Entre as áreas planejadas para a evolução do projeto estão:

- evolução da arquitetura da aplicação;
- ampliação da cobertura de testes automatizados;
- evolução da API;
- evolução da integração com PostgreSQL;
- migrations de banco de dados;
- validação e tratamento de erros;
- linting de código;
- ambientes de desenvolvimento, homologação e produção;
- integração contínua;
- evolução da interface e do conteúdo público da Yongtech.

Esses itens representam **direções de desenvolvimento**, não funcionalidades necessariamente prontas ou com implementação definida.

As tarefas concretas e seu estado atual podem ser acompanhados nas:

➡️ [Issues do projeto](https://github.com/WilksonPedro/yongtech/issues)

---

## 📚 Documentação

Além deste README, decisões relacionadas ao propósito e à direção da Yongtech são registradas em:

➡️ [`docs/yongTech.md`](./docs/yongTech.md)

Esse documento funciona como uma bússola para preservar a identidade do projeto enquanto sua implementação evolui.

---

## 🔥 O que a Yongtech pretende se tornar

A Yongtech não foi criada apenas como um portfólio.

Ela é uma oficina pessoal onde código, curiosidade e imaginação podem se transformar em aplicações, ferramentas, sistemas e experiências digitais.

No futuro, projetos maiores poderão fazer parte desse ecossistema.

Por enquanto, o foco está em construir uma fundação técnica sólida e usar o próprio desenvolvimento da Yongtech como parte da minha formação em engenharia de software.

---

## 🌐 Aplicação

A versão pública atual pode ser acessada em:

➡️ [yongtech](https://yongtech.com.br)

---

## 👤 Autor

**Wilkson**

Analista de TI direcionando sua carreira para desenvolvimento de software e construindo sua formação através de estudo, prática e projetos próprios.

[LinkedIn](https://www.linkedin.com/in/wilkson-dev-front-end/)
