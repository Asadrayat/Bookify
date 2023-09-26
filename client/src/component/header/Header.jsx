import React, { Children, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
export const Header = ({ type }) => {
	const [destination, setDestination] = useState('');
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]: operation === "i" ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	const navigate = useNavigate();
	const handleSearch = () => {
		navigate('/hotels', { state: { destination, date, options } })
	}

	return (
		<div className='bg-green-600 text-white flex relative '>
			<div className={type === "list" ? "w-11/12 mx-auto my-12" : "w-11/12 mx-auto mt-5 mb-24"}>
				<div className='flex justify-start gap-10 '>
					<div className='flex items-center gap-2  border-2 rounded-full border-white px-3 py-1'>
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
				{type !== "list" &&
					<>
						<h1 className="text-4xl font-bold my-3">
							A lifetime of discounts? It's Genius.
						</h1>
						<p className="my-3">
							Get rewarded for your travels – unlock instant savings of 10% or
							more with a free Lamabooking account
						</p>
						<button className="bg-green-400 text-white px-4 py-1 rounded">Sign in / Register</button>
						<div className='h-12 bg-white 400  border-2 border-yellow-600 flex items-center justify-around pl-3 py-2 rounded-lg absolute -bottom-6 w-11/12 mx-auto '>
							<div className='flex items-center gap-3'>
								<FontAwesomeIcon icon={faBed} className='text-gray-400' />
								<input className='border-none outline-none text-gray-400 ' type='text' placeholder='where are you going?'
									onChange={(e) => setDestination(e.target.value)}
								/>
							</div>
							<div className='flex items-center gap-3'>
								<FontAwesomeIcon icon={faCalendarDays} className='text-gray-400' />
								<span onClick={() => setOpenDate(!openDate)} className='text-gray-400 cursor-pointer'>{`${format(date[0].startDate, "MM/dd/yyyy")}
						to  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
								{openDate && <DateRange
									editableDateInputs={true}
									onChange={item => setDate([item.selection])}
									moveRangeOnFirstSelection={false}
									ranges={date}
									className='absolute top-12 z-10'
									minDate={new Date()}
								/>}
							</div>
							<div className='flex items-center gap-3'>
								<FontAwesomeIcon icon={faPerson} className='text-gray-400 ' />
								<span onClick={() => setOpenOptions(!openOptions)} className='text-gray-400 cursor-pointer'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
								{
									openOptions &&
									<div className="absolute top-12 bg-white text-gray-400  border rounded-md shadow-slate-300 shadow-xl flex flex-col justify-between z-10">
										<div className="w-48 flex justify-around gap-3 m-3 ">
											<span>Adult</span>
											<div className='flex items-center gap-3 font-semibold text-black'>
												<button className='bg-white border-green-500 text-green-500  border-2 px-2' disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
												<span>{options.adult}</span>
												<button className='bg-white border-green-500 text-green-500  border-2 px-1' onClick={() => handleOption("adult", "i")}>+</button>
											</div>
										</div>
										<div className="w-48 flex justify-around gap-3 m-3 ">
											<span>Children</span>
											<div className='flex items-center gap-3 font-semibold text-black'>
												<button className='bg-white border-green-500 text-green-500  border-2 px-2' onClick={() => handleOption("children", "d")} disabled={options.children <= 0} >-</button>
												<span>{options.children}</span>
												<button className='bg-white border-green-500 text-green-500  border-2 px-1' onClick={() => handleOption("children", "i")}>+</button>
											</div>
										</div>
										<div className="w-48 flex justify-around gap-3 m-3 ">
											<span>Room</span>
											<div className='flex items-center gap-3 font-semibold text-black '>
												<button className='bg-white border-green-500 text-green-500  border-2 px-2' onClick={() => handleOption("room", "d")} disabled={options.room <= 1} >-</button>
												<span>{options.room}</span>
												<button className='bg-white border-green-500 text-green-500  border-2 px-1' onClick={() => handleOption("room", "i")}>+</button>
											</div>
										</div>
									</div>
								}
							</div>
							<div className='flex items-center gap-3'>
								<button className='bg-green-600 text-white px-4 py-1 rounded' onClick={handleSearch}>Search</button>
							</div>
						</div>
					</>
				}

			</div>

		</div>
	)
}
