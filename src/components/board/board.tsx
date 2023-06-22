import { AppState } from '../../app';
import cls from "./board.module.scss";

export interface BoardProps extends   Pick<AppState, 'board'> {
  onCell: (idx: number) => void;
}

export default function Board({ board, onCell}: BoardProps) {
  return (
    <div className='d-flex flex-column'>
    <div className={cls.board}>
      {board.map((board, idx) => (
        <button key={idx} onClick={() => onCell(idx)} className={cls.cell}>{board}</button>
      ))}
    </div>
    </div>
  );
}