import Image from 'next/image'
import React from 'react'
import Button from '../Button'
interface ISingleCourse {
    icon?: string,
    title?: string,
    description?: string
}
export default function SingleCourse({ icon, title, description }: ISingleCourse) {
    return (
        <section className='bg-white relative rounded-2xl p-8 mb-18'>
            <Image src={icon} alt='' className='absolute -top-8' height={56} width={56} />
            <h2 className='relative mt-10 font-bold text-xl'>{title}</h2>
            <p className='my-10 text-gray-500'>{description}</p>
            <Button variant='simple' />
        </section>
    )
}
