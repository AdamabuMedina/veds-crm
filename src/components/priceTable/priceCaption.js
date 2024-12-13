const PriceCaption = () => {
	return (
		<div className="text-center h-auto py-6 sm:h-40 sm:py-0 my-10 bg-slate-800 flex items-center justify-center flex-col">
			<h1 className="text-xl sm:text-3xl text-white my-0 uppercase">
				Ориентировочная градация цен
			</h1>
			<p className="mt-1 text-xs sm:text-sm text-muted-foreground">
				Для уточнения точных цен на нижнее белье, сумки и запчасти, пожалуйста,
				свяжитесь с нашим менеджером.
			</p>
		</div>
	)
}

export default PriceCaption
