import React from 'react';
import '../comments/comments.css';

export class AddComments extends React.Component {
	constructor(props,context) {
		super(props,context)
		this.state = {
			comment: ""
		};
		this.onCommentChange = this.onCommentChange.bind(this);
	}

	onCommentChange(event) {
		let comment = this.state.comment;
		comment = event.target.value;
		this.setState({comment});
	}

	render() {
		if (this.props.active) {
			return (
				<div className='bg-lightb row mar-b'>
					<div className="col-md-3">
						<input onChange={this.onCommentChange} className="text-black" type="text" placeholder="Add comments"/>
					</div>
				</div>
			);
		}
		return null;
	}
};
export default AddComments;