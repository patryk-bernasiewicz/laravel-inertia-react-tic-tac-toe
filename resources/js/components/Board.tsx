import React from 'react';

type TBoardProps = {
  gameState: string[];
  isDisabled?: boolean;
  onMove: (cell: number) => void;
};

export const Board = (props: TBoardProps) => {
  return (
    <div className="grid">
      {props.gameState.map((value, index) => (
        <button
          key={`cell-${index}`}
          type="button"
          className="grid__cell"
          disabled={props.isDisabled}
          onClick={() => props.onMove(index)}
        >
          {value && <span className="grid__symbol">{props.gameState[index]}</span>}
          <span className="sr-only">Cell #{index}</span>
        </button>
      ))}
    </div>
  );
};
