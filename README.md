
# CS Skins Store API

API desenvolvida com **NestJS** para listar e filtrar skins de CS:GO, utilizando **Prisma ORM** com **MongoDB**. A API inclui funcionalidades para aplicar filtros baseados no nome da skin, float, preço, e categoria. O projeto também segue boas práticas de Clean Code e inclui documentação automática com Swagger.

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Rodando o Projeto](#rodando-o-projeto)
- [Documentação da API](#documentação-da-api)
- [Interceptor de Logging](#interceptor-de-logging)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Boas Práticas Implementadas](#boas-práticas-implementadas)

## Descrição do Projeto

Este projeto é uma API para listar e filtrar skins do jogo CS:GO, permitindo a aplicação de filtros como:
- Nome da skin
- Float (0.0 - 1.0)
- Preço
- Categoria (rifles, facas, etc.)

O projeto foi desenvolvido utilizando **NestJS** com **Prisma ORM** para interagir com um banco de dados **MongoDB**. Foi implementada uma arquitetura modular e organizada, seguindo as boas práticas de Clean Code.

## Tecnologias Utilizadas

- **NestJS**
- **TypeScript**
- **Prisma ORM**
- **MongoDB**
- **Swagger** (para documentação)
- **Docker** (para execução do ambiente)
- **Jest** (para testes unitários)
- **Class Validator** (para validação de dados)

## Requisitos

- **Node.js** (versão >= 16.x)
- **Docker** e **Docker Compose** (para ambiente de desenvolvimento)
- **MongoDB** (ou MongoDB no Docker)

## Instalação

1. Clone o repositório:

    \`\`\`bash
    git clone https://github.com/usuario/cs-skins-store.git
    cd cs-skins-store
    \`\`\`

2. Instale as dependências:

    \`\`\`bash
    npm install
    \`\`\`

3. Crie o arquivo `.env` na raiz do projeto com a URL de conexão para o MongoDB:

    \`\`\`bash
    DATABASE_URL=mongodb://localhost:27017/skinsdb
    \`\`\`

4. Gere o cliente do Prisma:

    \`\`\`bash
    npx prisma generate
    \`\`\`

## Rodando o Projeto

### Utilizando o Docker

Se você tiver **Docker** instalado, pode usar o Docker Compose para rodar tanto a aplicação quanto o MongoDB:

\`\`\`bash
docker-compose up --build
\`\`\`

Isso irá iniciar a API em \`http://localhost:3000\` e o MongoDB na porta \`27017\`.

### Rodando Localmente (Sem Docker)

Se preferir rodar sem Docker, siga os passos:

1. Certifique-se de que o MongoDB está rodando localmente.
2. Execute a aplicação:

    \`\`\`bash
    npm run start
    \`\`\`

3. A API estará acessível em \`http://localhost:3000\`.

## Documentação da API

A documentação Swagger é gerada automaticamente e pode ser acessada em:

\`\`\`
http://localhost:3000/api-docs
\`\`\`

Nesta interface, você pode visualizar todos os endpoints disponíveis, bem como testar os filtros aplicados para listar as skins.

### Endpoints Principais

- \`GET /items\`: Retorna todas as skins disponíveis, com possibilidade de aplicar filtros.

### Exemplos de Parâmetros de Filtro:

- **\`name\`**: Filtra skins que contenham a string fornecida no nome.
- **\`floatMin\`** e **\`floatMax\`**: Define a faixa de valores de float (0.0 a 1.0).
- **\`priceMin\`** e **\`priceMax\`**: Define a faixa de preços.
- **\`category\`**: Filtra por categoria da skin (por exemplo, rifle, faca, etc.).

Exemplo de chamada:

\`\`\`
GET /items?name=AK&floatMin=0.1&floatMax=0.3&priceMin=50&priceMax=150&category=rifle
\`\`\`

## Interceptor de Logging

A aplicação utiliza um **interceptor de logging** para monitorar o tempo de execução de cada requisição. Esse interceptor registra no console o tempo total que cada requisição levou para ser processada.

### Como funciona:

Toda vez que uma requisição é feita à API, o interceptor captura o tempo de início e fim da requisição e imprime o tempo no console.

**Exemplo de log**:

\`\`\`
Request took 120ms
Request took 300ms
\`\`\`

Este log pode ser útil para monitoramento de desempenho e depuração durante o desenvolvimento.

## Estrutura de Pastas

A estrutura de pastas segue uma organização modular, com cada recurso (neste caso, \`items\`) tendo seu próprio módulo, controlador, serviço, e DTOs:

\`\`\`
src/
  ├── app.module.ts
  ├── main.ts
  ├── common/
  │    ├── interceptors/
  │    │    └── logging.interceptor.ts
  ├── items/
  │    ├── dto/
  │    │    └── get-items-filter.dto.ts
  │    ├── items.controller.ts
  │    ├── items.service.ts
  │    └── items.module.ts
  └── prisma.service.ts
\`\`\`

## Boas Práticas Implementadas

- **Responsabilidade Única**: A lógica de negócios está isolada no serviço (\`ItemsService\`), e o controlador (\`ItemsController\`) lida apenas com as requisições HTTP.
  
- **Validação e DTOs**: Usamos **DTOs** para validar e transformar os dados de entrada, garantindo que os filtros aplicados sejam válidos.

- **Funções Auxiliares**: A lógica de filtragem foi separada em funções auxiliares para tornar o código mais limpo e modular.

- **Documentação Automática**: O Swagger está integrado e documenta todos os endpoints da API, tornando-a mais fácil de usar e testar.

## Testes

O projeto utiliza **Jest** para testes unitários. Para rodar os testes, execute:

\`\`\`bash
npm run test
\`\`\`

Os testes cobrem os principais fluxos do serviço de itens, garantindo que os filtros estejam funcionando corretamente e que os dados sejam validados antes de serem processados.

---

Com este **README.md**, a documentação da sua aplicação está clara, detalhada e organizada. Ela cobre todos os aspectos principais, desde a configuração inicial até o uso do Swagger, boas práticas e o sistema de logging.
