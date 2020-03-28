import React, {
	Component,
	useState,
	useRef,
	useEffect,
	useContext,
} from 'react';
import classnames from 'classnames';
import postService from '../../services/posts';
import './index.scss';
// import { AppContext } from '../../context';
import Post from '../../components/Post';

const Posts = ({ posts }) => {
	// const { user } = useContext(AppContext);

	return (
		<div className='post-container'>
			{console.log(posts)}
			{posts && posts.map(post => <Post post={post} />)}
		</div>
	);
};

export default Posts;
