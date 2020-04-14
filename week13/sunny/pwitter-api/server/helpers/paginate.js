const paginate = (input, page) => {
	const itemsPerPage = 5;
	const maxPage = Math.ceil(input.length / itemsPerPage);
	if (input.length < itemsPerPage) {
		return {
			data: input,
			maxPage,
		};
	} else {
		const skip = (page - 1) * itemsPerPage;
		const paged = input.slice(
			skip,
			skip + itemsPerPage > input.length ? input.length : skip + itemsPerPage,
		);
		return {
			data: paged,
			maxPage,
		};
	}
};

export default paginate;
