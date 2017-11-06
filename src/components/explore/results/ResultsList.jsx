import React from 'react';
import ResultThumbnail from './ResultThumbnail';

const ResultsList = ({results}) => {
	if (results && results[0] && results[0].albums) {
		return (
			<div className="mar-t">
				{results.map(result =>
					result.albums.items.map(item => {
						return (
							<ResultThumbnail key={item.id} buttonText='VIEW COMMENTS' buttonUrl={`/comments/${item.id}`} item={item}/>
						);
					})
				)}
			</div>
		);
	} else return null
};
export default ResultsList;