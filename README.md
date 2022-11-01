# DevOpsHW

## Консольні команди:
```
docker build -t snakeheart/devops-nodejs-app .
docker run --rm --name devops-nodejs --cpus="1" --memory="64M" -p 80:80 snakeheart/devops-nodejs-app
docker push snakeheart/devops-nodejs-app
```
[Репозиторій на Docker Hub](https://hub.docker.com/r/snakeheart/devops-nodejs-app)


