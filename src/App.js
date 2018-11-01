import React, {Component} from 'react';
import {movies} from './movies';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: null
        };
    }

    render() {
        return (
            <div>
                <div>
                    {movies.map((movie) =>
                        <button
                            onClick={() =>
                                this.setState({
                                    currentMovie: movie
                                })
                            }
                        >
                            <p>{movie.title}</p>
                            <p>{movie.releaseYear}</p>
                            <img
                                alt={movie.title}
                                src={movie.posterUrl}
                                width={100}
                            />
                        </button>
                    )}
                </div>
                <div>
                    {
                        this.state.currentMovie ?
                            <div>
                                <p>{this.state.currentMovie.title}</p>
                                <p>Rating: {this.state.currentMovie.rating}/10</p>
                                <p>Description: {this.state.currentMovie.description}</p>
                                <p>Director: {this.state.currentMovie.director}</p>
                                <p>Release Year: {this.state.currentMovie.releaseYear}</p>
                                <p>Categories: {this.state.currentMovie.categories}</p>
                                <img
                                    alt={this.state.currentMovie.title}
                                    src={this.state.currentMovie.posterUrl}
                                    width={300}
                                />
                            </div>
                            :
                            <div>
                                <p>Select a movie to see more information.</p>
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default App;
