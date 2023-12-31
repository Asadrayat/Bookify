import React from 'react'

export const Featured = () => {
	return (
		<div className='w-full  flex justify-between gap-5 z-0 '>
			<div className='relative text-lime-50 border rounded-lg overflow-hidden h-auto lg:h-80'>
				<img className='w-full object-cover' src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" srcset="" />
				<div className='absolute bottom-2 left-2 md:bottom-5 lg:bottom-5 md:left-5 lg:left-5'>
					<h1 className='text-base lg:text-4xl  md:text-4xl font-bold
					'>Dublin</h1>
					<h1 className='text-sm lg:text-2xl  md:text-2xl font-semibold'>123 properties</h1>
				</div>
			</div>
			<div className='relative text-lime-50 border rounded-lg overflow-hidden h-auto lg:h-80'>
				<img className='w-full object-cover' src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" srcset="" />
				<div className='absolute bottom-2 left-2 md:bottom-5 lg:bottom-5 md:left-5 lg:left-5'>
					<h1 className='text-base lg:text-4xl  md:text-4xl font-bold
					'>Reno</h1>
					<h1 className='text-sm lg:text-2xl  md:text-2xl font-semibold'>533 properties</h1>
				</div>
			</div>
			<div className='relative text-lime-50 border rounded-lg overflow-hidden h-auto lg:h-80'>
				<img className='w-full object-cover' src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=" alt="" srcset="" />
				<div className='absolute bottom-2 left-2 md:bottom-5 lg:bottom-5 md:left-5 lg:left-5'>
					<h1 className='text-base lg:text-4xl  md:text-4xl font-bold
					'>Austin</h1>
					<h1 className='text-sm lg:text-2xl  md:text-2xl font-semibold'>532 properties</h1>
				</div>
			</div>
		</div>
	)
}
