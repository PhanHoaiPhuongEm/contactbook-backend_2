const config = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    uri: process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/contactbook"
  }
};

module.exports = config;