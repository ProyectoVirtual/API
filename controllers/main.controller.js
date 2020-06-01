const Model = require('../models/main.model');

exports.greeting = function (req, res) {
  const mainModel = Model("Hola mundo");
  mainModel.sayMessage(res)
};