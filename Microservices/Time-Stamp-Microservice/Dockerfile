FROM node:10.15.3-alpine as Build

WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install --quiet

# FROM Build as Test

# RUN npm run test

# FROM build as stage

EXPOSE 8080

CMD ["npm", "run", "start"]