import React, {Component} from 'react';
import {movies} from './movies';

import './styles.css';

class App extends Component {
    _setCurrentMovie = (movie) =>
        this.setState({
            currentMovie: movie
        });

    constructor(props) {
        super(props);

        this.setCurrentMovie = this._setCurrentMovie.bind(this);

        this.state = {
            currentMovie: null
        };
    }

    render() {
        return (
            <div>
                <div className="movie-previews">
                    {movies.map((movie) =>
                        <button
                            className="preview-button"
                            key={movie.title}
                            onClick={() => this.setCurrentMovie(movie)}
                        >
                            <p>{movie.title}</p>
                            <p>{movie.releaseYear}</p>
                            <img
                                alt={movie.title}
                                src={movie.posterUrl}
                                height={250}
                            />
                        </button>
                    )}
                </div>
                <div>
                    {
                        this.state.currentMovie ?
                            <div className="movie-information">
                                <div>
                                    <img
                                        alt={this.state.currentMovie.title}
                                        className="poster-image"
                                        src={this.state.currentMovie.posterUrl}
                                        width={350}
                                    />
                                </div>
                                <div className="movie-text">
                                    <p>{this.state.currentMovie.title}</p>
                                    <p>Rating: {this.state.currentMovie.rating}/10</p>
                                    <p>Description: {this.state.currentMovie.description}</p>
                                    <p>Director: {this.state.currentMovie.director}</p>
                                    <p>Release Year: {this.state.currentMovie.releaseYear}</p>
                                    <p>Categories: {this.state.currentMovie.categories}</p>
                                </div>
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
