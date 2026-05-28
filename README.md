# Achadinhos da Internet

Achadinhos da Internet é um projeto que utiliza um painel de gerenciamento Strapi para cadastrar e gerenciar produtos. O objetivo principal é fornecer links de compra diretos para itens interessantes encontrados online, facilitando a descoberta e compra de produtos de maneira prática e centralizada.

## Arquitetura

```
┌─────────────┐     ┌─────────────────┐     ┌──────────────┐
│   Frontend   │────▶│     Backend      │────▶│  PostgreSQL  │
│   Nuxt 2     │     │   Strapi v4      │     │              │
│  porta 3002  │     │   porta 3001     │     │  porta 5432  │
└─────────────┘     └─────────────────┘     └──────────────┘
```

- **Frontend**: Nuxt 2 (SPA) — Interface pública para visualização dos produtos
- **Backend**: Strapi v4 — CMS headless para gerenciamento de conteúdo
- **Banco de dados**: PostgreSQL 14 — Armazenamento de dados

## Pré-requisitos

### Com Docker (recomendado)
- [Docker](https://docs.docker.com/get-docker/) e Docker Compose

### Instalação local
- Node.js v18 ou v20 (v21+ não suportado)
- PostgreSQL 14+

## Instalação com Docker

1. Clone o repositório e copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

2. Edite o arquivo `.env` e configure os secrets (APP_KEYS, JWT_SECRET, etc.) com valores seguros.

3. Suba os containers:

```bash
make docker-up
```

4. Acesse o painel admin do Strapi em `http://localhost:3001/admin` e crie o usuário administrador.

5. O frontend estará disponível em `http://localhost:3002`.

## Instalação Local

1. Crie um banco de dados PostgreSQL:

```sql
CREATE DATABASE strapicms_db;
```

2. Copie e configure o arquivo de ambiente:

```bash
cp .env.example .env
```

3. Instale as dependências:

```bash
make install
```

4. Inicie o backend e frontend (em terminais separados):

```bash
make dev-backend
make dev-frontend
```

5. Acesse `http://localhost:3001/admin` para configurar o Strapi.

## Configuração

| Variável | Descrição | Valor padrão |
|---|---|---|
| `DATABASE_HOST` | Host do banco de dados | `localhost` |
| `DATABASE_PORT` | Porta do banco de dados | `5432` |
| `DATABASE_NAME` | Nome do banco de dados | `strapicms_db` |
| `DATABASE_USERNAME` | Usuário do banco de dados | `postgres` |
| `DATABASE_PASSWORD` | Senha do banco de dados | `postgres` |
| `APP_KEYS` | Chaves da aplicação Strapi | — |
| `API_TOKEN_SALT` | Salt para tokens de API | — |
| `ADMIN_JWT_SECRET` | Secret do JWT admin | — |
| `TRANSFER_TOKEN_SALT` | Salt para tokens de transferência | — |
| `JWT_SECRET` | Secret do JWT | — |
| `HOST_API` | URL do backend | `http://localhost:3001` |

## Uso

1. Acesse o painel admin do Strapi em `http://localhost:3001/admin`
2. Na primeira execução, crie o usuário administrador
3. Publique o conteúdo do **banner** (obrigatório para a API retornar dados)
4. Acesse o frontend em `http://localhost:3002`

## Comandos disponíveis

| Comando | Descrição |
|---|---|
| `make help` | Mostra todos os comandos disponíveis |
| `make docker-up` | Sobe todos os containers (build + start) |
| `make docker-down` | Para e remove todos os containers |
| `make docker-reset` | Remove volumes e recria todos os containers |
| `make docker-build` | Faz build das imagens sem iniciar |
| `make docker-logs` | Mostra logs de todos os containers |
| `make docker-logs-backend` | Mostra logs do backend |
| `make docker-logs-frontend` | Mostra logs do frontend |
| `make docker-status` | Mostra status dos containers |
| `make install` | Instala dependências do backend e frontend |
| `make dev-backend` | Inicia o backend em modo desenvolvimento |
| `make dev-frontend` | Inicia o frontend em modo desenvolvimento |

## Contribuindo

1. Faça um fork deste repositório
2. Crie um branch: `git checkout -b <nome_branch>`
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_branch>`
5. Crie a solicitação de pull

Consulte a documentação do GitHub sobre [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Licença

[MIT](https://choosealicense.com/licenses/mit/)

## Contato

<a href="https://www.linkedin.com/in/maikehenrique/" target="_blank">
  <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" />
</a>
