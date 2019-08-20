.PHONY: start-dev
start-dev:
	docker-compose up -d app-dev

.PHONY: build-start-dev
build-start-dev:
	docker-compose up -d --build app-dev
