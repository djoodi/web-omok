import { Server, Origins } from 'boardgame.io/server';
import { Omok } from './Game';
import path from 'path';
import serve from 'koa-static';

const server = Server({
  games: [Omok],
  origins: ['https://web-omok.herokuapp.com/']
});

const PORT = process.env.PORT || 8000;

const frontEndAppBuildPath = path.resolve(__dirname, './build');
server.app.use(serve(frontEndAppBuildPath))

server.run(PORT, () => console.log('server running ' + PORT));