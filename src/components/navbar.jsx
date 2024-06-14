import React from 'react'
import { Link } from 'react-router-dom';
import icon from '../assets/img/icon-label.png';
import iconMini from '../assets/img/icon.png';
import menu from '../assets/icon/menu.png';

const Navbar = () => {
    return (
        <div className=" m-auto fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className='container flex h-20 w-full items-center justify-between bg-white px-4 md:px-6  m-auto'>
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <img src={icon} className="hidden md:flex md:h-14" alt="logo" srcset="" />
                    <img src={iconMini} className="block md:hidden h-14" alt="logo" srcset="" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="hidden items-center gap-4 md:flex">
                    <Link href="#" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                        Concurso Actual
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                        Concursos Anteriores
                    </Link>
                </nav>
                <div className="ml-auto md:hidden">
                    <button variant="outline" size="icon">
                        <img src={menu} alt="menu-icon" className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;