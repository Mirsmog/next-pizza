'use client'
import Image from 'next/image'
import React from 'react'

export default function Home() {
	const [count, setCount] = React.useState(0)

	return (
		<div>
			<button onClick={() => setCount(count - 1)}>Click me</button>
			<Image
				src=''
				alt=''
			/>
			{count}
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}
