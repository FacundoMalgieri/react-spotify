import React from 'react';
import '../comments/comments.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';

export class AddComments extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			comment: {
				image:"https://www.artstartart.com/assets/images/generic_user.png",
				text: "",
				email: ""}
		};
		this.onCommentChange = this.onCommentChange.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onClickSave = this.onClickSave.bind(this);
	}

	onCommentChange(event) {
		let comment = this.state.comment;
		comment.text = event.target.value;
		this.setState({comment});
	}

	onEmailChange(event) {
		let comment = this.state.comment;
		comment.email = event.target.value;
		this.setState({comment});
	}

	onClickSave() {
		this.props.actions.saveComment(this.state.comment);
	}

	render() {
		if (this.props.active) {
			return (
				<div className='bg-lightb pad-2 row mar-b'>
					<div className="col-xs-3 col-md-1">
						<div className="circle bg-gray "></div>
					</div>
					<div className="col-xs-9 col-md-11">
						<input onChange={this.onEmailChange} className="mar-b-1 input-email width-100 text-black"
						       type="text" placeholder="e-mail"/>
						<textarea onChange={this.onCommentChange} className="input-textarea width-100 text-black"
						          placeholder="Write your comment"/>
						<button className='btn pull-right' onClick={this.onClickSave}>ADD</button>
					</div>
				</div>
			);
		}
		return null;
	}
};

function mapStateToProps(state, ownProps) {
	return {
		comment: state.reducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComments);

