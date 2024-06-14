import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from '@radix-ui/react-accordion';

const FrequentlyQuestions = () => {
    useEffect(() => {
        Aos.init();
    })
    return (
        <div>


            <div className=" max-w-4xl p-4 md:p-6 mt-0 mx-auto pt-12 md:pt-24 lg:pt-32 ">
                <div className='relative overflow-x-auto shadow-xl rounded-lg bg-fuchsia-50'>
                    <h3 className="my-8 text-center text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-cyan-600">
                        CRONOGRAMA DE ACTIVIDADES
                    </h3>
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-fuchsia-900 text-base">
                                    Detalle
                                </th>
                                <th scope="col" class="px-6 py-3 text-fuchsia-900 text-base">
                                    Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Apertura de inscripción y reglamento

                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    Desde el 15 de Junio de 2024.
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Caso hipotético disponible
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    El 15 de Junio de 2024.
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Plazo para presentar aclaraciones sobre el caso hipotético
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    Entre el 15 de junio hasta el 15 de julio de 2024.
                                </td>
                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Respuestas a las aclaraciones sobre el caso hipotético
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    El 25 de julio de 2024.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Fin de plazo para la inscripción de los Equipos
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    Hasta el 31 de octubre de 2024
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Fecha límite para la recepción del Memorial (Sin penalidad)
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    Hasta el 31 de octubre de 2024.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Último día para enviar el Memorial (con penalidades del envío tardío)
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    Hasta el 1 de noviembre de 2024.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Fecha límite para la inscripción de Jueces y Publicación de resultados de los Memoriales.
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    Hasta el 10 de noviembre de 2024.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Ceremonia de apertura formal
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    El 12 de noviembre de 2024.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Rondas preliminares
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    Entre el 12 y el 13 de noviembre de 2024.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Rondas Semifinales
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    El 14 de noviembre de 2024.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Ronda Final
                                </th>
                                <td class="px-6 py-4 text-cyan-600">
                                    El 15 de noviembre de 2024.
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>


            <section className="w-full py-12 md:py-24 lg:py-32 bayard flex container m-auto items-center">

                <div className="px-4 md:px-6 m-auto">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-600">
                                Frequently Questions
                            </h2>
                            <p className="mt-4 text-fuchsia-800 font-medium">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ipsa sed sint dolorum quasi voluptatem alias accusantium? Et error distinctio quae corrupti, nostrum nesciunt vero officia consequuntur possimus iure excepturi.
                            </p>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="first" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Pregunta frecuente?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta quasi totam magnam ut reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, similique blanditiis amet laudantium iure debitis reiciendis perferendis dolores ratione repellendus, fugit pariatur nemo expedita repellat cupiditate laborum quia harum enim? vitae in perspiciatis, quam optio? Repellendus eum dolor consequatur enim incidunt explicabo, autem velit quis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="second" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Pregunta frecuente?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta quasi totam magnam ut reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, similique blanditiis amet laudantium iure debitis reiciendis perferendis dolores ratione repellendus, fugit pariatur nemo expedita repellat cupiditate laborum quia harum enim? vitae in perspiciatis, quam optio? Repellendus eum dolor consequatur enim incidunt explicabo, autem velit quis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="third" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Pregunta frecuente?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta quasi totam magnam ut reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, similique blanditiis amet laudantium iure debitis reiciendis perferendis dolores ratione repellendus, fugit pariatur nemo expedita repellat cupiditate laborum quia harum enim? vitae in perspiciatis, quam optio? Repellendus eum dolor consequatur enim incidunt explicabo, autem velit quis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="fourth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Pregunta frecuente?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta quasi totam magnam ut reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, similique blanditiis amet laudantium iure debitis reiciendis perferendis dolores ratione repellendus, fugit pariatur nemo expedita repellat cupiditate laborum quia harum enim? vitae in perspiciatis, quam optio? Repellendus eum dolor consequatur enim incidunt explicabo, autem velit quis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="fifth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Pregunta frecuente?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta quasi totam magnam ut reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, similique blanditiis amet laudantium iure debitis reiciendis perferendis dolores ratione repellendus, fugit pariatur nemo expedita repellat cupiditate laborum quia harum enim? vitae in perspiciatis, quam optio? Repellendus eum dolor consequatur enim incidunt explicabo, autem velit quis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="seventh" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Pregunta frecuente?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta quasi totam magnam ut reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, similique blanditiis amet laudantium iure debitis reiciendis perferendis dolores ratione repellendus, fugit pariatur nemo expedita repellat cupiditate laborum quia harum enim? vitae in perspiciatis, quam optio? Repellendus eum dolor consequatur enim incidunt explicabo, autem velit quis!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="eighth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Pregunta frecuente?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dicta quasi totam magnam ut reprehenderit Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, similique blanditiis amet laudantium iure debitis reiciendis perferendis dolores ratione repellendus, fugit pariatur nemo expedita repellat cupiditate laborum quia harum enim? vitae in perspiciatis, quam optio? Repellendus eum dolor consequatur enim incidunt explicabo, autem velit quis!
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

        </div>




    );
}
function ArrowIcon(props) {
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
            className="feather feather-chevron-down"
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}
export default FrequentlyQuestions;
