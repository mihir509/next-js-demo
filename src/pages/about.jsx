import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Layout from './layout'


export default function about() {
	const router = useRouter()

	return (
		<Layout>
			<div className='mt-5'>
				<h1>about us {router.query.name}</h1>
				<Link href='/'>Back to home</Link>
			</div>
		</Layout>
	)
}
