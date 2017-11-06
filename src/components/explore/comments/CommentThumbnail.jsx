import React from 'react';
import '../comments/comments.css';
import AddComments from './AddComments';
import Comment from './Comment';

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
		let addCommentButton;
		if (this.state.active) {
			addCommentButton = <div><span className="circle pull-right text-green bg-lightb">x</span></div>;
		} else {
			addCommentButton = <div>Add comment <span className="circle text-green bg-lightb">+</span></div>
		}
		const comments = [
			{
				image: 'https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728',
				email: 'ricksanchez@gmail.com',
				text: 'I rather hear inter dimensional music'
			},
			{
				image: 'https://pre00.deviantart.net/04fa/th/pre/i/2015/012/0/3/p8x62axl_by_yourlovelytimelady-d8do89v.jpg',
				email: 'ericcartman@gmail.com',
				text: 'Hippies cant stand death metal'
			},
		];
		const isActive = this.state.active;
		let i = 0;
		if (this.props.item && this.props.item.images) {
			return (
				<div>
					<div className="comment-row">
						<span className="pull-left text-gray">COMMENTS</span>
						<div className="pull-right text-green add-comment-width" onClick={this.toggleAddComments}>
							{addCommentButton}
						</div>
						<br/>
					</div>
					<AddComments active={isActive}/>
					{
						comments.map(comment => {
							return (<Comment key={i++} comment={comment}/>)
						})
					}
				</div>
			)
				;
		}

		else
			return null
	}
}
;
export default CommentThumbnail;