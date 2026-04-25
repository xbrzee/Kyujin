'use client';

import Link from 'next/link';
import React from 'react';

function NavBar() {
  return (
    <section className="sticky top-4 sm:top-6 lg:top-10 left-0 right-0 w-[95%] xl:max-w-7xl 2xl:max-w-[90rem] 3xl:max-w-[120rem] py-1 sm:py-2 mx-auto rounded-2xl sm:rounded-3xl bg-blue-950/80 backdrop-blur-md z-50 transition-all">
      <nav className="flex h-14 sm:h-16 lg:h-20 2xl:h-24 items-center justify-between px-4 sm:px-8 lg:px-12">
        
        <div className="font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl tracking-tighter text-transparent bg-gradient-to-b from-violet-400 to-purple-200 bg-clip-text">
          <Link href="/">KYUJIN</Link>
        </div>

        <ul className="flex items-center gap-4 sm:gap-8 lg:gap-12 text-xs sm:text-sm lg:text-lg 2xl:text-2xl font-medium">
          <li className="hidden xs:block hover:text-purple-300 text-white transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hidden sm:block hover:text-purple-300 text-white transition-colors">
            <Link href="/">About</Link>
          </li>
          <li className="bg-white/10 sm:bg-black/75 text-white px-3 py-1.5 sm:px-5 sm:py-2.5 2xl:px-8 2xl:py-4 rounded-lg sm:rounded-xl hover:bg-green-600/60 transition-all border border-white/10">
            <Link href="/signup">SignUp</Link>
          </li>
        </ul>

      </nav>
    </section>
  );
}

export default NavBar;