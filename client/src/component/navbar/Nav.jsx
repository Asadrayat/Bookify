import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
	return (
		<div className='h-12  bg-green-600 flex  '>
			<div className=' text-white w-full flex justify-between items-center mx-2 lg:mx-16'>
				<Link to="/"><div className='font-bold'>Bookify</div></Link>
				<div className='flex gap-2 lg:gap-3'>
					<button className='bg-white text-green-600 px-4 py-1 rounded'>Register</button>
					<button className='bg-white text-green-600 px-4 py-1 rounded'>Login</button>
				</div>
			</div>
		</div>
	)
}
