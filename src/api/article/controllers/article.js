'use strict';

/**
 *  article controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

const uid = 'api::article.article';

module.exports = createCoreController(uid, ({strapi}) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;

      query.populate = query.populate ?? {cover: {fields: ['url']}};

      const entity = await strapi.service(uid).findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      if (entity.id && entity.viewsCount) {
        strapi.db.query(uid).update({
          where: {id: id},
          data: {
            viewsCount: parseInt(entity.viewsCount) + 1,
          },
        });
      }

      return this.transformResponse(sanitizedEntity);
    },

    async find(ctx) {
      const { query } = ctx;

      query.sort = query.sort ?? 'viewsCount:desc';
      query.fields = query.fields ?? 'title,publishedAt';
      query.populate = query.populate ?? {cover: {fields: ['url']}};
      if (typeof query.featured !== 'undefined') {
        query.filters =  {'featured': {'$eq': query.featured}};
      }

      const { results, pagination } = await strapi.service(uid).find(query);
      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults, { pagination });
    },
  })
);
