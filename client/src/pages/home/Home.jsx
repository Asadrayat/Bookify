import React from 'react'
import { Header } from '../../component/header/Header'
import { Nav } from '../../component/navbar/Nav'
import { Featured } from '../../component/featured/Featured'
import { PropertyList } from '../../component/PropertyList/PropertyList'
import { FeatureProperties } from '../../component/FeaturedProperties/FeatureProperties'
import { MailList } from '../../component/MailList/MailList'
import { Footer } from '../../component/Footer/Footer'

export const Home = () => {
	return (
		<div>
			<Nav />
			<Header />
			<div className="mt-12 flex w-11/12 mx-auto flex-col items-center gap-8">
				<Featured />
				<h1 className="text-base lg:text-2xl  md:text-2xl font-bold w-full">Browse by property type</h1>
				<PropertyList />
				<h1 className="text-base lg:text-2xl  md:text-2xl font-bold w-full">Home guests love</h1>
				<FeatureProperties />
			</div>
			<MailList />
			<Footer />
		</div>
	)
}
