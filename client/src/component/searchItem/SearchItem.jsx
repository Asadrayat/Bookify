import React from 'react'

export const SearchItem = () => {
	return (
		<div className="border border-solid border-gray-400 p-3 rounded-md flex justify-between gap-5 mb-5 w-full">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
				alt=""
				className="w-3/12 h-32 md:h-auto lg:h-60 object-cover"
			/>
			<div className="flex flex-col w-full gap-3 ">
				<h1 className="text-xl text-green-600">Tower Street Apartments</h1>
				<span className="text-sm bg-blue-800 text-white font-semibold w-max p-1 rounded-md">500m from center</span>
				<span className="text-sm ">Free airport taxi</span>
				<span className="text-sm font-bold">
					Studio Apartment with Air conditioning
				</span>
				<span className="text-sm">
					Entire studio • 1 bathroom • 21m² 1 full bed
				</span>
				<span className="text-sm text-blue-800 font-bold">Free cancellation </span>
				<span className="text-sm text-blue-800">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className=" lg:w-1/2 w-full  flex flex-col justify-between">
				<div className="flex justify-between">
					<span className='font-medium'>Excellent</span>
					<button className='bg-green-700 text-white p-2 font-bold border-0'>8.9</button>
				</div>
				<div className="text-right flex flex-col gap-2">
					<span className="text-2xl">$112</span>
					<span className="text-sm text-gray-600">Includes taxes and fees</span>
					<button className="bg-green-700 text-white font-bold px-2 py-1 border-0 cursor-pointer rounded-md ">See availability</button>
				</div>
			</div>
		</div>
	)
}
