import React, { Component,RefObject } from "react";
import axios from "axios";


const BASE_URL = "https://pdp-movies-78.onrender.com/api";

interface Movie {
	id: number;
	title: string;
 numberInStock: string;
 dailyRentalRate: string;
 genre:{name: string}
}
interface movieState {
	movies:Movie[];
 currentMovies:Movie[]
}

export default class Movies extends Component<{}, movieState> {
 inputRef: RefObject<HTMLInputElement>;
 constructor(props: any){
  super(props);
  this.inputRef = React.createRef();
 }

	state: movieState = {
		movies: [],
  currentMovies:[],
	};




	async componentDidMount() {
  const {data:movies}= await axios(`${BASE_URL}/movies`);
		this.setState({ movies });

	}

	render() {
		const { movies } = this.state;
		return (
   <div className="w-75">
   <p className="w-auto">Showing {movies.length} movies in the database.</p>
   <div className="input-group mb-3">
<input ref={this.inputRef} type="text" className="form-control" placeholder="Search..."/>
<button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
   <table className="table">
     <thead>
       <tr>
         <th scope="col">Title</th>
         <th scope="col">Genre</th>
         <th scope="col">Stock</th>
         <th scope="col">Rate</th>
       </tr>
     </thead>
     <tbody>
 {movies.map((movie, idx) => (
       <tr key={idx}>
         <th>{movie.title}</th>
         <td>{movie.genre.name}</td>
         <td>{movie.numberInStock}</td>
         <td>{movie.dailyRentalRate}</td>
       </tr>
 ))}
     </tbody>
   </table>
 </div>
		);
	}
}

// import React, { Component, RefObject } from "react";
// import axios from "axios";

// const BASE_URL = "https://pdp-movies-78.onrender.com/api";

// interface Movie {
//  id: string;
//  title: string;
//  numberInStock: string;
//  dailyRentalRate: string;
//  genre: {name: string};
// }
// interface MoviesState {
//  movies: Movie[];
//  currentMovies: Movie[];
// }

// export default class Movies extends Component<{}, MoviesState> {
//  inputRef: RefObject<HTMLInputElement>;
//  constructor(props: any){
//   super(props);
//   this.inputRef = React.createRef();
//  }
//  state: MoviesState = {
//   movies: [],
//   currentMovies: [],
//  }

//  onSubmit = () => {
//   if (this.inputRef.current?.value !== "") {
//    this.searchMovie(this.inputRef.current?.value!);
//   }
//   else {
//    this.setState({currentMovies: [...this.state.movies]});
//   }
//  }

//  searchMovie = (searchWords: string) => {
//   let filterResults: any = [];
//   const movies = [...this.state.movies];
//   for(let i = 0; i < movies.length; i++) {
//    if(movies[i].title.toLowerCase().includes(searchWords.toLowerCase())){
//     filterResults.push(movies[i]);
//    }
//   }
//   this.setState({currentMovies: [...filterResults]});
//  }


//  async componentDidMount(){
//   const {data: movies} = await axios(`${BASE_URL}/movies`);
//   this.setState({movies, currentMovies: [...movies]});
//  }

//   render() {
//   const {currentMovies, movies} = this.state;
//     return (
//       <div className="w-75">
//         <p className="w-auto">Showing {movies.length} movies in the database.</p>
//         <div className="input-group mb-3">
//     <input ref={this.inputRef} type="text" className="form-control" placeholder="Search..."/>
//     <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.onSubmit}>Button</button>
//     </div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Title</th>
//               <th scope="col">Genre</th>
//               <th scope="col">Stock</th>
//               <th scope="col">Rate</th>
//             </tr>
//           </thead>
//           <tbody>
//       {currentMovies.map((movie, idx) => (
//             <tr key={idx}>
//               <th>{movie.title}</th>
//               <td>{movie.genre.name}</td>
//               <td>{movie.numberInStock}</td>
//               <td>{movie.dailyRentalRate}</td>
//             </tr>
//       ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }