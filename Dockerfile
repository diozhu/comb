#FROM node:slim
FROM hub.c.163.com/library/node:slim
COPY ./dist /home/src/dist
#COPY ./build /home/src/build
#COPY ./routes /home/src/routes
WORKDIR /home/src
RUN cd /home/src && npm i express body-parser --registry=https://registry.npm.taobao.org
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
CMD ["node", "simple-server.js"]