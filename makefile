.PHONY: start-dev
start-dev:
	docker-compose up -d frontend

.PHONY: build-start-dev
build-start-dev:
	docker-compose up -d --build frontend
