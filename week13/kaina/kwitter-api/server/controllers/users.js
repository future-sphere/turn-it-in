import Users from '../models/User';
import paginate from '../helpers/paginate';

const fetchUsers = async () => {
	const data = await Users.find();
	return Users.find();
};

const createUser = data => {
	return Users.create(data);
};

const createFriendship = async data => {
	const { userId, friendId } = data;
	try {
		if (userId === friendId) throw 'You cannot add yourself as friend';
		if (userId && friendId) {
			const user = await Users.findById(userId);
			if (user.friends.includes(friendId)) {
				throw 'You have already added this user as friend';
			}
			await Users.findByIdAndUpdate(userId, {
				$push: {
					friends: friendId,
				},
			});
			await Users.findByIdAndUpdate(friendId, {
				$push: {
					friends: userId,
				},
			});
		} else {
			throw 'Missing user id or friend id';
		}
	} catch (error) {
		throw error;
	}
};

const removeFriendship = async ({ userId, friendId }) => {
	if (userId === friendId) throw 'You cannot add yourself as friend';
	if (userId && friendId) {
		try {
			const user = await Users.findById(userId);
			if (user.friends.includes(friendId)) {
				await Users.findByIdAndUpdate(userId, {
					$pull: {
						friends: friendId,
					},
				});
				await Users.findByIdAndUpdate(friendId, {
					$pull: {
						friends: userId,
					},
				});
			} else {
				throw 'You are not friend with this user';
			}
		} catch (error) {
			throw error;
		}
	}
};

const updateProfile = async data => {
	const { field, value, userId } = data;
	try {
		if (userId && field && value) {
			return await Users.findByIdAndUpdate(
				userId,
				{
					$set: {
						[field]: value,
					},
				},
				{ new: true },
			);
		} else throw 'Missing something';
	} catch (error) {
		throw error;
	}
};

const fetchFriendById = async ({ userId }) => {
	try {
		if (userId) {
			const currentUser = await Users.findById(userId);
			return await Users.find({ _id: { $in: currentUser.friends } });
		} else {
			throw 'Missing users';
		}
	} catch (error) {
		throw error;
	}
};

const fetchStrangerById = async ({ userId }) => {
	try {
		if (userId) {
			const currentUser = await Users.findById(userId);
			return await Users.find({ _id: { $nin: currentUser.friends } });
		} else {
			throw ' Missing users';
		}
	} catch (error) {
		throw error;
	}
};

const UserController = {
	fetchUsers,
	createUser,
	createFriendship,
	removeFriendship,
	updateProfile,
	fetchFriendById,
	fetchStrangerById,
};

export default UserController;
