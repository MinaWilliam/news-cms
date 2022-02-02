'use strict';

/**
 *  article controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({strapi}) => ({
    async findOne(ctx) {
      const response = await super.findOne(ctx);

      if (response.data.id && response.data.attributes.viewsCount) {
        strapi.db.query('api::article.article').update({
          where: {id: response.data.id},
          data: {
            viewsCount: parseInt(response.data.attributes.viewsCount) + 1,
          },
        });
      }

      return response;
    }
  })
);
