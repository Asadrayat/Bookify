import React from 'react'

export const PropertyList = () => {
	return (
		<div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-5 z-0 mb-5'>
			<div className='flex-1 cursor-pointer rounded-lg overflow-hidden'>
				<img className='w-full object-cover h-40' src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" alt="" srcset="" />
				<div className=''>
					<h1 className='text-base lg:text-2xl  md:text-2xl font-bold
					'>Hotels</h1>
					<h1 className='text-sm font-normal'>233 hotel</h1>
				</div>
			</div>
			<div className='flex-1 cursor-pointer rounded-lg overflow-hidden'>
				<img className='w-full object-cover h-40' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" srcset="" />
				<div className=''>
					<h1 className='text-base lg:text-2xl  md:text-2xl font-bold
					'>Apartments</h1>
					<h1 className='text-sm font-normal'>233 hotels</h1>
				</div>
			</div>
			<div className='flex-1 cursor-pointer rounded-lg overflow-hidden'>
				<img className='w-full object-cover h-40' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" srcset="" />
				<div className=''>
					<h1 className='text-base lg:text-2xl  md:text-2xl font-bold
					'>Resorts</h1>
					<h1 className='text-sm font-normal'>2331 hotel</h1>
				</div>
			</div>
			<div className='flex-1 cursor-pointer rounded-lg overflow-hidden'>
				<img className='w-full object-cover h-40' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" srcset="" />
				<div className=''>
					<h1 className='text-base lg:text-2xl  md:text-2xl font-bold
					'>Villas</h1>
					<h1 className='text-sm font-normal'>2331 hotels</h1>
				</div>
			</div>
			<div className='flex-1 cursor-pointer rounded-lg overflow-hidden'>
				<img className='w-full object-cover h-40' src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" srcset="" />
				<div className=''>
					<h1 className='text-base lg:text-2xl  md:text-2xl font-bold
					'>Cabins</h1>
					<h1 className='text-sm font-normal'>2331 hotels</h1>
				</div>
			</div>
		</div>
	)
}
