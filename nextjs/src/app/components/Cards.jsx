export function Cards({ title, img, price, priceDuo, description }) {
	return (
		<section className="w-full grid items-center grid-cols-[1fr_55%] gap-5 p-6 bg-white mb-6 border-y shadow-sm md 2xl:rounded-md">
			<div className="w-full flex justify-center">
				<img src={img} alt="" className="rounded-lg shadow-md shadow-gray-300 w-full h-[150px] object-cover" />
			</div>
			<div className="flex flex-col">
				<h3 className="text-base font-bold mb-1">{title}</h3>

				<p className="text-sm text-[#757575]">{description}</p>
				<div className="flex mt-3 gap-3 items-center w-full">
					{price && (
						<div className="flex gap-1 h-full flex-col items-center">
							{priceDuo && <span className="text-sm text-[#757575] text-center">Individual</span>}
							<span className="border w-fit px-4 p-1  rounded-lg bg-transparent text-[#757575] text-xs font-bold">${price}</span>
						</div>
					)}

					{priceDuo && (
						<div className="flex gap-1 h-full flex-col items-center">
							<span className="text-sm text-[#757575] text-center">Para compartir</span>
							<span className="border w-fit px-4 p-1 rounded-lg bg-transparent text-[#757575] text-xs font-bold">${priceDuo}</span>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}