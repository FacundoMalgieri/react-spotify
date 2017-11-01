import {connect} from 'react-redux';
import * as actions from '../../../actions/actions';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import CommentsList from './CommentsList';

class Comments extends Component {
	constructor(props, context) {
		super(props, context);
		let id = this.props.match.params.id;
		this.props.actions.searchAlbum(id);
	}

	render() {
		const {album} = this.props;
		return (
			<section className="container mar-t">
				<CommentsList album={album}/>
			</section>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		album: state.commentsReducer
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);