import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import pdfIcon from '../../assets/icon/pdf.png'
import docIcon from '../../assets/icon/docx.png'

import reglamento from '../../assets/docs/REGLAMENTO_OFICIAL_III_CONCURSO_INTERNACIONAL_EN_DERECHO_MEDICO.pdf'
import estatuto from '../../assets/docs/ESTATUTO_DE_BARCELONA_3DA_EDICION_CONCURSO_DERECHO_MEDICO.pdf'
import carta from '../../assets/docs/CARTA_DE_INTENCION_CONCURSO_DERECHO_MEDICO.docx'


const BannerDocument = () => {
    useEffect(() => {
        Aos.init()
    })

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid gap-8 px-4 md:px-6 m-auto">
                <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-fuchsia-800">Documentos del concurso</h2>

                </div>
                <div className="flex flex-row justify-center flex-wrap gap-10 align-top items-start">

                    <a href={reglamento} download className="flex flex-col items-center justify-center space-y-4 ">
                        <img
                            src={pdfIcon}
                            width={64}
                            height={64}
                            alt="icon document"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                        />
                        <div className="text-center max-w-40">
                            <h4 className="text-base font-semibold  text-fuchsia-800">
                                <span>
                                    REGLAMENTO OFICIAL III CONCURSO INTERNACIONAL EN DERECHO MÉDICO
                                </span>
                            </h4>
                        </div>
                    </a>


                    <a href={estatuto} download className="flex flex-col items-center justify-center space-y-4 ">
                        <img
                            src={pdfIcon}
                            width={64}
                            height={64}
                            alt="icon document"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                        />
                        <div className="text-center max-w-40">
                            <h4 className="text-base font-semibold  text-fuchsia-800">
                                <span>
                                    ESTATUTO DE BARCELONA 3RA EDICION COCNURSO DERECHO MEDICO
                                </span>
                            </h4>
                        </div>
                    </a>

                    <a href={carta} download className="flex flex-col items-center justify-center space-y-4 ">
                        <img
                            src={docIcon}
                            width={64}
                            height={64}
                            alt="icon document"
                            data-aos="flip-left"
                            data-aos-duration="1000"
                        />
                        <div className="text-center max-w-40">
                            <h4 className="text-base font-semibold  text-fuchsia-800">
                                <span>
                                    CARTA DE INTENCION CONCURSO DERECHO MEDICO
                                </span>
                            </h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default BannerDocument;