import React from 'react';
import Post from '../../components/Post';

const PostBox = ({ postData, idData, id }) => {
	return (
		<div>
			{postData.map(post => (
				<Post post={post} />
			))}
		</div>
	);
};

export default PostBox;
