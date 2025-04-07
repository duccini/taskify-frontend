# NestJS + Docker (Modo Desenvolvimento)

## Funcionalidades

- Tela de autenticação (registro/login):
  [X] Tabs ou páginas separadas para login e cadastro

- Página principal (após login):
  [X] Lista de tarefas do usuário
  [X] Filtro por status: pendente, concluída, todas
  [X] Formulário para criar nova tarefa
  Ações:
  [X] Marcar como concluída
  [] Editar título
  [X] Deletar tarefa

- Requisitos técnicos:
  [X] Hooks (useState, useEffect) para gerenciar estado
  [] Interface simples e responsiva (CSS, Tailwind ou UI Library)
  [] Consumo da API REST

## Pré-requisitos

- Docker
- Docker Compose

## Passos para rodar a aplicação

0. Considere mudar a versão do Node caso ocorra algum problema e tenha nvm instalado na máquina

```bash
nvm use v20
```

1. Clone o repositório:

```bash
git clone <seu-repo>
cd <seu-repo>
```

4. Construa e inicie o container:

```bash
docker compose up --build
```

5. A aplicação estará rodando em: http://localhost:3000

6. [Opcional] Comandos 'docker' úteis:

```bash
docker stop <nome-container> # parar o container
docker rm <nome-container> # deletar o container
docker compose down --volumes # deletar o volume -> apagar o BD
```
