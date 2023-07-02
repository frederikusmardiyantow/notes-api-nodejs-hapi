const CollaborationsHandler = require("./handler");
const routes = require("./routes");

module.exports = {
    name: 'collaboration',
    version: '1.0.0',
    register: async (server, { collaborationsService, notesService, validator }) => {
        const collaborationHandler = new CollaborationsHandler(collaborationsService, notesService, validator);
        server.route(routes(collaborationHandler));
    }
}