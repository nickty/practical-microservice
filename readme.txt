//running in development mode
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

//running in production mode
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

//stop and remove
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v