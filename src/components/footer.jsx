import React from 'react'
import { Link } from 'react-router-dom';
import icon from '../assets/img/icon-white.png'


const Footer = () => {
  return (
    <footer className="text-white py-12 md:py-16 lg:py-20  
         bg-violet-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">
            <img src={icon} alt="" className='h-16 m-auto' />

          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Contacto</h3>
            <ul>
              <li>
                <a href="mailto: cri@colderechomedico.com">cri@colderechomedico.com</a>
              </li>
            </ul>
            <h3 className="text-2xl font-bold">Teléfonos</h3>
            <ul>
              <li>
                <a href="tel:+573106705426 ">+57 3106705426</a>

              </li>
              <li>
                <a href="tel:+573106705426 ">+57 3124162816</a>

              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Conecta con nosotros</h3>
            <div className="flex space-x-4">

              <Link href="https://www.facebook.com/profile.php?id=61561664507623" className="hover:text-gray-400" >
                <FacebookIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 lg:mt-16 text-center text-sm text-gray-400">
          &copy; 2025 <a href="https://www.defensoria.gov.co/condiciones-de-uso" className='hover:text-white'>Políticas de privacidad | Términos y condiciones de uso</a>
        </div>
      </div>
    </footer>
  )
}


export default Footer;





function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}