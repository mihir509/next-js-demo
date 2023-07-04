import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Django chat app</title>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp