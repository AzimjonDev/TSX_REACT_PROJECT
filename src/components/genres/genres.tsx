import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "https://pdp-movies-78.onrender.com/api";

interface gener {
	id: number;
	name: string;
}
interface generState {
	genres: gener[];
}

export default class Genres extends Component<{}, generState> {
	state: generState = {
		genres: [],
	};

	async componentDidMount() {
		const { data: genres } = await axios(`${BASE_URL}/genres`);
  const {data:movies}= await axios(`${BASE_URL}/movies`);
		this.setState({ genres });

	}

	render() {
		const { genres } = this.state;
		return (
			<div className="m-5 mt-5">
				<div className="btn-group-vertical">
					<button className="btn btn-primary ">All Genres</button>
					{genres.map((gen, idx) => (
						<button key={idx} className="btn btn-primary mt-2">
							{gen.name}
						</button>
					))}
				</div>
			</div>
		);
	}
}
