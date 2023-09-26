import React from 'react'

export const MailList = () => {
	return (
		<div className="w-full mt-12 bg-green-600 text-white flex flex-col items-center gap-6 p-16">
			<div className="text-2xl font-bold">
				Save time, save money!
			</div>
			<span>Sign up and we'll send the best deals to you</span>
			<div>
				<input className='w-80 h-8 p-3 border-0 rounded ' type="text" placeholder='Your Email' />
				<button className='bg-white text-green-600 px-4 py-1 rounded ms-2'>Subscribe</button>
			</div>
		</div>
	)
}
