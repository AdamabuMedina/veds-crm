import { prices } from "@/lib/prices"

const calculatePrice = ({ density, category, period }) => {
	const densityValue = parseFloat(density)

	const priceEntry = prices.find(
		entry => densityValue >= entry.range[0] && densityValue <= entry.range[1]
	)

	if (priceEntry) {
		return category === "goods"
			? period === "10-15"
				? priceEntry.goods[0]
				: priceEntry.goods[1]
			: period === "10-15"
			? priceEntry.clothes[0]
			: priceEntry.clothes[1]
	}

	return "Цена не найдена для данных параметров"
}

export default calculatePrice
