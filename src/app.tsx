import { json } from "node:stream/consumers";
import React, { Component } from "react";
import Board from "./components/board/board";
import Histories from "./components/histories";

type Player = "X" | "O";
type TBoard = (string | null)[];
export interface AppState {
	board: TBoard;
	histories: TBoard[];
	nextPlayer: Player;
	winner?: Player;
	currentIdx: number;

}

export default class App extends Component<{}, AppState> {

	constructor(props={}){
		super(props);
		this.state = JSON.parse(localStorage.getItem("state")!)|| {
			board: new Array(9).fill(null),
			histories: [new Array(9).fill(null)],
			nextPlayer: "X",
			currentIdx: 0,
			// winner: "X"
		};
	}
	setStatStorage:typeof this.setState=(state)=>{
		this.setState(state,()=>{
			localStorage.setItem("state", JSON.stringify(this.state))
		})
	}

	handleCell = (idx: number) => {
		let { nextPlayer, histories, currentIdx } = this.state;
		let board = [...this.state.board];

		if (board[idx]) return;

		board[idx] = nextPlayer;
		nextPlayer = nextPlayer === "X" ? "O" : "X";
		this.setStatStorage((prev) => ({
			board,
			nextPlayer,
			histories: [...histories, board],
			currentIdx: currentIdx + 1,
		}));
	};
	handleHistores=(idx:number) =>{
		const {histories}=this.state;
		const board=[...histories[idx]]
		this.setStatStorage({board,currentIdx: idx})
	}
	render() {
		const { board, nextPlayer, histories, currentIdx, } = this.state;
		return (
			<main>
				<div className="container d-flex " style={{ gap: 10 }}>
					<Board board={board} onCell={this.handleCell} />

					<Histories onHistory={this.handleHistores} currentIdx={currentIdx} nextPlayer={nextPlayer} histories={histories} />
				</div>
			</main>
		);
	}
}
