import Users from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET;

const handleLogin = async data => {
	const { phone, password } = data;
	if (phone && password) {
		try {
			const user = await Users.findOne({ phone });
			if (user) {
				const passwordMatch = bcrypt.compareSync(password, user.password);
				if (passwordMatch) {
					const token = jwt.sign({ userId: user._id }, jwtSecret);
					return { token, userId: user._id };
				}
				throw 'Password is incorrect ';
			}
			throw 'User phone is not found ';
		} catch (error) {
			throw error;
		}
	}
	throw 'You need to provide both phone and password ';
};

const register = async data => {
	const {
		email,
		password,
		phone,
		firstName,
		lastName,
		age,
		gender,
		street,
		city,
		state,
		zip,
		avatar,
	} = data;
	try {
		const emailExisted = await Users.findOne({ email });
		const phoneExisted = await Users.findOne({ phone });
		if (email && password && phone) {
			if (emailExisted) {
				throw 'The email has been taken';
			}
			if (phoneExisted) {
				throw 'The phone has been taken';
			}
			const newUser = {
				email,
				password,
				phone,
				firstName,
				lastName,
				age,
				gender,
				street,
				city,
				state,
				zip,
				avatar,
			};
			newUser.password = bcrypt.hashSync(password);
			return Users.create(newUser);
		}
		throw 'You need to provide email, phone and password';
	} catch (error) {
		throw error;
	}
};

const verifyToken = async data => {
	try {
		return await jwt.verify(data, jwtSecret);
	} catch (error) {
		throw error;
	}
};

const AuthController = {
	handleLogin,
	register,
	verifyToken,
};

export default AuthController;
