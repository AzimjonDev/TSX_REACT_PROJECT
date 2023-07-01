import React, { Component } from "react";
import Genres from "./components/genres/genres";
import Movies from "./components/movies/movies";
import Navbar from "./components/navbar/navbar";
import stylesIndex from "./styles.module.scss"

export default class App extends Component {
		render() {
				return (
					<div>
						<Navbar/>
      <div className={stylesIndex.flex}>
						<Genres/>
						<Movies/>
						</div>
					</div>

				)
		}
}
