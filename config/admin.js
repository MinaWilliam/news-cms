module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b9a943148f1ba3253b8f3b11bc3f612'),
  },
});
