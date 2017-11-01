import React from 'react';
import CommentThumbnail from './CommentThumbnail';

const CommentsList = ({album}) => {
	if (album[0]) {
		return (
			<div className="mar-t">
				<CommentThumbnail key={album.id} item={album[0]}/>
			</div>
		);
	} else return null
};
export default CommentsList;