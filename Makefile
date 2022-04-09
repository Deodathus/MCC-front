
rebuild:
	docker-compose down
	docker-compose build
	docker-compose up -d
	npm install

down:
	docker-compose down

up:
	docker-compose up -d