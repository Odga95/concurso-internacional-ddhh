import React, { useState, useEffect } from 'react'
import { imgConcurso1 } from '../../data/galleryData'
import { memorialsConcurso1, getDocumentUrl } from '../../data/documentsData'

const PastEvents = () => {
    const [driveImages, setDriveImages] = useState([]);
    const [driveMemorials, setDriveMemorials] = useState([]);
    const [loadError, setLoadError] = useState({});

    useEffect(() => {
        const fetchDriveFiles = async () => {
            const imagesFolderId = import.meta.env.VITE_FOLDER_ID;
            const memorialsFolderId = import.meta.env.VITE_FOLDER_MEMORIALS_ID;
            const apiKey = import.meta.env.VITE_G_DRIVE_API_KEY;

            try {
                // Fetch images
                const imagesResponse = await fetch(
                    `https://www.googleapis.com/drive/v3/files?q='${imagesFolderId}' in parents and mimeType contains 'image/'&key=${apiKey}&fields=files(id,name,webContentLink)`
                );
                const imagesData = await imagesResponse.json();

                // Fetch all PDF files from memorials folder
                const memorialsResponse = await fetch(
                    `https://www.googleapis.com/drive/v3/files?q='${memorialsFolderId}' in parents and mimeType='application/pdf'&key=${apiKey}&fields=files(id,name,webViewLink,webContentLink)`
                );
                const memorialsData = await memorialsResponse.json();

                if (imagesData.files) {
                    const images = imagesData.files.map((file) => ({
                        id: file.id,
                        name: file.name,
                        url: `https://drive.google.com/thumbnail?id=${file.id}&sz=w800`,
                    }));
                    setDriveImages(images);
                }

                if (memorialsData.files) {
                    const memorials = memorialsData.files.map((file) => ({
                        id: `memorial-${file.id}`,
                        title: file.name,
                        // Use webContentLink for direct download
                        url: file.webContentLink || `https://drive.google.com/uc?export=download&id=${file.id}`,
                    }));
                    setDriveMemorials(memorials);
                }
            } catch (error) {
                console.error('Error al obtener archivos de Google Drive:', error);
            }
        };

        fetchDriveFiles();
    }, []);

    const handleImageError = (id) => {
        setLoadError(prev => ({
            ...prev,
            [id]: true
        }));
    };

    return (
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
            {/* Concurso II section */}
            <h2 className="mb-12 font-bold text-2xl text-fuchsia-700">
                II CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO
            </h2>

            {/* Memorials II */}
            <div className='block bg-fuchsia-100 p-2 rounded mb-10 max-w-3xl text-center m-auto'>
                <h3 className='font-bold center text-gray-700 my-2'>MEMORIALES CONCURSO II</h3>
                <ul className='grid grid-cols-1 divide-y'>
                    {driveMemorials.map(({ id, title, url }) => (
                        <li key={id} className='flex justify-between px-2 py-3'>
                            <label className='font-medium text-gray-700'>{title}</label>
                            <a
                                href={url}
                                className='text-cyan-600 text-xs font-medium'
                                download={title}
                                rel="noopener noreferrer"
                            >
                                Descargar
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Images II */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                {driveImages.map(({ id, name, url }) => (
                    <div key={`image-${id}`} className="relative overflow-hidden rounded-lg group">
                        {!loadError[id] && (
                            <div className="relative overflow-hidden rounded-lg group">
                                <img
                                    src={url}
                                    alt={name}
                                    width={800}
                                    height={600}
                                    className="h-80 w-full object-cover transition-all duration-300 group-hover:scale-105"
                                    onError={() => handleImageError(id)}
                                />
                                <div className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="text-lg font-semibold text-white">II CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO</h3>
                                </div>
                            </div>
                        )}
                        {loadError[id] && (
                            <div className="h-80 w-full flex items-center justify-center bg-gray-100 rounded-lg">
                                <span className="text-gray-500">Error al cargar la imagen</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Concurso I section */}
            <h2 className='mb-12 font-bold text-2xl text-fuchsia-700'>
                I CONCURSO INTERNACIONAL DE DERECHO MÉDICO, BIOÉTICA Y BIODERECHO
            </h2>

            {/* Memorials I */}
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

            {/* Images I */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {imgConcurso1.map(({ id, src, alt }) => (
                    <div key={id} className="relative overflow-hidden rounded-lg group">
                        <a className="absolute inset-0 z-10">
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