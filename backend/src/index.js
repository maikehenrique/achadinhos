'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    const acoes = [
      'api::product.product.find',
      'api::product.product.findOne',
      'api::banner.banner.find',
      'api::banner.banner.findOne',
      'api::category.category.find',
      'api::category.category.findOne',
    ];

    for (const action of acoes) {
      const existing = await strapi
        .query('plugin::users-permissions.permission')
        .findOne({ where: { action, role: publicRole.id } });

      if (!existing) {
        await strapi
          .query('plugin::users-permissions.permission')
          .create({ data: { action, role: publicRole.id } });
      }
    }

    strapi.log.info('[bootstrap] Permissões públicas configuradas.');
  },
};
