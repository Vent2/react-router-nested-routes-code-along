import React from 'react';


const MovieShow = ({match, movies}) => {
    return (
        <div>
            <h3 color="green">{movies[match.params.movieID].title}</h3>
        </div>
    )
}

export default MovieShow;