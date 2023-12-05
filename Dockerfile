FROM node:18

WORKDIR /server

COPY package.json /server/package.json
COPY package-lock.json /server/package-lock.json

RUN npm i