import React, { useEffect } from 'react'
import Link from 'next/link';
import Layout from './layout';
import { useRouter } from 'next/router';

export default function index() {
	const router = useRouter()

	useEffect(() => {
		console.log(router)
	}, [])

	return (
		<Layout>
			<h4>Login/Signup {router.params}</h4>
			<Link href='/'>Back to home</Link>
		</Layout>
	)
}
