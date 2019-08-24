.PHONY: start-dev
start-dev:
	docker-compose up -d frontend-dev backend-dev

.PHONY: build-start-dev
build-start-dev:
	docker-compose up -d --build frontend-dev backend-dev

.PHONY: start-prod
start-prod:
	docker-compose up -d frontend-prod backend-prod

.PHONY: build-start-prod
build-start-prod:
	docker-compose up -d --build frontend-prod backend-prod
