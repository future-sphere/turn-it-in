const capitalizeName = name => {
	return name
		.split('')
		.map((char, index) =>
			index === 0 ? char.toUpperCase() : char.toLowerCase(),
		)
		.join('');
};

const Name = {
	capitalizeName,
};

export default Name;
