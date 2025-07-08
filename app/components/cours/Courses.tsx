import React from 'react'
import SingleCourse from './SingleCourse'


export default function Courses() {
    const courses = [
        {
            icon: "/icon-animation.svg",
            title: "Animation",
            description: "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
        },
        {
            icon: "/icon-design.svg",
            title: "Design",
            description: "Create beautiful, usable interfaces to help shape the future of how the web looks.",
        },
        {
            icon: "/icon-photography.svg",
            title: "Photography",
            description: "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
        },
        {
            icon: "/icon-crypto.svg",
            title: "Crypto",
            description: "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
        },
        {
            icon: "/icon-business.svg",
            title: "Business",
            description: "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
        }
    ];
    return (
        <div className='grid xs:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 my-25 gap-3 '>
            <section className='bg-primary-gradient  rounded-2xl p-8 mb-18 '>
                <h2 className='mt-10 font-bold text-3xl text-white'>Check out our most popular courses!</h2>
            </section>
            {courses.map(item => <SingleCourse title={item.title} description={item.description} icon={item.icon} key={item.title} />)}
        </div>
    )
}
