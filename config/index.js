const config = {};

config.multer_storage = {
  dest: "images"
}

config.cors = {
  origin: ["http://192.168.0.107:3000"],
  credentials: true,
}

module.exports = config;