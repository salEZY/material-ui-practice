import React from 'react';

import { fetchPosts } from './postsServices';
import { PostList } from './PostList';

import Accordion from '../Accordion';

class PostPage extends React.Component {
	state = {
		posts: [],
	};

	componentDidMount() {
		fetchPosts().then(posts => {
			this.setState({
				posts,
			});
		});
	}

	render() {
		return (
			<>
				<h1> Posts Accordion </h1>
				<PostList posts={this.state.posts} />
			</>
		);
	}
}

export default PostPage;
