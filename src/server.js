import { Server } from 'boardgame.io/server';
import path from 'path';
import serve from 'koa-static';
import { Omok } from './Game';

const server = Server({ games: [Omok] });
const PORT = process.env.PORT || 8000;

// Build path relative to the server.js file
const frontEndAppBuildPath = path.resolve(__dirname, './build');
server.app.use(serve(frontEndAppBuildPath))

server.run(PORT, () => {
  console.log("running server on "+ PORT);
  server.app.use(
    async (ctx, next) => await serve(frontEndAppBuildPath)(
      Object.assign(ctx, { path: 'index.html' }),
      next
    )
  )
});