    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhostt'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapicms_db'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'postgres'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl: process.env.DATABASE_SSL === "true"
        },
        debug: false,
      },
    });