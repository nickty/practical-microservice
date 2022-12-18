FROM node:15
WORKDIR /app3
COPY /app3/package.json .

RUN npm install

COPY app3 ./

EXPOSE 9000
CMD ["node", "index.js"]