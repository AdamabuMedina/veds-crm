const PriceInfo = ({ price }) => {
	const getPriceMessage = () => {
		if (typeof price === "number") {
			return `Цена за груз: ${price}$ за кг`
		}
		return price || "Введите данные для расчета цены"
	}

	return <h2 className="text-2xl mt-6">{getPriceMessage()}</h2>
}

export default PriceInfo
