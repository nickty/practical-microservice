FROM node:15
WORKDIR /app1
COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi

COPY . ./
ENV PORT 2000
EXPOSE $PORT
CMD ["node", "index.js"]