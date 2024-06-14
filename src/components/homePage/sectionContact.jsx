import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const SectionContact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_61sroce', 'template_jqzzyht', form.current, {
                publicKey: '4WhXmUTNy02Pyzk-M',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
            <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 m-auto">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fuchsia-800">Contáctanos</h2>
                    <p className="max-w-[600px] text-cyan-600 md:text-xl font-medium">
                        Siempre estoy emocionado de conectar con nuevas personas y discutir posibles colaboraciones o proyectos.
                        No dudes en comunicarte utilizando el formulario a continuación, y te responderé tan pronto como pueda.
                    </p>
                </div>
                <form className="grid gap-4" ref={form} onSubmit={sendEmail}>
                    <div className="grid gap-2">
                        <label className='font-semibold text-cyan-600' htmlFor="nombre">Nombre</label>
                        <input id="nombre" name="user_name" type="text" placeholder="Nombre completo" className='bg-gray-0 border text-cyan-600 font-medium text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-2 focus:ring-fuchsia-800 focus:border-fuchsia-800' required />
                    </div>
                    <div className="grid gap-2">
                        <label className='font-semibold text-cyan-600' htmlFor="email">Email</label>
                        <input type="email" id="email" name="user_email" placeholder="Ejemplo@ejemplo.com" className="bg-gray-0 border text-cyan-600 font-medium text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-2 focus:ring-fuchsia-800 focus:border-fuchsia-800" required />
                    </div>
                    <div className="grid gap-2">
                        <label className='font-semibold text-cyan-600' htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Tu mensaje..." rows={4} className='bg-gray-0 border text-cyan-600 font-medium text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-2 focus:ring-fuchsia-800 focus:border-fuchsia-800' required></textarea>
                    </div>
                    <button type="submit" className="justify-self-start bg-fuchsia-800 rounded-lg border text-white p-3 font-medium rounded">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default SectionContact;