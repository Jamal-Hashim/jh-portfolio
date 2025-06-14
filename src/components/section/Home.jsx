import React from 'react'
import Img from "../../assets/JAMAL HASHIM.jpg";
import RevealOnScroll from '../RevealOnScroll';
import CV from "../../assets/Jamal Hashim Resume.pdf";

const Home = () => {
    return (
        <>
            <section id='home' className='min-h-screen flex items-center justify-center relative'>

                <RevealOnScroll>

                    <div className='text-center z-10 px-4'>
                        <div className="flex items-center justify-center ">
                            <img src={Img} alt="" className='w-[200px] h-[200px] my-5 border-2 border-blue-500/50 shadow[0_0_0_15px_rgba(59,130,246,0.2)] text-center rounded-full' />
                        </div>
                        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right'>Hi, I'm Jamal Hashim</h1>

                        <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
                            I'm Full-stack Developer who loves crafting clean, scalable web application and website. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                        </p>

                        <div className='flex justify-center space-x-4'>
                            <a href={CV} download className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_0_15px_rgba(59,130,246,0.4)]'>Download CV</a>
                            <a href="/jh-portfolio/contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow[0_0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10'>Contact Me</a>
                        </div>

                    </div>

                </RevealOnScroll>



            </section>
        </>
    )
}

export default Home