import Posts from '../models/Post';
import paginate from '../helpers/paginate';
import Users from '../models/User';

// //------------- insert new toto ------------------
// const createNewTodo = ({ id, input }) => {
// 	return Users.findByIdAndUpdate(
// 		id,
// 		{
// 			$push: {
// 				input: input,
// 			},
// 		},
// 		{ new: true },
// 	);
// };

// //----------------remove a todo -------------------
// const removeTodo = ({ id, input }) => {
// 	return Users.findByIdAndUpdate(
// 		id,
// 		{
// 			$pull: {
// 				input: input,
// 			},
// 		},
// 		{ new: true },
// 	);
// };
// const PostController = {
// 	removeTodo,
// 	createNewTodo,
// };

export default PostController;
