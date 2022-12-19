import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { themeChange } from 'theme-change'
import { useEffect } from 'react'
import Layout from '../components/Layout'


const MyApp = ({ Component, pageProps }) => {

	useEffect(() => {
		themeChange(false)
	}, [])

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
