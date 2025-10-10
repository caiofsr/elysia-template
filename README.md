# Elysia.js Template

Este é um template para iniciar projetos com Elysia.js, TypeScript, Drizzle ORM e autenticação.

## Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas:

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## 🚀 Começando

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1. Clone o Repositório

```bash
git clone https://github.com/caiofsr/elysia-template
cd elysia-template
```

### 2. Instale as Dependências

Use o Bun para instalar todas as dependências do projeto.

```bash
bun install
```

### 3. Configure as Variáveis de Ambiente

Copie o arquivo de exemplo `.env.example` para um novo arquivo `.env`.

```bash
cp .env.example .env
```

Agora, gere o segredo para o `better-auth` e adicione-o ao seu arquivo `.env`.

```bash
bun run auth:secret
```

Copie o valor gerado e cole no campo `BETTER_AUTH_SECRET` do seu arquivo `.env`. Você também precisará preencher as outras variáveis, como as credenciais do banco de dados.

### 4. Inicie o Banco de Dados

O projeto utiliza Docker Compose para gerenciar o container do banco de dados (PostgreSQL).

```bash
docker compose up -d
```

### 5. Execute as Migrações

Com o banco de dados rodando, aplique as migrações para criar as tabelas e estruturas necessárias.

```bash
bun run db:migrate
```

## 📜 Scripts Disponíveis

Aqui estão os principais scripts que você pode usar no seu dia a dia.

| Comando                 | Descrição                                                           |
| ----------------------- | ------------------------------------------------------------------- |
| `bun dev`               | Inicia o servidor em modo de desenvolvimento com hot-reload.        |
| `bun test`              | Executa a suíte de testes do projeto.                               |
| `bun run lint`          | Verifica a formatação e a qualidade do código com Biome.            |
| `bun run lint:fix`      | Corrige automaticamente os problemas de formatação encontrados.     |
| `bun run db:generate`   | Gera um novo arquivo de migração com base nas alterações do schema. |
| `bun run db:migrate`    | Aplica as migrações pendentes no banco de dados.                        |
| `bun run auth:secret`   | Gera um segredo seguro para a configuração de autenticação.             |
| `bun run auth:generate` | Gera os artefatos necessários para a biblioteca `better-auth`.          |

## ✅ Executando a Aplicação

Após seguir os passos de configuração, você pode iniciar o servidor de desenvolvimento:

```bash
bun dev
```

A aplicação estará disponível em `http://localhost:3000` (ou a porta que você configurou no seu `.env`).
