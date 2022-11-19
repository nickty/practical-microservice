FROM node:15
WORKDIR /app2
COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . ./
ENV PORT 1000
EXPOSE $PORT
CMD ["node", "index.js"]