import Users from '../models/User';
import paginate from '../helpers/paginate';

const addFriend = async data => {
	const { userId, friendId } = data;
	try {
		if (userId === friendId) throw 'You cannot add yourself as friend';
		if (userId && friendId) {
			const user = await Users.findById(userId);
			if (user.friends.includes(friendId)) {
				throw 'You are already friends with this user ';
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
			throw 'You need to provide both userId and friendId ';
		}
	} catch (error) {
		throw error;
	}
};

const deleteFriend = async data => {
	const { userId, friendId } = data;
	try {
		if (userId === friendId) throw 'You cannot delete yourself ';
		if (userId && friendId) {
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
			throw 'You need to provide both userId and friendId ';
		}
	} catch (error) {
		throw error;
	}
};

const fetchFriendsByUser = async data => {
	const { userId, pageNumber } = data;
	try {
		const page = +pageNumber;
		const currUser = await Users.findById(userId);
		const allFriends = await Users.find({ _id: { $in: currUser.friends } });
		if (
			page <= parseInt(allFriends.length / 10) &&
			page > 0 &&
			Math.floor(page) === page
		) {
			return allFriends.slice((page - 1) * 10, page * 10);
		} else if (page == parseInt(allFriends.length / 10) + 1) {
			return allFriends.slice((page - 1) * 10);
		} else if (page > parseInt(allFriends.length / 10)) {
			throw `The largest page number is ${parseInt(allFriends.length / 10) +
				1}`;
		} else {
			throw 'The page number you enter is wrong';
		}
	} catch (error) {
		throw error;
	}
};

const fetchStrangersByUser = async data => {
	const { userId, pageNumber } = data;
	try {
		const page = +pageNumber;
		const currUser = await Users.findById(userId);
		currUser.friends.push(userId);
		const allStrangers = await Users.find({ _id: { $nin: currUser.friends } });
		if (
			page <= parseInt(allStrangers.length / 10) &&
			page > 0 &&
			Math.floor(page) === page
		) {
			return allStrangers.slice((page - 1) * 10, page * 10);
		} else if (page == parseInt(allStrangers.length / 10) + 1) {
			return allStrangers.slice((page - 1) * 10);
		} else if (page > parseInt(allStrangers.length / 10)) {
			throw `The largest page number is ${parseInt(allStrangers.length / 10) +
				1}`;
		} else {
			throw 'The page number you enter is wrong';
		}
	} catch (error) {
		throw error;
	}
};

const updateProfile = async data => {
	const { userId, key, value } = data;
	try {
		if (userId && key && value) {
			return await Users.findByIdAndUpdate(
				userId,
				{
					$set: { [key]: value },
				},
				{ new: true },
			);
		} else throw 'Messing some data';
	} catch (error) {
		throw error;
	}
};

const UserController = {
	addFriend,
	deleteFriend,
	fetchFriendsByUser,
	fetchStrangersByUser,
	updateProfile,
};

export default UserController;
