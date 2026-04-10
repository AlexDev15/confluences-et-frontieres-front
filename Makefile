# ========================================
# Confluences et Frontières - Makefile
# ========================================

ENV_FILE := .env
COMPOSE_BASE := --env-file $(ENV_FILE) -f infra/docker/docker-compose.yml

.PHONY: build up down clean exec

build:
	docker compose $(COMPOSE_BASE) build
up:
	docker compose $(COMPOSE_BASE) up -d
down:
	docker compose $(COMPOSE_BASE) down
clean:
	docker compose $(COMPOSE_BASE) down -v -rmi all
exec:
	docker compose $(COMPOSE_BASE) exec front-app sh