const  React = require('react');
const { Lobby } = require('boardgame.io/react');
const { Client } = require('boardgame.io/react');
const { SocketIO } = require('boardgame.io/multiplayer');
const { Omok } = require('./Game');
const { OmokBoard } = require('./Board');

const OmokClient = Client({ 
  game: Omok,
  board: OmokBoard,
  //debug: false,
  multiplayer: SocketIO({server: 'localhost:8000'}),
});

const { protocol, hostname, port } = window.location;
const server = `${protocol}//${hostname}:${port}`;
console.log(server);
const importedGames = [{game: Omok, board: OmokBoard}];

class App extends React.Component {
  render() {
    return (
      <Lobby
      gameServer={`http://${window.location.hostname}:8000`}
      lobbyServer={`http://${window.location.hostname}:8000`}
      gameComponents={[
        { game: Omok, board: OmokBoard }
      ]}
    />)
  }
}

export default App;


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