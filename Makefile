-include infra/docker/.env
-include .env
export COMPOSE_PROFILES = $(ENV)

.PHONY: help build up down restart logs ps clean

# Docker Compose file paths
COMPOSE_FILE := -f infra/docker/compose.yml
COMPOSE_OVERRIDE := -f infra/docker/compose.override.yml
ENV_FILE := --env-file infra/docker/.env --env-file .env

# Check if override file exists
ifneq (,$(wildcard infra/docker/compose.override.yml))
    COMPOSE_FILES := $(COMPOSE_FILE) $(COMPOSE_OVERRIDE)
else
    COMPOSE_FILES := $(COMPOSE_FILE)
endif

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build Docker images
	docker compose $(ENV_FILE) $(COMPOSE_FILES) build

up: ## Start containers
	docker compose $(ENV_FILE) $(COMPOSE_FILES) up -d

down: ## Stop and remove containers
	docker compose $(ENV_FILE) $(COMPOSE_FILES) down

restart: ## Restart containers
	docker compose $(ENV_FILE) $(COMPOSE_FILES) restart

logs: ## Show container logs
	docker compose $(ENV_FILE) $(COMPOSE_FILES) logs -f

ps: ## List containers
	docker compose $(ENV_FILE) $(COMPOSE_FILES) ps

clean: ## Stop containers and remove volumes
	docker compose $(ENV_FILE) $(COMPOSE_FILES) down -v

rebuild: down build up ## Rebuild and restart containers
