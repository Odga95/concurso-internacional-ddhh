import React from 'react'
import { imgConcurso1 } from '../../data/galleryData'
import { memorialsConcurso1, getDocumentUrl } from '../../data/documentsData'

const PastEvents = () => {
    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
            <h2 className='mb-12 font-bold text-2xl text-fuchsia-700'>
                I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO
            </h2>

            <div className='block bg-fuchsia-100 p-2 rounded mb-10 max-w-3xl text-center m-auto'>
                <h3 className='font-bold center text-gray-700 my-2'>MEMORIALES CONCURSO I</h3>
                <ul className='grid grid-cols-1 divide-y'>
                    {memorialsConcurso1.map(({ id, title, file }) => (
                        <li key={id} className='flex justify-between px-2 py-3'>
                            <label className='font-medium text-gray-700'>{title}</label>
                            <a
                                href={getDocumentUrl(file)}
                                className='text-cyan-600 text-xs font-medium'
                                download
                            >
                                Descargar
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {imgConcurso1.map(({ id, src, alt }) => (
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
                                    e.target.src = '/src/assets/img/fallback.jpg';
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
        </div>
    )
}

export default PastEvents;