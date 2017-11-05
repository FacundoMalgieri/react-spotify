import React from 'react';
import './results.css';
import {Link} from 'react-router-dom';
const ResultThumbnail = ({item,buttonText,buttonUrl}) => {
	if (item && item.images) {
		return (
			<div className='bg-lightb row mar-b'>
				<div className="col-md-3">
					<img src={item.images[0].url} alt='Album' className='thumbnail-image'/>
				</div>
				<div className="col-md-9 mar-t">
					<span id='artist-name' className='text-gray'>{item.artists[0].name}</span>
					<br/>
					<span id='album-name'>{item.name}</span>
					<br/>
					<a href={item.external_urls.spotify} className='link-wrapper'>
						<span><i className='glyphicon glyphicon-volume-up'></i></span>
						<span id='on-spotify'> Listen on Spotify</span>
					</a>
					<br/>
					<Link to={buttonUrl} className="btn btn-lg btn-default pull-right
						btn-comments">{buttonText}</Link>
				</div>
			</div>
		);
	} else return null
};
export default ResultThumbnail;