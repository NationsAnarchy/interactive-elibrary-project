import React, { useState } from 'react'
import Book from './Book'
import books from '../data/books.json'
import SearchBooks from './SearchBooks'
import Link from 'next/link'

const Books = () => {

	const [bookList, setBookList] = useState(books)

	const handleSubmit = (query) => {
		const filteredBookList = books.filter((book) => book.title.toLowerCase().includes(query) ||
			book.genre.toLowerCase().includes(query) || book.author.toLowerCase().includes(query) ||
			book.places.toLowerCase().includes(query) || book.date.toString().includes(query))
		setBookList(filteredBookList)
	}

	return (
		<div className='flex flex-col items-center'>
			<h1 className='font-bold text-lg md:text-3xl pb-4 text-center'>
				Book List
			</h1>
			<SearchBooks onSubmit={handleSubmit} />
			<div className='flex flex-col justify-center gap-3'>
				{bookList.length === 0 && <span className='font-bold uppercase'>Houston, we have a problem!</span>}
				{bookList.map((book) => (
					<Link href={'/book/' + book.id} key={book.id}>
						<Book book={book} />
					</Link>
				))}
			</div>
		</div>
	)
}

export default Books
