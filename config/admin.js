module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07f6a3cd35cf29d26ab4a97e9ac74cc3'),
  },
});
