import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import icon from '../assets/img/icon-label.png';
import iconMini from '../assets/img/icon.png';
import menu from '../assets/icon/menu.png';
import concursoActual from '../assets/docs/CASO_HIPOTETICO_BIODERECHO_2025.pdf'
import cancelar from '../assets/icon/cancelar.png'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    return (
        // <div className=" m-auto fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className=" m-auto w-full z-50 bg-white shadow-sm">
            <div className='container flex h-auto w-full items-center justify-between bg-white px-4 md:px-6 py-1 md:py-3 m-auto'>
                <a href="/" className="flex items-center gap-2" prefetch={false}>
                    <img src={icon} className="hidden md:flex md:h-14" alt="logo" srcSet="" />
                    <img src={iconMini} className="block md:hidden h-14" alt="logo" srcSet="" />
                </a>
                <nav className="hidden items-center gap-4 md:flex">
                    <a href={concursoActual} download className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                        Concurso Actual
                    </a>
                    <a href="/concursos-anteriores" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                        Concursos Anteriores
                    </a>
                </nav>
                <div className="ml-auto md:hidden">
                    <button variant="outline" size="icon" onClick={toggleMenu}>
                        <img src={menu} alt="menu-icon" className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className='fixed w-full bg-black bg-opacity-75 h-screen top-0'>
                    <ul className='bg-white h-screen max-w-56 p-3 divide-y z-40'>
                        <li className=' p-3'>
                            <a href={concursoActual} download className="text-sm font-medium text-fuchsia-700 hover:underline hover:underline-offset-4" prefetch={false}>
                                Concurso Actual
                            </a>
                        </li>
                        <li className=' p-3'>
                            <a href="/concursos-anteriores" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                                Concursos Anteriores
                            </a>
                        </li>
                    </ul>
                    <div className='zindex z-50 fixed right-10 top-10 ' onClick={closeMenu}>
                        <img src={cancelar} alt="" width={32} height={32} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;