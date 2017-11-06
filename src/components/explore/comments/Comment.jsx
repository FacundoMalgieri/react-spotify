import React from 'react';
import './comments.css'

export class Comment extends React.Component {
	render() {
		return (
			<div className='bg-lightb pad-1 row mar-b-1'>
				<div className="col-xs-3 col-md-1">
					<img src={this.props.comment.image}
					     className='img-thumb'
					     alt="User thumbnail"/>
				</div>
				<div className="col-xs-9 col-md-11">
					<p className='text-gray'>{this.props.comment.email}</p>
					<span>"{this.props.comment.text}"</span>
				</div>
			</div>
		)
	}
}

export default Comment;