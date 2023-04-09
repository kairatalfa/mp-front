export const pathPublic: { [k: string]: string } = {
	home: "/",
	productDetails: "/product/:idOrSlug",
};

export const pathPrivate: { [k: string]: string } = {
	accountSetting: "/account-setting",
};

export const paths: { [k: string]: string } = Object.assign(
	{},
	pathPublic,
	pathPrivate
);

export const checkPathMatch = (
	pathName: string,
	paths: { [k: string]: string }
) => {
	let isMatch = false;

	const allPaths = Object.keys(paths).map((k) => paths[k]);
	const pathFirstSection = pathName.split("/")[1];

	allPaths.forEach((p) => {
		if (p.slice(1) === pathFirstSection) isMatch = true;
	});

	return isMatch;
};
