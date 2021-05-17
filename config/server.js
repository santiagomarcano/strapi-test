module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: "http://165.22.86.88/api",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "efc30a968c7bf08530b4203d4e2c8f32"),
    },
    url: "http://165.22.86.88/api/admin",
  },
});
