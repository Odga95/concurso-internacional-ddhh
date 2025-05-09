import React from 'react'
import { galleryImages } from '../../data/galleryData'

// Importar todas las imágenes de una vez
const images = import.meta.glob('../../assets/img/concursoAnterior/*.jpg')

import doc1 from '../../assets/docs/concursoAnterior/MEMORIAL  EQUIPO N_12.pdf'
import doc2 from '../../assets/docs/concursoAnterior/MEMORIAL EQUIPO N_10.pdf'
import doc3 from '../../assets/docs/concursoAnterior/MEMORIAL EQUIPO N_14.pdf'
import doc4 from '../../assets/docs/concursoAnterior/MEMORIAL EQUIPO N_30.pdf'
import doc5 from '../../assets/docs/concursoAnterior/MEMORIAL EQUIPO N_32.pdf'
import doc6 from '../../assets/docs/concursoAnterior/MEMORIAL EQUIPO N_34.pdf'


const PastEvents = () => {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">

            <h2 className='mb-12 font-bold text-2xl text-fuchsia-700'>I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h2>

            <div className='block bg-fuchsia-100 p-2 rounded mb-10 max-w-3xl text-center m-auto'>
                <h3 className=' font-bold center text-gray-700 my-2'>MEMORIALES CONCURSO I</h3>
                <ul className='grid grid-cols-1 divide-y'>
                    <li className='flex justify-between px-2 py-3'>
                        <label className='font-medium text-gray-700'>Memorial Equipo 10</label>
                        <a href={doc2} className='text-cyan-600 text-xs font-medium'>Descargar</a>
                    </li>
                    <li className='flex justify-between px-2 py-3'>
                        <label className='font-medium text-gray-700'>Memorial Equipo 12</label>
                        <a href={doc1} className='text-cyan-600 text-xs font-medium'>Descargar</a>
                    </li>
                    <li className='flex justify-between px-2 py-3'>
                        <label className='font-medium text-gray-700'>Memorial Equipo 14</label>
                        <a href={doc3} className='text-cyan-600 text-xs font-medium'>Descargar</a>
                    </li>
                    <li className='flex justify-between px-2 py-3'>
                        <label className='font-medium text-gray-700'>Memorial Equipo 30</label>
                        <a href={doc4} className='text-cyan-600 text-xs font-medium'>Descargar</a>
                    </li>
                    <li className='flex justify-between px-2 py-3'>
                        <label className='font-medium text-gray-700'>Memorial Equipo 32</label>
                        <a href={doc5} className='text-cyan-600 text-xs font-medium'>Descargar</a>
                    </li>
                    <li className='flex justify-between px-2 py-3'>
                        <label className='font-medium text-gray-700'>Memorial Equipo 34</label>
                        <a href={doc6} className='text-cyan-600 text-xs font-medium'>Descargar</a>
                    </li>
                </ul>
            </div>
            <ul>

            </ul>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryImages.map(({ id, src, alt }) => (
                    <div key={id} className="relative overflow-hidden rounded-lg group">
                        <a className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View</span>
                        </a>
                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                src={src}
                                alt={alt}
                                width={800}
                                height={600}
                                className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                                onError={(e) => {
                                    console.error(`Error loading image: ${src}`);
                                    e.target.onerror = null;
                                    e.target.src = '/src/assets/img/fallback.jpg'; // opcional: imagen de respaldo
                                }}
                            />
                            <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-lg font-semibold text-white">
                                    I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mr-4">
                    <ChevronLeftIcon className="h-5 w-5" />
                    Previous
                </Button>
                <Button variant="outline" className="ml-4">
                    Next
                    <ChevronRightIcon className="h-5 w-5" />
                </Button>
            </div> */}
        </div>
    )
}

export default PastEvents;