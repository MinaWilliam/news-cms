FROM strapi/base

WORKDIR /srv/app

RUN yarn install

ENV NODE_ENV development

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
