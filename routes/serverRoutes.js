module.exports = function(app) {
    var config = require('../config.json');
    var server = require('../app');

    app.route(config.EquipePath)
        .get(server.getEquipe);
    app.route(config.RobosPath)
        .get(server.getRobos);
    app.route(config.PlacasPath)
        .get(server.getPlacas);
    app.route(config.AreasPath)
        .get(server.getAreas);
    app.route(config.PatrocinadoresPath)
        .get(server.getPatrocinadores);
    app.route(config.RodapePath)
        .get(server.getRodape);
}