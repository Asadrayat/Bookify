import React from 'react'

export const MailList = () => {
	return (
		<div className="w-full mt-8 bg-green-600 text-white flex flex-col items-center gap-6 md:p-12 p-8 lg:p-16">
			<div className="text-base lg:text-2xl  md:text-2xl font-bold">
				Save time, save money!
			</div>
			<span>Sign up and we'll send the best deals to you</span>
			<div className='flex flex-col lg:flex-row md:flex-row justify-center items-center  '>
				<input className='w-80 h-8 p-3 border-0 rounded ' type="text" placeholder='Your Email' />
				<button className='bg-white w-1/3 text-green-600 px-4 py-1 rounded lg:ms-2 md:ms-2 lg:mt-0 md:mt-0 mt-2'>Subscribe</button>
			</div>
		</div>
	)
}
