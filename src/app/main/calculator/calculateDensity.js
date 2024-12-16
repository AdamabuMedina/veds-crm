const calculateDensity = (weight, volume) => {
	const weightValue = parseFloat(weight)
	const volumeValue = parseFloat(volume)

	if (!isNaN(weightValue) && !isNaN(volumeValue) && volumeValue > 0) {
		return Math.round(weightValue / volumeValue)
	}

	return ""
}

export default calculateDensity
