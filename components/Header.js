import React from 'react'
import ThemeSelect from './ThemeSelect'

const Header = () => {
	return (
		<div className='navbar bg-primary flex gap-8 justify-center items-center'>
			<span className='font-bold text-md md:text-2xl text-center text-primary-content'>
				Interactive E-Library Project
			</span>
			<ThemeSelect />
		</div>
	)
}

export default Header
