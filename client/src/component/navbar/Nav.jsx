import React from 'react'

export const Nav = () => {
	return (
		<div className='h-12  bg-green-600 flex  '>
			<div className=' text-white w-full flex justify-between items-center mx-16'>
				<div className='font-bold'>Bookify</div>
				<div className='flex gap-3'>
					<button className='bg-white text-green-600 px-4 py-1 rounded'>Register</button>
					<button className='bg-white text-green-600 px-4 py-1 rounded'>Login</button>
				</div>
			</div>
		</div>
	)
}
