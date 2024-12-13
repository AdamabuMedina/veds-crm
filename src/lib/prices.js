const prices = [
	{ range: [901, 1000], goods: [1.6, 1.4], clothes: [null, null] },
	{ range: [801, 900], goods: [1.7, 1.5], clothes: [null, null] },
	{ range: [601, 800], goods: [1.8, 1.6], clothes: [null, null] },
	{ range: [501, 600], goods: [1.9, 1.7], clothes: [null, null] },
	{ range: [401, 500], goods: [2.0, 1.8], clothes: [3.3, 3.2] },
	{ range: [351, 400], goods: [2.1, 1.9], clothes: [3.5, 3.3] },
	{ range: [301, 350], goods: [2.2, 2.0], clothes: [3.6, 3.4] },
	{ range: [251, 300], goods: [2.3, 2.1], clothes: [3.7, 3.5] },
	{ range: [201, 250], goods: [2.4, 2.2], clothes: [3.8, 3.6] },
	{ range: [191, 200], goods: [2.5, 2.3], clothes: [3.8, 3.6] },
	{ range: [180, 190], goods: [2.6, 2.4], clothes: [3.8, 3.6] },
	{ range: [171, 180], goods: [2.7, 2.5], clothes: [3.9, 3.7] },
	{ range: [161, 170], goods: [2.8, 2.6], clothes: [4.0, 3.8] },
	{ range: [151, 160], goods: [2.9, 2.7], clothes: [4.1, 3.9] },
	{ range: [141, 150], goods: [3.0, 2.8], clothes: [4.2, 4.0] },
	{ range: [131, 140], goods: [3.1, 2.9], clothes: [4.3, 4.1] },
	{ range: [121, 130], goods: [3.2, 3.0], clothes: [4.4, 4.2] },
	{ range: [111, 120], goods: [3.3, 3.1], clothes: [4.5, 4.3] },
	{ range: [100, 110], goods: [3.4, 3.2], clothes: [4.6, 4.4] },
]

export default prices

// export const updatedPrices = prices.map(item => ({
// 	...item,
// 	goods: item.goods.map(value =>
// 		value !== null ? +(value + 0.1).toFixed(1) : null
// 	),
// }))
