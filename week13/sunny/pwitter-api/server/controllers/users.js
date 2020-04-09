import Users from '../models/User';
import paginate from '../helpers/paginate';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const fetchAllUsers = async () => {
	const usersInfo = await Users.find();
	console.log(usersInfo);
	return usersInfo;
};

const addFriend = async ({ userId, friendId }) => {
	try {
		if (userId === friendId) throw 'You cannot add yourself as friend';
		if (userId && friendId) {
			const user = await Users.findById(userId);
			const friend = await Users.findById(friendId);
			if (user.friends.includes(friendId)) {
				throw 'You are already friends with this user';
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
		}
	} catch (error) {
		throw error;
	}
};

const deleteFriend = async ({ userId, friendId }) => {
	try {
		if (userId === friendId) throw 'You cannot delete yourself';
		if (userId && friendId) {
			const user = await Users.findById(userId);
			const friend = await Users.findById(friendId);
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
				throw 'You are not friends with this person';
			}
		} else {
			throw 'You have to provide both Id';
		}
	} catch (error) {
		throw error;
	}
};

const findFriendByUserId = async (data) => {
	const { userId, page } = data;
	try {
		const currUser = await Users.findById(userId);
		const friendsData = await Users.find({ _id: { $in: currUser.friends } });
		return {
			data: paginate(friendsData, page),
			success: true,
		};
	} catch (error) {
		return {
			data: error.message,
			success: false,
		};
	}
};

const findStrangerByUserId = async (data) => {
	const { userId, page } = data;
	try {
		// if userId === userId,....
		const currUser = await Users.findById(userId);
		const strangersData = await Users.find({ _id: { $nin: currUser.friends } });
		return {
			data: paginate(strangersData, page),
			success: true,
		};
	} catch (error) {
		return {
			data: error.message,
			success: false,
		};
	}
};

const findUserById = (userId) => {
	return Users.findById(userId);
};

const getCurrentUserByToken = async (token) => {
	try {
		const id = await jwt.verify(token, jwtSecret);
		console.log(id);
		const { userId } = id;
		console.log(userId);
		return await Users.findById(userId);
	} catch (error) {
		throw error;
	}
};

const updateProfile = async (data) => {
	const { field, value, userId } = data;
	try {
		const newUser = await Users.findByIdAndUpdate(
			userId,
			{
				$set: {
					[field]: value,
				},
			},
			{
				new: true,
			},
		);
		if (newUser) {
			return {
				data: newUser,
				success: true,
			};
		}
		return {
			data: 'User not found',
			success: false,
		};
	} catch (error) {
		return {
			data: error.message,
			success: false,
		};
	}
};

const UserController = {
	fetchAllUsers,
	addFriend,
	deleteFriend,
	findFriendByUserId,
	findStrangerByUserId,
	findUserById,
	getCurrentUserByToken,
	updateProfile,
};

export default UserController;
