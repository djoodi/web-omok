import { Server, Origins } from 'boardgame.io/server';
import { Omok } from './Game';
import path from 'path';
import serve from 'koa-static';

const server = Server({
  games: [Omok],
  origins: [Origins.LOCALHOST]
});

server.run(8000);

// const PORT = process.env.PORT || 8000;

// const frontEndAppBuildPath = path.resolve(__dirname, './build');
// server.app.use(serve(frontEndAppBuildPath))

// server.run(PORT, () => {
//   console.log("running server on " + PORT);
//   server.app.use(
//     async (ctx, next) => await serve(frontEndAppBuildPath)(
//       Object.assign(ctx, { path: 'index.html' }),
//       next()
//     )
//   );
// });