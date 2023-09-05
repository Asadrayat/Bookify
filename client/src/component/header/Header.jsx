import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
export const Header = () => {
	return (
		<div className='bg-green-600 text-white flex '>
			<div className='mx-16 mt-5 mb-24'>
				<div className='flex justify-start gap-10 '>
					<div className='flex items-center gap-3 border-solid border-2 rounded-full border-white px-3 py-1'>
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className='flex items-center gap-3'>
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className='flex items-center gap-3'>
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className='flex items-center gap-3'>
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className='flex items-center gap-3'>
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport Taxis</span>
					</div>
				</div>
				<h1 className="text-4xl font-bold my-3">
					A lifetime of discounts? It's Genius.
				</h1>
				<p className="my-3">
					Get rewarded for your travels – unlock instant savings of 10% or
					more with a free Lamabooking account
				</p>
				<button className="bg-green-400 text-white px-4 py-1 rounded">Sign in / Register</button>
			</div>
		</div>
	)
}
