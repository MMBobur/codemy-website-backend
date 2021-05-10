const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.staffs = require("../staffs/staff.model")(sequelize, Sequelize);
db.aforizm = require("../aforizm/model")(sequelize, Sequelize);
db.about = require("../about/tutorial.model")(sequelize, Sequelize);
db.tutorials = require("../videos/video.model")(sequelize, Sequelize);
db.kurslar = require("../kurslar/kurslar.model")(sequelize, Sequelize);
db.carousel = require("../carousel/model.carousel")(sequelize, Sequelize);
db.video = require("../videos/video.model")(sequelize, Sequelize);
db.dasturlash_tillari = require("../dasturlash_tillari/dasturlash_tillari.model")(
  sequelize,
  Sequelize
);

module.exports = db;
