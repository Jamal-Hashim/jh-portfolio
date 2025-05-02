import React from 'react'
import Img from "../../assets/JAMAL HASHIM.jpg";
import RevealOnScroll from '../RevealOnScroll';
import CV from "../../assets/Jamal Hashim Resume.pdf";

const Home = () => {
    return (
        <>
            <section>

                <RevealOnScroll>
                    <div className='min-h-screen flex items-center justify-center relative'>

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

                    </div>

                </RevealOnScroll>

                {/* About */}

                <div className="py-20">

                    <RevealOnScroll>

                        <h1 className='text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right text-center'>About Me</h1>

                        <p className='text-gray-400 text-lg text-center mb-8 max-w-lg mx-auto'>
                            I'm Jamal hashim. And I'm a passionate and detail-oriented Software Engineer with a strong foundation in building scalable, efficient, and user-focused Website and Web Applications. With experience in both frontend and backend development, I enjoy turning complex problems into clean, maintainable code and intuitive digital experiences.
                        </p>

                    </RevealOnScroll>

                </div>


                {/* Projects */}

                <div className='min-h-screen flex items-center justify-center py-20'>

                    <RevealOnScroll>

                        <div className='max-w-5xl mx-auto px-4'>

                            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                                {" "}
                                Projects
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>

                                    <h3 className='text-xl font-bold mb-2'>Weather Website</h3>
                                    <p className='text-gray-400 mb-3'>Weather Website is very flexible for find temperature.</p>
                                    <div>
                                        {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                            <span
                                                key={key}
                                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all '>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project →</a>
                                    </div>

                                </div>

                                <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>

                                    <h3 className='text-xl font-bold mb-2'>Image Search Website</h3>
                                    <p className='text-gray-400 mb-3'>Image Search Website is very flexible for find atractive images.</p>
                                    <div>
                                        {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                            <span
                                                key={key}
                                                className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all '>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project →</a>
                                    </div>

                                </div>

                            </div>

                            <div className='flex justify-center space-x-4 my-10'>
                                <a href="/jh-portfolio/project" className='bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_0_15px_rgba(59,130,246,0.4)]'>View All Projects</a>
                            </div>

                        </div>

                    </RevealOnScroll>

                </div>


            </section>
        </>
    )
}

export default Home