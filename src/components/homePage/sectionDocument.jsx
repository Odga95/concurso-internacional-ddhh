import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import imageBackgrodund from '../../assets/img/bg-imagen.png'

const SectionDocument = () => {

    useEffect(() => {
        Aos.init();
    })
    return (
        <section className="w-full relative">
            <div className="w-full h-full absolute top-0 left-0 z-0 bg-fuchsia-900"
                style={{
                    backgroundImage: `url(${imageBackgrodund})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}></div>

            <div className="w-full h-full absolute top-0 left-0 z-0 opacity-75" style={{
                backgroundImage: 'linear-gradient(to bottom, #511057, #2c0930)',
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus consequuntur porro ab, delectus provident molestiae mollitia sed illum hic neque.
                    </p>
                    <Link
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        href="/home"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-8 text-sm font-bold text-white shadow transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"

                    >
                        Descargar Doc
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default SectionDocument;