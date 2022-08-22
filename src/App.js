import React from 'react';
import { Lobby } from 'boardgame.io/react';
//import { Client } from 'boardgame.io/react';
//import { SocketIO } from 'boardgame.io/multiplayer';
import { Omok } from './Game';
import { OmokBoard } from './Board';

// const TicTacToeClient = Client({ 
//   game: Omok,
//   board: OmokBoard,
//   //debug: false,
//   //multiplayer: SocketIO({server: 'localhost:8000'}),
// });

const {protocol, hostname, port} = window.location;
const server = `${protocol}//${hostname}:${port}`;
const importedGames = [{game: Omok, board: OmokBoard}];

export default () => (
  <div>
    <h1>Lobby</h1>
    <Lobby gameServer={server} lobbyServer={server} gameComponents={importedGames} />
  </div>
);


// class App extends React.Component {
//   state = { playerID: null };

//   render() {
//     if (this.state.playerID === null) {
//       return (
//         <div>
//           <p>Play as</p>
//           <button onClick={() => this.setState({ playerID: "0" })}>
//             Player 0
//           </button>
//           <button onClick={() => this.setState({ playerID: "1" })}>
//             Player 1
//           </button>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <TicTacToeClient playerID={this.state.playerID} />
//       </div>
//     );
//   }
// }


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <TicTacToeClient playerID = "0" />
//         <TicTacToeClient playerID = "1" />
//       </div>
  
//     )
//   }
// }