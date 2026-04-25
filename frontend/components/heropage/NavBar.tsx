'use client'

import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (

    <section className="sticky top-10 left-0 right-0 max-w-7xl py-2 mx-auto rounded-3xl mt-6 bg-blue-950/80 backdrop-blur-md z-50">

      <nav className="flex h-16 items-center justify-between px-8">
        
        <div className="font-bold text-3xl tracking-tighter text-transparent bg-gradient-to-b from-violet-950 to-purple-400 bg-clip-text">
          <Link href="/">KYUJIN</Link>
        </div>

        <ul className='flex items-center gap-8 text-sm font-medium'>
          <li className="hover:text-black text-white transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className='hover:text-black text-white transition-colors'>
            <Link href="/">About Us</Link>
          </li>
          <li className="bg-black/75 text-white px-4 py-2 rounded-md hover:bg-green-600/60 transition-all">
            <Link href="/signup">SignUp</Link>
          </li>
        </ul>

      </nav>
    </section>
  )
}

export default NavBar