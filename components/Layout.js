import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen justify-between'>
			<Head>
				<title>Interactive E-Learning Library - Phúc "Scott" Nguyễn</title>
			</Head>
			<Header />
			<div>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout