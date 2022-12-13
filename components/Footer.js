import React from 'react'

const Footer = () => {
	return (
		<div className='flex flex-col navbar bg-primary text-primary-content gap-2 md:gap-0 px-2 md:px-12 md:flex-row justify-center md:justify-between bg-blue-500 h-20 items-center'>
			<p className='text-sm md:text-md text-center font-bold'>Copyright 2022 - Phúc "Scott" Nguyễn</p>
			<p className='text-xs md:text-md text-center'>
				Powered by: NextJS, React, TailwindCSS, DaisyUI
			</p>
		</div>
	)
}

export default Footer