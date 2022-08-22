import { Server, Origins } from 'boardgame.io/server';
import { Omok } from './Game';
import path from 'path';
import serve from 'koa-static';

const server = Server({
  games: [Omok],
  origins: [Origins.LOCALHOST_IN_DEVELOPMENT,
    'https://web-omok.herokuapp.com/',
    'localhost']
});

const PORT = process.env.PORT || 8000;

const frontEndAppBuildPath = path.resolve(__dirname, './build');
server.app.use(serve(frontEndAppBuildPath))

server.run(PORT);