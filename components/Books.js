import React from 'react'
import Book from './Book'
import books from '../data/books.json'
import SearchBooks from './SearchBooks'
import Link from 'next/link'

const Books = () => {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='font-bold text-xl md:text-3xl pb-4 text-center'>Book List</h1>
			<SearchBooks />
			<div className='flex flex-col justify-center gap-3'>
				{books.map((book) => (
						<Link href={'/book/' + book.id} key={book.id}>
							<Book book={book} />
						</Link>
					)
				)}
			</div>
		</div>
	)
}

export default Books