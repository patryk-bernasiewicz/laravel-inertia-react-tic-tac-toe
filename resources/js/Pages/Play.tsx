import React from 'react';
import { router } from '@inertiajs/react';

import { Board } from '../components/Board';

type TPlayProps = {
  session_id: string;
  state: string[];
  winner?: 'o' | 'x' | 'draw' | null;
};

const Play = (props: TPlayProps) => {
  console.log('==== props: ', props);

  const handleMove = (cell: number) => {
    router.post('/move', {
        cell,
    });
  };

  const handleNewGame = () => {
    router.post('/newGame');
  };

  return (
    <>
      {props.winner && (
        <div className="winner">
          {props.winner === 'draw' && 'It\'s a draw!'}
          {!!props.winner && props.winner !== 'draw' && `The winner is ${props.winner}!`}
        </div>
      )}
      <Board gameState={props.state} onMove={handleMove} isDisabled={!!props.winner} />
      <button type="button" onClick={handleNewGame}>
        New game
      </button>
    </>
  );
};

export default Play;
