import React, {Component} from 'react';

class MovieInformation extends Component {
    render() {
        const {currentMovie} = this.props;

        return (
            <div className="movie-information">
                <div>
                    <img
                        alt={currentMovie.title}
                        className="poster-image"
                        src={currentMovie.posterUrl}
                        width={350}
                    />
                </div>
                <div className="movie-text">
                    <p>{currentMovie.title}</p>
                    <p>Rating: {currentMovie.rating}/10</p>
                    <p>Description: {currentMovie.description}</p>
                    <p>Director: {currentMovie.director}</p>
                    <p>Release Year: {currentMovie.releaseYear}</p>
                    <p>Categories: {currentMovie.categories.join(',')}</p>
                </div>
            </div>
        );
    }
}

export default MovieInformation;
