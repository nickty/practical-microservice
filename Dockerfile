FROM node:15
WORKDIR /app3
COPY package.json .

RUN npm install

COPY . ./

EXPOSE 9000
CMD ["node", "index.js"]