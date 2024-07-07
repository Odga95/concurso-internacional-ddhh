import React, { useEffect } from 'react'
import banner from '../../assets/img/BannerHeader.png'
import Aos from 'aos';
import 'aos/dist/aos.css'


const SliderHeader = () => {

    useEffect(() => {
        Aos.init()
    })

    return (
        <div className="flex flex-col"
            // style={{
            //     backgroundImage: 'linear-gradient(to bottom, #86198F, #4e0f53)',
            //     width: '100%',
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            //     color: 'white',
            //     fontSize: '24px',
            //     fontWeight: 'bold',
            // }}
        >
            <main className="flex-1">
                <section className="relative w-full h-full overflow-hidden">
                    <div className="relative h-full flex flex-col items-center justify-center text-center text-white">
                        <img src={banner} alt="" srcset="" />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SliderHeader;