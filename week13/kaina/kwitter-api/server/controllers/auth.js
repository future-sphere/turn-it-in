import Users from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET; //.env

const verifyToken = token => jwt.verify(token, jwtSecret);

const register = async data => {
	const { email, password, firstName, lastName, age } = data;
	try {
		const existed = await Users.findOne({ email });

		if (existed) {
			throw 'This email has already been registered';
		}
		const newUser = {
			email,
			firstName,
			lastName,
			age,
			password,
			phoneNumber,
		};
		const encryptPassword = bcrypt.hashSync(password, 10);
		newUser.password = encryptPassword;
		return Users.create(newUser);
	} catch (error) {
		throw error;
	}
};

const handleLogin = async data => {
	const { email, password } = data;
	if (email && password) {
		try {
			const user = await Users.findOne({ email });
			if (user) {
				const passwordMatch = bcrypt.compareSync(password, user.password);
				if (passwordMatch) {
					const token = jwt.sign({ userId: user._id }, jwtSecret);
					return {
						token,
					};
				}
				throw 'Password does not match';
			}
			throw 'User email not found';
		} catch (error) {
			throw error;
		}
	}
	throw 'No email or password entered';
};

const AuthController = {
	handleLogin,
	register,
	verifyToken,
};

export default AuthController;
