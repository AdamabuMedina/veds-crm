"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useEffect, useState } from "react"
import calculateDensity from "./calculateDensity"
import calculatePrice from "./calculatePrice"
import PriceInfo from "./priceInfo"

const Calculator = () => {
	const [formData, setFormData] = useState({
		price: null,
		weight: "",
		volume: "",
		density: "",
		category: "goods",
		period: "10-15",
	})

	const { weight, volume, density, category, period } = formData

	useEffect(() => {
		setFormData(prev => ({
			...prev,
			density: calculateDensity(weight, volume),
		}))
	}, [weight, volume])

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		const calculatedPrice = calculatePrice({ density, category, period })
		setFormData(prevData => ({ ...prevData, price: calculatedPrice }))
	}

	return (
		<section className="py-4 m-10">
			<h2 className="text-slate-800 font-medium text-4xl text-center">
				Калькулятор плотности
			</h2>
			<form onSubmit={handleSubmit} className="mt-14">
				<div className="grid grid-cols-3 gap-4">
					<div className="grid  items-center gap-2">
						<Label htmlFor="weight">Вес</Label>
						<Input
							id="weight"
							type="number"
							name="weight"
							value={weight}
							onChange={handleChange}
							placeholder="кг"
							step="0.01"
							required
						/>
					</div>
					<div className="grid items-center gap-2">
						<Label htmlFor="volume">Объем</Label>
						<Input
							id="volume"
							type="number"
							name="volume"
							value={volume}
							onChange={handleChange}
							placeholder="м³"
							step="0.01"
							required
						/>
					</div>
					<div className="grid items-center gap-2">
						<Label htmlFor="density">Плотность</Label>
						<Input
							id="density"
							type="number"
							name="density"
							value={density}
							onChange={handleChange}
							placeholder="кг/м³"
							readOnly
						/>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-10">
					<div className="grid items-center gap-2">
						<Label htmlFor="category">Категория</Label>
						<Select
							value={category}
							onValueChange={value =>
								setFormData(prevData => ({ ...prevData, category: value }))
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Выберите категорию товара" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Категория</SelectLabel>
									<SelectItem value="goods">Хозтовары</SelectItem>
									<SelectItem value="clothes">Одежда</SelectItem>
									{/* <SelectItem value="underwear">Нижнее белье</SelectItem> */}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div className="grid items-center gap-2">
						<Label htmlFor="category">Период доставки</Label>
						<Select
							value={period} // Устанавливаем текущее значение
							onValueChange={value =>
								setFormData(prevData => ({ ...prevData, period: value }))
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Выберите период доставки" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Период доставки</SelectLabel>
									<SelectItem value="10-15">10-15 дней</SelectItem>
									<SelectItem value="18-25">18-25 дней</SelectItem>
									{/* <SelectItem value="35-45">35-45 дней</SelectItem> */}
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="flex items-center justify-between flex-col mt-10">
					<Button type="submit" className="w-full max-w-xs">
						Рассчитать
					</Button>
					<PriceInfo price={formData.price} />
				</div>
			</form>
		</section>
	)
}

export default Calculator
