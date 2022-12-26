import { addNewPlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        // POST endpoint
        .post(addNewPlayer)
        // GET endpoint
        .get(getPlayers);
}

export default routes;