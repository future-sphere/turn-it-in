import React from 'react';
import { AppContext } from '../../context';
import UsersService from '../../service/user';

const currentFriend = () => {
	const [friendList, setFriendList] = useState([]);

	useEffect(() => {
		const fetchAllFriend = async () => {
			try {
				const fetchFriend = await UsersService.findFriendById(userId, 1);
				if (fetchFriend.data.success) {
					setFriendList(fetchFriend.data.data.data);
				}
			} catch (error) {
				alert(error.message);
			}
		};
		fetchAllFriend();
	}, []);

	return <div></div>;
};

export default currentFriend;
