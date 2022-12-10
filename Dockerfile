FROM node:15
WORKDIR /app3
COPY package.json /app3

RUN npm install

COPY . ./

EXPOSE 9000
CMD ["node", "index.js"]