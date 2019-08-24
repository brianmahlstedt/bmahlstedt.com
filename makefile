.PHONY: start-dev
start-dev:
	docker-compose up -d btm-frontend-dev btm-backend-dev

.PHONY: build-start-dev
build-start-dev:
	docker-compose up -d --build btm-frontend-dev btm-backend-dev

.PHONY: start-prod
start-prod:
	docker-compose up -d btm-frontend-prod btm-backend-prod

.PHONY: build-start-prod
build-start-prod:
	docker-compose up -d --build btm-frontend-prod btm-backend-prod
