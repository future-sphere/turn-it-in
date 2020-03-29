import Posts from '../models/Post';
import paginate from '../helpers/paginate';
import Todos from '../models/Todo';

const fetchPosts = () => {
	return Posts.find();
};

const PostController = {
	fetchPosts,
};

export default PostController;
