import React from 'react'
import image1 from '../../assets/img/concursoAnterior/IMG-20240706-WA0003.jpg'
import image2 from '../../assets/img/concursoAnterior/IMG-20240706-WA0004.jpg'
import image3 from '../../assets/img/concursoAnterior/IMG-20240706-WA0005.jpg'
import image4 from '../../assets/img/concursoAnterior/IMG-20240706-WA0006.jpg'
import image5 from '../../assets/img/concursoAnterior/IMG-20240706-WA0007.jpg'
import image6 from '../../assets/img/concursoAnterior/IMG-20240706-WA0008.jpg'
import image7 from '../../assets/img/concursoAnterior/IMG-20240706-WA0009.jpg'
import image8 from '../../assets/img/concursoAnterior/IMG-20240706-WA0010.jpg'
import image9 from '../../assets/img/concursoAnterior/IMG-20240706-WA0011.jpg'
import image10 from '../../assets/img/concursoAnterior/IMG-20240706-WA0012.jpg'
import image11 from '../../assets/img/concursoAnterior/IMG-20240706-WA0013.jpg'
import image12 from '../../assets/img/concursoAnterior/IMG-20240706-WA0014.jpg'
import image13 from '../../assets/img/concursoAnterior/IMG-20240706-WA0015.jpg'
import image14 from '../../assets/img/concursoAnterior/IMG-20240706-WA0016.jpg'
import image15 from '../../assets/img/concursoAnterior/IMG-20240706-WA0017.jpg'
import image16 from '../../assets/img/concursoAnterior/IMG-20240706-WA0018.jpg'

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
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image1}
                            alt="Gallery Image 1"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>

                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image2}
                            alt="Gallery Image 2"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                            
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image3}
                            alt="Gallery Image 3"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image4}
                            alt="Gallery Image 4"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>

                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image5}
                            alt="Gallery Image 5"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image6}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image7}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image8}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO </h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image9}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image10}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>

                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image11}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image12}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image13}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image14}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image15}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg group">
                    <a className="absolute inset-0 z-10" prefetch={false}>
                        <span className="sr-only">View</span>
                    </a>
                    <div className="relative overflow-hidden rounded-lg group">
                        <img
                            src={image16}
                            alt="Gallery Image 6"
                            width={800}
                            height={600}
                            className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 className="text-lg font-semibold text-white">I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                        </div>
                    </div>
                </div>
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