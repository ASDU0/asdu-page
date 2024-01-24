FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000  # Asegúrate de que coincida con el puerto en tu aplicación Express.js

CMD ["npm", "start"]
