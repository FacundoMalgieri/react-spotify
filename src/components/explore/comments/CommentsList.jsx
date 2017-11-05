import React from 'react';
import CommentThumbnail from './CommentThumbnail';
import ResultThumbnail from '../results/ResultThumbnail';

const CommentsList = ({album}) => {
	if (album[0]) {
		return (
			<div className="mar-t">
				<ResultThumbnail key={album.id} buttonText='BACK TO SEARCH' buttonUrl='/explore' item={album[0]}/>
				<CommentThumbnail key={album.id} item={album[0]}/>
			</div>
		);
	} else return null
};
export default CommentsList;