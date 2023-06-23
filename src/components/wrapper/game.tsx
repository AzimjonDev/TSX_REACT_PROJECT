import React, { Component } from "react";
import "./game.scss";
// import dice1 from "./dice/dice-1.png";
// import dice2 from "./dice/dice-2.png";
// import dice3 from "./dice/dice-3.png";
// import dice4 from "./dice/dice-4.png";
// import dice5 from "./dice/dice-5.png";
// import dice6 from "./dice/dice-6.png";

export interface Score {
	RandomNumber: number | string;
	leftScore: number;
	rightScore: number;
	imgSrc: string | null;
	imgRand: string | null;
}
export default class Game extends Component<Score> {
	state = {
		RandomNumber: null,
		leftScore: 0,
		rightScore: 0,
		imgSrc: null,
		imgRand: null,
	};
	randNumber = () => {
		let randImg = `./dice/dice-${Math.floor(Math.random() * 6) + 1}.png`;
		this.setState({ imgSrc: randImg });
		console.log(randImg);
	};
	render() {
		const { imgSrc } = this.state;
	
		return (
			<div>
				<main>
					<section className="player player--0 player--active">
						<h2 className="name" id="name--0">
							1-O'yinchi
						</h2>
						<p className="score" id="score--0">
							0
						</p>
						<div className="current">
							<p className="current-label">Hozirgi balingiz</p>
							<p className="current-score" id="current--0">
								0
							</p>
						</div>
					</section>
					<section className="player player--1">
						<h2 className="name" id="name--1">
							2-O'yinchi
						</h2>
						<p className="score" id="score--1">
							0
						</p>
						<div className="current">
							<p className="current-label">Hozirgi balingiz</p>
							<p className="current-score" id="current--1">
								0
							</p>
						</div>
					</section>
					<img src={this.state.imgSrc} alt="Playing dice" className="dice " />
					<button className="btn btn--new">🔄 Yangi o'yin</button>
					<button onClick={this.randNumber} className="btn btn--roll">
						🎲 Toshni tashlash
					</button>
					<button className="btn btn--hold">📥 Saqlash</button>
				</main>
			</div>
		);
	}
}
