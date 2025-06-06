import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import caso2 from '../../assets/docs/CASO_HIPOTETICO_BIODERECHO_2025.pdf'
import imageBackgrodund from '../../assets/img/bg-imagen.png'

const SectionDocument = () => {

    useEffect(() => {
        Aos.init();
    })
    return (
        <section className="w-full relative">
            <div className="w-full h-full absolute top-0 left-0 z-0 bg-fuchsia-950"
                style={{
                    backgroundImage: `url(${imageBackgrodund})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}></div>

            <div className="w-full h-full absolute top-0 left-0 z-0 opacity-75" style={{
                backgroundImage: 'linear-gradient(to bottom, #663478, #3D1040)',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
            }}></div>
            <div className="w-full relative z-20 px-4 md:px-6 text-center m-auto py-12 md:py-24 lg:py-32 ">
                <div className="max-w-2xl mx-auto space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-cyan-500 sm:text-4xl md:text-5xl" data-aos="fade-down">
                        EL CASO
                    </h2>
                    <p className="text-white md:text-xl" data-aos="fade-up">
                        CASO HIPOTETICO 3 CONCURSO INTERNACIONAL EN DERECHO MEDICO 2025
                    </p>
                    <a
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        href={caso2}
                        download
                        className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-8 text-sm font-bold text-white shadow transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"

                    >
                        CASO
                    </a>
                    <br />
                    <a
                        target="_blank"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        href="https://forms.gle/Zr7ZxxcVheDmTbGj8"
                        download
                        className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-8 text-sm font-bold text-white shadow transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"

                    >
                        REGISTRO
                    </a>
                    <br />
                    <a
                        target="_blank"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        href="https://forms.gle/dduzH9saPm4QkHPh7"
                        download
                        className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-8 text-sm font-bold text-white shadow transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"

                    >
                        INSCRIPCION DE JUECES
                    </a>
                </div>
            </div>
        </section>
    )
}

export default SectionDocument;