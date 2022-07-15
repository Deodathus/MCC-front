
rebuild:
	docker-compose down
	docker-compose build
	docker-compose up -d

down:
	docker-compose down

up:
	docker-compose up -d

restart:
	docker-compose down
	docker-compose up -d