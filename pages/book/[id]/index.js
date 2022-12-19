import React from 'react'
import books from '../../../data/books.json'
import Link from 'next/link'

export const getStaticProps = async ({ params }) => {
	const bookItem = books.filter((b) => b.id.toString() === params.id)
	return {
		props: {
			book: bookItem[0],
		},
	}
}

export const getStaticPaths = async () => {
	const paths = books.map((book) => ({
		params: {
			id: book.id.toString(),
		},
	}))
	return {
		paths,
		fallback: false,
	}
}

const BookDetails = ({ book }) => {
	return (
			<div className='flex flex-col gap-4 justify-center items-center text-center px-2 pb-4 pt-2 '>
				<h1 className='font-bold text-2xl'>{book.title}</h1>
				<img
					src={book.img}
					alt='book image'
					className='max-h-[300px]'
				/>
				<div className='flex flex-col gap-2 max-w-[500px]'>
					<h2 className='font-bold'>Year: {book.date}</h2>
					<h2 className='font-bold'>Author: {book.author}</h2>
					<h2 className='font-bold'>Genre: {book.genre}</h2>
					<h2 className='font-bold'>Origin: {book.places}</h2>
					<h2 className='font-bold'>Rating: {book.rating}/5</h2>
					<p className='text-justify'>Overview: {book.overview}</p>
					<a
						href={book.url}
						rel='noreferrer noopener'
						target='_blank'
						className='text-right hover:underline hover:font-bold'
					>
						<span>Learn more ...</span>
					</a>
				</div>
				<Link href={'/'}>
					<button className='btn'>Back to all books</button>
				</Link>
			</div>
	)
}

export default BookDetails
