import React, { useState } from 'react'
import { Nav } from '../../component/navbar/Nav'
import { Header } from '../../component/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'

export const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination)
	const [date, setDate] = useState(location.state.date)
	const [option, setOption] = useState(location.state.option)
	return (
		<div>
			<Nav />
			<Header type="list" />
			<div className="flex mx-auto w-11/12 lg:w-9/12  justify-center mt-5">
				<div className="w-full flex gap-5">
					<div className="w-ful; md:w-5/12 lg:w-1/4 bg-yellow-500 p-3 border rounded-xl sticky top-3 h-max ">
						<div className="text-xl text-white mb-3 "></div>
						<div className="flex flex-col gap-2 mb-3">
							<label className='text-sm' >Destination</label>
							<input className='h-8 border-0 p-2' type="text" placeholder={destination} />
						</div>
						<div className="flex flex-col gap-2 mb-3">
							<label className='text-sm'>Check-in Date</label>
							<span className='h-8 p-2 bg-white flex items-center cursor-pointer '>{`${format(date[0].startDate, "MM/dd/yyyy")}
						to  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
							<DateRange
								onChange={(item) => setDate([item.selection])}
								minDate={new Date()}
								ranges={date}
								className='w-full'
							/>
						</div>
					</div>
					<div className="lr">
					</div>
				</div>
			</div>
		</div>
	)
}
