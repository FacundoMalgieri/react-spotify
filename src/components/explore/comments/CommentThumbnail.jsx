import React from 'react';
import '../comments/comments.css';
import AddComments from './AddComments';

export class CommentThumbnail extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			active: true
		};
		this.toggleAddComments = this.toggleAddComments.bind(this);
	}

	toggleAddComments(event) {
		const isActive = !this.state.active;
		this.setState({
			active: isActive,
		});
	}

	render() {
		const isActive = this.state.active;
		if (this.props.item && this.props.item.images) {
			return (
				<div>
					<div className="comment-row">
						<span className="pull-left text-gray">COMMENTS</span>
						<div className="pull-right text-green add-comment-width" onClick={this.toggleAddComments}>
							Add comment <span className="circle bg-lightb">+</span>
						</div>
						<br/>
					</div>
					<AddComments active={isActive}/>
					<div className='bg-lightb row mar-b'>
						<div className="col-md-3">
						</div>
					</div>

				</div>
			);
		} else return null
	}
};
export default CommentThumbnail;