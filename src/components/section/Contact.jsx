import React, { useState } from 'react';;
import RevealOnScroll from '../RevealOnScroll';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const SERVICE_ID = "service_nd40sap";
    const TEMPLATE_ID = "template_fbbxji2";
    const PUBLIC_KEY = "MCMcISZjPVUG51pqj";

    const handleSubmit = (e) => {
        e.preventDefault();

        // sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({ name: "", email: "", number: "", message: "" })
        }).catch(() => {
            alert("Oops! Something went wrong, Please try again.");
        })
    }

    return (
        <>
            <section id='contact' className='min-h-screen flex items-center justify-center py-20'>

                <RevealOnScroll>

                    <div className='px-4 md:w-150 w-full'>
                        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Get In Touch</h2>
                        <form className='space-y-6' onSubmit={handleSubmit}>

                            <div className="relative">
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus: bg-blue-500/5' placeholder='Name...' />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus: bg-blue-500/5' placeholder='example@gmail.com' />
                            </div>
                            <div className="relative">
                                <input
                                    type="number"
                                    id='number'
                                    name='number'
                                    required
                                    value={formData.number}
                                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                    className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus: bg-blue-500/5' placeholder='Phone Number...' />
                            </div>
                            <div className="relative">
                                <textarea
                                    id='message'
                                    name='message'
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus: bg-blue-500/5' placeholder='Message Here...' />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium cursor-pointer transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>
                                Send Message
                            </button>

                        </form>
                    </div>

                </RevealOnScroll>

            </section>
        </>
    )
}

export default Contact