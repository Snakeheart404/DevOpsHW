# DevOpsHW

## Консольні команди:
```
docker build -t snakeheart/devops-nodejs-app .
docker run --rm --name devops-nodejs --cpus="1" --memory="64M" -p 80:80 snakeheart/devops-nodejs-app
docker push snakeheart/devops-nodejs-app
```
## Як запустити:
1 крок:
```
docker build -t snakeheart/devops-nodejs-app .
```
або
```
docker pull snakeheart/devops-nodejs-app
```
2 крок:
```
docker run --rm --name devops-nodejs --cpus="1" --memory="64M" -p 80:80 snakeheart/devops-nodejs-app
```

[Репозиторій на Docker Hub](https://hub.docker.com/r/snakeheart/devops-nodejs-app)


