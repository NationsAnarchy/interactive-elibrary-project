import Layout from '../components/Layout'
import Books from '../components/Books'

const Home = () => {
	return (
		<>
			<Layout>
				<div className='p-4 md:px-12 md:py-6 min-h-full'>
					<Books />
				</div>
			</Layout>
		</>
	)
}

export default Home