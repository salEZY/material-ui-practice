import React from 'react';

import Accordion from '../Accordion';

export const PostList = ({ posts }) => {
	if (posts.length === 0) {
		return <h4>Loading...</h4>;
	}

	return (
		<div className="row">
			{posts.map(post => (
				<Accordion post={post} key={post.id} />
			))}
		</div>
	);
};
