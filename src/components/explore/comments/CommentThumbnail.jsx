import React from 'react';
import '../comments/comments.css';
import AddComments from './AddComments';
import Comment from './Comment';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions'

export class CommentThumbnail extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			comments: this.props.actions.loadComments(),
			active: true,
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
		const isActive = this.state.active;
		const {comments} = this.props;

		let i = 0;
		if (this.props.item && this.props.item.images && comments) {
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
			);
		}
		else return null
	}
}

function mapStateToProps(state, ownProps) {
	return {
		comments: state.reducer
	};

}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentThumbnail);