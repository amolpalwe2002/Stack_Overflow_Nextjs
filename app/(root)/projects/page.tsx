import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li><Link href={"/projects/nextjs"}>Next.js</Link></li>
        <li><Link href={"/projects/nextui"}>NextUI</Link></li>
      </ul>
    </div>
  )
}

export default page
