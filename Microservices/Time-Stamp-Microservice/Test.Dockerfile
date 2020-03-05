FROM node:10.15.3-alpine as Build

WORKDIR /app

COPY package.json /app

RUN npm install --quiet

COPY . /app

EXPOSE 8080

CMD ["npm", "test", "--watch"]