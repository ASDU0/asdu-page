FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

# Asegúrate de que coincida con el puerto en tu aplicación Express.js
EXPOSE 8080

CMD ["npm", "start"]
