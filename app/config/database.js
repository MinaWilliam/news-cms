module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'news-database'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'news'),
        username: env('DATABASE_USERNAME', 'news'),
        password: env('DATABASE_PASSWORD', 'password'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
