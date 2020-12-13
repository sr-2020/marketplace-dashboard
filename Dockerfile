FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN apk add git

RUN npm install && npm run build && rm -rf node_modules && rm *package* *ts*

RUN cp -fR server/* . && npm install

EXPOSE 8080
CMD [ "node", "main.js" ]
