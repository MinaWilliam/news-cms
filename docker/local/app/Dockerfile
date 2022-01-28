FROM node:16
ARG NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 1337

CMD ["yarn", "develop"]
