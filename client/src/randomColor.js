export const RandomColor = (name) => {
	const arr = name.replace(/\s/g, '').split('');
	const res = arr.reduce((acc, val) => acc + val.charCodeAt(), 10000);
	return res.toString(16);
};
