import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <section className='container max-w-[1100px] mx-auto px-6 sm:px-15 xl:px-0 xs:overflow-hidden lg:overflow-visible  xs:relative '>
      <Header />
      <main className='flex flex-col gap-8 '>
        <Hero />
      </main>
    </section>
  )
}
