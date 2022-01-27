FROM strapi/base

WORKDIR /srv/app

RUN yarn install

ENV NODE_ENV development

EXPOSE 1337

RUN chmod a+x /srv/app/run.sh

CMD ["/srv/app/run.sh"]
