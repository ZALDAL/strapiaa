'use strict';

/**
 * fodd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fodd.fodd');
