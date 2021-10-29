import React from 'react';

export const PostItem = ({ post, key }) => {
	return (
		<div className="col s12" key={key}>
			<div className="card blue-grey darken-1">
				<div className="card-content white-text">
					<span className="card-title">{post.title}</span>
					<p>{post.body}</p>
				</div>
			</div>
		</div>
	);
};
