import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
const ContentRowTop = () => {
	return (
			<div className="container-fluid">
				<ContentRowMovies/>
				<div className="row">
					<LastMovieInDb />
					<GenresInDb/>
				</div>
			</div>
	);
}

export default ContentRowTop;
