import React, { Component } from "react";
import { AppState } from "./../app";

interface HistoriesProps
	extends Pick<AppState, "histories" | "nextPlayer" | "currentIdx" | "winner"> {
	onHistory: (idx: number) => void;
}
export default function Histories({ nextPlayer, histories, currentIdx, winner, onHistory }: HistoriesProps) {
	return (
		<div className="ms-2">
			<h4>{winner ? `Winner${winner}` : `Next player ${nextPlayer}`}</h4>
			<div className="btn-group-vertical my-2" style={{ gap: 2 }}>
				{histories.map((h, idx) => (
					<button key={idx} onClick={() => onHistory(idx)} disabled={currentIdx === idx}>
						Go to {idx ? `muve #${idx}` : "game start"}
					</button>
				))}
			</div>
		</div>
	);
}
