import React, { useState } from 'react'
import { Nav } from '../../component/navbar/Nav'
import { Header } from '../../component/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { SearchItem } from '../../component/searchItem/SearchItem'

export const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [openDate, setOpenDate] = useState(false);
	const [option, setOption] = useState(location.state.options);
	return (
		<div>
			<Nav />
			<Header type="list" />
			<div className="flex mx-auto w-11/12 lg:w-9/12  justify-center mt-5">
				<div className="w-full flex gap-5">
					<div className="w-full md:w-5/12 lg:w-1/4 bg-yellow-500 p-3 border rounded-xl sticky top-3 h-max ">
						<div className="text-xl text-white mb-3 "></div>
						<div className="flex flex-col gap-2 mb-3">
							<label className='text-sm' >Destination</label>
							<input className=' h-8 text-xs border-1 p-2' type="text" placeholder={destination} />
						</div>
						<div className="flex flex-col gap-2 mb-3">
							<label className='text-sm'>Check-in Date</label>
							<span onClick={() => setOpenDate(!openDate)} className='h-8 p-2 text-xs bg-white flex items-center cursor-pointer w-full '>{`${format(date[0].startDate, "MM/dd/yyyy")}
						to  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							{
								openDate && (
									<DateRange
										onChange={(item) => setDate([item.selection])}
										minDate={new Date()}
										ranges={date}
										className='w-full'
									/>
								)

							}
						</div>
						<div className="lsitem">
							<p className='mb-2 font-semibold'> Option</p>
							<div className="flex justify-between mb-3 text-sm">
								<span>Min price <small>per night</small></span>
								<input type="number" className='w-16 h-8 p-2' />
							</div>
							<div className="flex justify-between mb-3 text-sm">
								<span>Max price <small>per night</small></span>
								<input type="number" className='w-16 h-8 p-2 ' />
							</div>
							<div className="flex justify-between mb-3 text-sm">
								<span>Adult</span>
								<input type="number" min={1} className='w-16 h-8 p-2 ' placeholder={option.adult} />
							</div>
							<div className="flex justify-between mb-3 text-sm">
								<span>Children</span>
								<input type="number"
									min={0}
									className='w-16 h-8 p-2 ' placeholder={option.children} />
							</div>
							<div className="flex justify-between mb-3 text-sm">
								<span>Room</span>
								<input type="number" className='w-16 h-8 p-2 '
									min={1}
									placeholder={option.room} />
							</div>
						</div>
						<button className='bg-green-600 text-white px-4 py-1 rounded w-full'>Search</button>
					</div>
					<div className="lr w-full">
						<SearchItem />
					</div>
				</div>
			</div>
		</div>
	)
}
