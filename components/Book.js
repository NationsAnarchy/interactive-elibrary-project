import React from 'react'

const Book = ({ book }) => {
	return (
		<div className='bg-primary text-primary-content min-w-full sm:min-w-[600px] p-3 hover:cursor-pointer'>
			<h2 className='font-bold'>{book.title} ({book.date})</h2>
			<h2>{book.author}</h2>
		</div>
	)
}

export default Book