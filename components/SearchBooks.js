import React, { useState } from 'react'

const SearchBooks = ({ onSubmit }) => {

	const [query, setQuery] = useState('')

	console.log(query)

	const handleFormSubmit = (e) => {
		e.preventDefault()
		onSubmit(query)
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<div className='form-control mb-6'>
				<div className='input-group'>
					<input
						type='text'
						placeholder='Search for a book'
						className='input input-bordered'
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button className='btn btn-square'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
							/>
						</svg>
					</button>
				</div>
			</div>
		</form>
	)
}

export default SearchBooks
