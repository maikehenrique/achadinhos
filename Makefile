.PHONY: help docker-up docker-down docker-reset docker-logs docker-logs-backend docker-logs-frontend docker-status docker-build install dev-backend dev-frontend

COMPOSE_FILE := docker/docker-compose.yml
ENV_FILE := .env

help: ## Mostra todos os comandos disponíveis
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'

docker-up: ## Sobe todos os containers (build + start)
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up -d --build

docker-down: ## Para e remove todos os containers
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) down

docker-reset: ## Remove volumes e recria todos os containers
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) down -v
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up -d --build --wait db backend
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) up -d --build frontend

docker-build: ## Faz build das imagens sem iniciar os containers
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) build

docker-logs: ## Mostra logs de todos os containers
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) logs -f

docker-logs-backend: ## Mostra logs do backend
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) logs -f backend

docker-logs-frontend: ## Mostra logs do frontend
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) logs -f frontend

docker-status: ## Mostra status dos containers
	docker compose -f $(COMPOSE_FILE) --env-file $(ENV_FILE) ps

install: ## Instala dependências do backend e frontend
	cd backend && npm install
	cd frontend && npm install

dev-backend: ## Inicia o backend em modo desenvolvimento
	cd backend && npm run develop

dev-frontend: ## Inicia o frontend em modo desenvolvimento
	cd frontend && npm run dev
