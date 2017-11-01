import React from 'react';
import '../results/results.css';
import {Link} from 'react-router-dom';

const CommentThumbnail = ({item}) => {
	if (item && item.images) {
		return (
			<div>
				<div className='bg-lightb row mar-b'>
					<div className="col-md-3">
						<img src={item.images[0].url} alt='Album Image' className='thumbnail-image'/>
					</div>
					<div className="col-md-9 mar-t">
						<span id='artist-name'>{item.artists[0].name}</span>
						<br/>
						<span id='album-name'>{item.name}</span>
						<br/>
						<a href={item.external_urls.spotify} className='link-wrapper'>
							<span><i className='glyphicon glyphicon-volume-up'></i></span>
							<span id='on-spotify'> Listen on Spotify</span>
						</a>
						<Link to='/explore' className="btn btn-lg btn-default pull-right
						btn-comments">BACK TO SEARCH</Link>
						<br/>
					</div>
				</div>
				<div className="row">
					<span className="pull-right glyphicon glyphicon-plus"></span>
				</div>
				<div className='bg-lightb row mar-b'>
					<div className="col-md-3">
					</div>
					<div className="col-md-9 mar-t">
						comment 1
					</div>
				</div>
			</div>
		);
	} else return null
};
export default CommentThumbnail;