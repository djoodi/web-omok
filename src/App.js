import React from 'react';
import { Lobby } from 'boardgame.io/react';
import { OmokBoard } from './board';
import { Omok } from './game';

const { protocol, hostname, port } = window.location;
const server = `${protocol}//${hostname}:${port}`;
const importedGames = [{ game: Omok, board: OmokBoard }];

export default () => (
  <div>
    <h1>Lobby</h1>
    <Lobby gameServer={server} lobbyServer={server} gameComponents={importedGames} />
  </div>
);