FROM node:18

WORKDIR /server

COPY package*.json ./

RUN npm i

# Bundle your app source
COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]