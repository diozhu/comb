#!/usr/bin/env bash
CONTAINER_NAME=arp.comb-dev
IMAGE_NAME=arp.hy-sport.cn/comb/node-dev
IMAGE_TAG=latest
PORT=9900
DIR=comb


rm -rf ${DIR}
git clone -b develop http://git.hy-sport.cn/front/comb.git ${DIR}

CONTAINER_ID=`docker ps --filter="name=${CONTAINER_NAME}" -q`
if [ -n "${CONTAINER_ID}" ]; then
    echo "### kill container ${CONTAINER_ID} ###"
    docker kill ${CONTAINER_ID}
fi

CONTAINER_ID=`docker ps --filter="name=${CONTAINER_NAME}" -q -a`
if [ -n "${CONTAINER_ID}" ]; then
    echo "### remove container ${CONTAINER_ID} ###"
    docker rm ${CONTAINER_ID}
fi

IMAGE_ID=`docker images -q ${IMAGE_NAME}:${IMAGE_TAG}`
if [ -n "${IMAGE_ID}" ]; then
    echo "### remove image ${IMAGE_ID} ###"
    docker rmi ${IMAGE_ID}
fi

echo "### build image ###"
docker build -t ${IMAGE_NAME}:${IMAGE_TAG} -f ${DIR}/Dockerfile ${DIR}

echo "### run image ###"
docker run -d -p ${PORT}:3000 --name ${CONTAINER_NAME} ${IMAGE_NAME}:${IMAGE_TAG}

echo "### del dir ###"
rm -rf ${DIR}

