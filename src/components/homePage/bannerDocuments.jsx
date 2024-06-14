import React,{ useEffect }  from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const BannerDocument = () => {
    useEffect(()=>{
        Aos.init()
    })

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:px-6 m-auto">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fuchsia-800">Nuestro equipo de expertos</h2>
                    <p className="mx-auto max-w-[700px] text-cyan-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Conozca a nuestros asesores de bienes raíces, cada uno con una amplia experiencia en el mercado local.
                    </p>
                </div>
                <div className="flex flex-row justify-center flex-wrap gap-10 align-top items-start">
  
                    <Link  href="/home" className="flex flex-col items-center justify-center space-y-4 ">
                        <img
                            src="/src/assets/icon/pdf.png"
                            width={64}
                            height={64}
                            alt="icon document"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                        />
                        <div className="text-center max-w-40">
                            <h4 className="text-base font-semibold  text-fuchsia-800">
                                <span>
                                    Formulario de inscripción
                                </span>
                                <span>
                                    Formulario de inscripción
                                </span>
                            </h4>
                        </div>
                    </Link>

                    <Link  href="/home" className="flex flex-col items-center justify-center space-y-4 ">
                        <img
                            src="/src/assets/icon/pdf.png"
                            width={64}
                            height={64}
                            alt="icon document"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            
                        />
                        <div className="text-center max-w-40">
                            <h4 className="text-base font-semibold  text-fuchsia-900">
                            <span>
                                    Formulario de inscripción
                                </span>
                            </h4>
                        </div>
                    </Link>
                    <Link  href="/home" className="flex flex-col items-center justify-center space-y-4 ">
                        <img
                            src="/src/assets/icon/pdf.png"
                            width={64}
                            height={64}
                            alt="icon document"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            
                        />
                        <div className="text-center max-w-40">
                            <h4 className="text-base font-semibold  text-fuchsia-900">
                                <span>
                                    Formulario de inscripción
                                </span>
                            </h4>
                        </div>
                    </Link>
                    <Link  href="/home" className="flex flex-col items-center justify-center space-y-4 ">
                        <img
                            src="/src/assets/icon/pdf.png"
                            width={64}
                            height={64}
                            alt="icon document"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                            
                        />
                        <div className="text-center max-w-40">
                            <h4 className="text-base font-semibold  text-fuchsia-900">
                                <span>
                                    Formulario de inscripción
                                </span>
                            </h4>
                        </div>
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}

export default BannerDocument;