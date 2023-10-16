import React, { useState } from 'react'
import { Nav } from '../../component/navbar/Nav'
import { Header } from '../../component/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { MailList } from '../../component/MailList/MailList'
import { Footer } from '../../component/Footer/Footer'

export const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const photos = [
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
		},
		{
			src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
		},
	];
	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	}
	const handleMove = (dir) => {
		let newSlideNumber;
		if (dir === "l") {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
		setSlideNumber(newSlideNumber)

	}
	return (
		<div>
			<Nav />
			<Header type="list" />
			{open && <div className='sticky  top-0 left-0  h-screen w-full z-50   flex items-center justify-center'>
				<FontAwesomeIcon className='absolute top-5 right-5 text-3xl text-gray-400 cursor-pointer' onClick={() => setOpen(false)} icon={faCircleXmark} />
				<FontAwesomeIcon className='m-5 text-5xl text-gray-400 cursor-pointer' onClick={() => handleMove("l")} icon={faCircleArrowLeft} />
				<div className="sw">
					<img className='3/4 h-3/4' src={photos[slideNumber].src} alt="" />
				</div>
				<FontAwesomeIcon className='m-5 text-5xl text-gray-400 cursor-pointer' onClick={() => handleMove("r")} icon={faCircleArrowRight} />
			</div>}
			<div className=" w-9/12 mx-auto flex flex-col justify-center mt-5">

				<div className="w-full flex flex-col gap-3">

					<div className="text-2xl font-bold "></div>

					<div className="text-sm flex relative items-center gap-3">
						<button className='absolute top-3 right-0 bg-green-700 text-white font-bold px-2 py-1 border-0 cursor-pointer rounded-md'>Reserve or Book Now!</button>
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New york</span>
					</div>
					<span className='text-green-600 font-bold'>
						Excellent location – 500m from center
					</span>
					<span className='text-blue-600 font-bold'>
						Book a stay over $114 at this property and get a free airport taxi
					</span>
					<div className="grid grid-cols-3 gap-3">
						{photos.map((photo, i) => (
							<div className="">
								<img onClick={() => handleOpen(i)} src={photo.src} alt="" className='w-full object-cover cursor-pointer' />
							</div>
						))}
					</div>
					<div className="grid lg:grid-cols-4 md:grid-cols-3 justify-between gap-5 mt-5">
						<div className="md:col-span-2 lg:col-span-3">
							<h1 className="text-2xl font-bold">Stay in the heart of City</h1>
							<p className="text-md mt-5">
								Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
								Street Apartments has accommodations with air conditioning and
								free WiFi. The units come with hardwood floors and feature a
								fully equipped kitchenette with a microwave, a flat-screen TV,
								and a private bathroom with shower and a hairdryer. A fridge is
								also offered, as well as an electric tea pot and a coffee
								machine. Popular points of interest near the apartment include
								Cloth Hall, Main Market Square and Town Hall Tower. The nearest
								airport is John Paul II International Kraków–Balice, 16.1 km
								from Tower Street Apartments, and the property offers a paid
								airport shuttle service.
							</p>
						</div>
						<div className="flex-3 bg-green-100 p-5 flex flex-col gap-5">
							<h1 className='text-2xl md:text-lg font-bold'>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this property has an
								excellent location score of 9.8!
							</span>
							<h2 className='text-xl lg:text-2xl'>
								<b>$945</b> (9 nights)
							</h2>
							<button className='bg-green-700 text-white font-semibold px-2 py-1 border-0 cursor-pointer rounded-md'>Reserve or Book Now!</button>
						</div>
					</div>
				</div>
			</div>
			<MailList />
			<div className='mt-5 mx-auto w-9/12'>
				<Footer />
			</div>
		</div>
	)
}
