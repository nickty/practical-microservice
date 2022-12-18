FROM node:15
WORKDIR /app
COPY /app3/package.json .

RUN npm install

COPY app3 ./

EXPOSE 3000
CMD ["node", "index.js"]