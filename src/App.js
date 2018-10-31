import React, {Component} from 'react';
import {movies} from './movies';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMovie: {}
        };
    }

    render() {
        return (
            <div>
                {movies.map((movie) =>
                    <div>
                        <p>{movie.title}</p>
                        <p>{movie.rating}</p>
                        <img
                            alt={movie.title}
                            src={movie.posterUrl}
                            width={100}
                        />
                    </div>

                )}
            </div>
        );
    }
}

export default App;
