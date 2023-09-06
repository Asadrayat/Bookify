import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
export const Header = () => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);
	return (
		<div className='bg-green-600 text-white flex relative '>
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
				<div className='h-12 bg-white border-2 border-solid border-yellow-600 flex items-center justify-around pl-3 py-2 rounded-lg absolute -bottom-6 w-11/12 '>
					<div className='flex items-center gap-3'>
						<FontAwesomeIcon icon={faBed} className='text-gray-300' />
						<input className='border-none outline-none' type="text" placeholder='where are you going?' />
					</div>
					<div className='flex items-center gap-3'>
						<FontAwesomeIcon icon={faCalendarDays} className='text-gray-300' />
						<span onClick={() => setOpenDate(!openDate)}  className='text-gray-300'>{`${format(date[0].startDate, "MM/dd/yyyy")}
						to  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
						{openDate && <DateRange
							editableDateInputs={true}
							onChange={item => setDate([item.selection])}
							moveRangeOnFirstSelection={false}
							ranges={date}
							className='absolute top-12'
						/>}
					</div>
					<div className='flex items-center gap-3'>
						<FontAwesomeIcon icon={faPerson} className='text-gray-300' />
						<span className='text-gray-300'>2 adults 2 children 1 room</span>
					</div>
					<div className='flex items-center gap-3'>
						<button className='bg-green-600 text-white px-4 py-1 rounded'>Search</button>
					</div>
				</div>

			</div>

		</div>
	)
}
