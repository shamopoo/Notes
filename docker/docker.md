# Docker —— 从入门到实践



## 安装Docker

```sh
$ docker --version
Docker version 1.12.3, build 6b644ec
$ docker info
ontainers: 0
...
Server Version: 1.12.3
```



如果 `docker version`、`docker info` 都正常的话，可以尝试运行一个[Nginx 服务器](https://hub.docker.com/_/nginx/)：

```sh
$ docker run -d -p 80:80 --name webserver nginx
```

服务运行后，可以访问 [http://localhost](http://localhost/)，如果看到了 "Welcome to nginx!"，就说明 Docker for Mac 安装成功了。



## 使用镜像

