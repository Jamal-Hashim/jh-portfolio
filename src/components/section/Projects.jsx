import React from 'react';
import RevealOnScroll from '../RevealOnScroll';

const Projects = () => {
    return (
        <>
            <section id='project' className='min-h-screen flex items-center justify-center py-20'>

                <RevealOnScroll>

                    <div className='max-w-5xl mx-auto px-4'>

                        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                            {" "}
                            Featured Projects
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

                            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>

                                <h3 className='text-xl font-bold mb-2'>Live Code Editor Website</h3>
                                <p className='text-gray-400 mb-3'>Live Code Editor Website is very flexible used for run program.</p>
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

                    </div>

                </RevealOnScroll>

            </section>
        </>
    )
}

export default Projects