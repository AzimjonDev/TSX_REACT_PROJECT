import React, { Component } from "react";
import Board from "./components/board/board";
import Histories from "./components/histories";

type Player = "X" | "O" | "";
type TBoard = (string | null)[];
export interface AppState {
	board: TBoard;
	histories: TBoard[];
	nextPlayer: Player;
	winner?: Player;
	currentIdx: number;
	game: boolean;
}

export default class App extends Component<{}, AppState> {
	constructor(props = {}) {
		super(props);
		this.state = JSON.parse(localStorage.getItem("state")!) || {
			board: new Array(9).fill(null),
			histories: [new Array(9).fill(null)],
			nextPlayer: "X",
			currentIdx: 0,
			winner: "",
			game: true,
		};
	}
	setStatStorage: typeof this.setState = (state) => {
		this.setState(state, () => {
			localStorage.setItem("state", JSON.stringify(this.state));
		});
	};
	checkWinner = () => {
		const win = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < win.length; i++) {
			const [a, b, c] = win[i];
			if (
				this.state.board[a] !== null &&
				this.state.board[a] === this.state.board[b] &&
				this.state.board[a] === this.state.board[c]
			) {
				return true;
			}
		}
		return false;
	};

	handleCell = (idx: number) => {
		let { nextPlayer, histories, currentIdx } = this.state;
		let board = [...this.state.board];

		if (board[idx]) return;
		if (this.state.game) {
			board[idx] = nextPlayer;
			nextPlayer = nextPlayer === "X" ? "O" : "X";
			this.setStatStorage((prev) => ({
				board,
				nextPlayer,
				histories: [...histories, board],
				currentIdx: currentIdx + 1,
			}));
		}
	};

	checkwin = () => {
		const win = this.checkWinner();
		if (win) {
			this.setState({ game: false });
			let value = this.state.nextPlayer === "X" ? "O" : "X";
			return <p style={{ color: "green" }}>{value} is winner 🏆</p>;
		}
		return <p>No winner !!!</p>;
	};


	handleHistores = (idx: number) => {
		const { histories } = this.state;
		const board = [...histories[idx]];
		this.setState({ game: true });
		this.setStatStorage({ board, currentIdx: idx });
	};
	render() {
		const { board, nextPlayer, histories, currentIdx } = this.state;
		return (
			<div className="container d-flex " style={{ gap: 10 }}>
				<Board board={board} onCell={this.handleCell} />

				<Histories
					onHistory={this.handleHistores}
					currentIdx={currentIdx}
					nextPlayer={nextPlayer}
					histories={histories}
				/>
				<p className="winnerPlayer">{this.checkwin()
				}</p>
			</div>
		);
	}
}
