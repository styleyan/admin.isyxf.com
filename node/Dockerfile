# 指定我们的基础镜像是node，版本是v8.0.0
FROM node:10.16.3
# 维护人
MAINTAINER Y. Jer

# 创建目录
RUN mkdir -p /opt/admin.isyxf.com

# COPY指令和ADD指令功能和使用方式类似。只是COPY指令不会做自动解压工作。
COPY . /opt/admin.isyxf.com

WORKDIR /opt/admin.isyxf.com

# 安装项目依赖包
RUN npm install --registry=https://registry.npm.taobao.org
# 安装 pm2
RUN npm install pm2 -g --registry=https://registry.npm.taobao.org

# 配置环境变量
ENV HOST 0.0.0.0

# 容器对外暴露的端口号
EXPOSE 8088

# 容器启动时执行的命令，类似npm run prd
CMD [ "pm2-runtime", "./process.json", "--no-daemon" ]