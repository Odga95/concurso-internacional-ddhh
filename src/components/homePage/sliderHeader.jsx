import React,{ useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'


const SliderHeader = () => {

    useEffect(()=>{
        Aos.init()
    })

    return (
        <div className="flex flex-col" style={{
            backgroundImage: 'linear-gradient(to bottom, #86198F, #4e0f53)',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
        }}>
            <main className="flex-1">
                <section className="relative w-full h-[600px] overflow-hidden">
                    <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 md:px-6">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight" data-aos="zoom-in">Manage Your Water Usage</h1>
                        <p className="max-w-[600px] mt-4 text-lg md:text-xl" data-aos="zoom-in">
                            Our app provides real-time monitoring and insights to help you conserve water and save money.
                        </p>

                    </div>
                </section>
            </main>
        </div>
    )
}

export default SliderHeader;