import React, { useEffect } from 'react'
import Aos from 'aos';
import cronograma from '../../assets/docs/CALENDARIO_OFICIAL_3_CONCURSO_DERECHO_INTERNACIONAL_EN_DERECHO_MEDICO_BIOETICA_Y_BIODERECHO.docx'
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
                    <a href={cronograma}>
                        <h3 className="my-8 text-center text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl text-cyan-600">
                            CRONOGRAMA DE ACTIVIDADES
                        </h3>
                    </a>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-fuchsia-900 text-base">
                                    Detalle
                                </th>
                                <th scope="col" className="px-6 py-3 text-fuchsia-900 text-base">
                                    Fecha
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Apertura de inscripción y reglamento

                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    Desde el 8 de mayo de 2025.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Caso hipotético disponible
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    El 8 de mayo de 2025.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Plazo para presentar aclaraciones sobre el caso hipotético
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    Entre el 8 de mayo hasta el 8 de junio de 2025.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Respuestas a las aclaraciones sobre el caso hipotético
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    El 21 de junio de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Fin de plazo para la inscripción de los Equipos
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    Hasta el 25 de octubre de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Fecha límite para la recepción del Memorial (Sin penalidad)
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    Hasta el 28 de octubre de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Último día para enviar el Memorial (con penalidades del envío tardío)
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    Hasta el 29 de octubre de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Fecha límite para la inscripción de Jueces y Publicación de resultados de los Memoriales.
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    Hasta el 5 de noviembre de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Ceremonia de apertura formal - VIRTUAL
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    El 6 de noviembre de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Rondas preliminares - VIRTUALES
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    Entre el 6 y el 7 de noviembre de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Rondas Semifinales - PRESENCIALES
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    El 13 de noviembre de 2025.
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-fuchsia-900   dark:text-whit">
                                    Ronda Final - PRESENCIAL
                                </th>
                                <td className="px-6 py-4 text-cyan-600">
                                    El 14 de noviembre de 2025.
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>


            <section className="w-full py-12 md:py-24 lg:py-32 bayard flex container m-auto items-center">

                <div className="px-4 md:px-6 m-auto max-w-3xl w-full">
                    <div className="mx-auto max-w-3xl space-y-8">
                        <div className="text-center w-full">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-cyan-600 w-full">
                                Preguntas frecuentes
                            </h2>
                        </div>
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="first" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Qué es un juicio simulado "moot court"?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Un "moot court" es una actividad académica donde los participantes simulan un caso legal ante un tribunal ficticio. Este ejercicio se desarrolla en dos fases: una escrita y una oral. En la fase escrita, los participantes preparan y presentan sus argumentos en forma de memoriales legales. En la fase oral, defienden esos argumentos frente a un tribunal simulado durante una audiencia ficticia.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="second" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Qué es el Concurso?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    III CONCURSO INTERNACIONAL EN DERECHO MÉDICO, BIOÉTICA Y BIODERECHO, es una competencia destinada a universidades nacionales e internacionales, el cual, su fin primordial es difundir, ampliar y profundizar el conocimiento del Derecho Médico, la Bioética y el Bioderecho, al entender las nuevas problemáticas y discusiones que se dan en torno a la protección de la salud como obligación de los Estados y de los particulares sobre los ciudadanos, así como, los dilemas que emergen de estas situaciones, en donde, se requiere abordar la realidad a la luz del campo médico, sus avances y desafíos actuales, que permitan un mayor grado de satisfacción y protección a los ciudadanos y en ese sentido comprender estas disciplinas del derecho de forma  integral.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="third" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Quién puede participar?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Facultades de derecho, jurisprudencia o ciencias sociales de todo el país o del extranjero conforme lo señalan los estatutos. Los equipos representarán a la universidad, sede o seccional a la que pertenecen, por lo cual solamente será posible la inscripción de un (1) equipo por universidad o sede de dicha universidad o por estudiantes de diversas universidades. Están permitidos los equipos interdisciplinarios. Para representar a su facultad, la universidad deberá dar fe de que los y las participantes no hayan finalizado sus estudios, pasantías, exámenes o que hayan realizado cualquier otro requisito necesario para el ejercicio del derecho o su profesión. No existe un número mínimo de semestres cursados para participar. Sin embargo, no estarán habilitados para participar, aquellos estudiantes que hayan concursado como oradores en anteriores versiones del Concurso.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="fourth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Cómo se conforman/quiénes integran los equipos?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Los equipos están compuestos por dos (2) alumnos/as principales, un (1) tutor o tutora y hasta dos (2) alumnos/as suplentes. La inscripción se limita a un solo equipo por sede. Solamente los y las estudiantes principales pueden intervenir en la fase oral del concurso, a menos que la universidad comunique oportunamente el cambio en la nómina del equipo.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="fifth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Cuándo abren las inscripciones?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    ¡Las inscripciones ya se encuentran abiertas!
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="seventh" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Cómo se hace la inscripción?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Las universidades se inscribirán virtualmente en el formulario diseñado para el efecto en el portal web: <a href="https://concursoderechomedico.com" className='text-fuchsia-800'>https://concursoderechomedico.com</a> incluyendo el nombre del tutor o tutora, adjuntando la certificación sobre su vinculación a la institución, y los nombres de los/as estudiantes con certificación adjunta en la que conste que los/as seleccionados/as pertenecen a la carrera correspondiente, que no han terminado estudios.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="eighth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Cuál es el costo de inscripción?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    La inscripción al Concurso tiene un valor de 250 USD hasta el 30 de septiembre y de 300 USD hasta el 25 de octubre de 2024.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="ninth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Cuál es la fecha límite para inscribir a mi equipo en el concurso?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    La fecha límite para inscribir a tu equipo en el III CONCURSO INTERNACIONAL EN DERECHO MÉDICO, BIOÉTICA Y BIODERECHO es el 25 de octubre de 2024.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="tenth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>Si ya realicé la inscripción de mi equipo, ¿Qué rol podré ocupar dentro del Concurso?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Una vez que hayas completado la inscripción de tu equipo, tendrás la oportunidad de asumir uno de los dos roles dentro del III CONCURSO INTERNACIONAL EN DERECHO MÉDICO, BIOÉTICA Y BIODERECHO. Estos roles pueden serán el de representante de las víctimas o representante del Estado en las. El rol específico que ocupará tu equipo será asignado de acuerdo con las disposiciones establecidas en el reglamento del concurso, el cual será comunicado oportunamente.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="eleventh" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Con cuántas fases cuenta el Concurso?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    El Concurso se desarrolla en dos (2) fases, a saber:
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            1.	Escrita: En esta fase, los equipos de las universidades inscritas, previo sorteo del rol respectivo, elaboran un memorial que consigne sus argumentos, pretensiones y excepciones
                                        </li>
                                        <li>
                                            2.	Oral: Una vez entregado el memorial, los equipos expondrán sus argumentos de manera oral ante un panel de jueces que simulará una audiencia ante el Tribunal Internacional del Derecho a la Salud.
                                        </li>
                                    </ul>

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="sixth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Cómo se desarrolla la fase escrita del Concurso?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Durante la fase escrita del III CONCURSO INTERNACIONAL EN DERECHO MÉDICO, BIOÉTICA Y BIODERECHO, los equipos participantes deben preparar y presentar un memorial que contiene sus argumentos legales y análisis sobre el caso hipotético proporcionado. Este memorial será evaluado por la experta que elaboró el caso y el gerente del concurso. Los equipos deben seguir las pautas y los plazos establecidos para la presentación de acuerdo con el reglamento del Concurso.

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="twelfth" data-aos="flip-right">
                                <AccordionTrigger className="text-white flex w-full items-center justify-between rounded-md bg-fuchsia-800 px-6 py-4 text-left text-lg font-medium transition-colors hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-300">
                                    <span>¿Dónde se desarrolla la fase oral del Concurso?</span>
                                    <ArrowIcon className="ml-2 h-5 w-5" />
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pt-4 pb-6 text-cyan-600 font-medium">
                                    Las rondas orales se llevarán a cabo así:
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            1.	Entre el 6 y el 7 de noviembre de 2025, se realizarán las rondas preliminares y será 100% virtuales
                                        </li>
                                        <li>
                                            2.	Del 13 al 14 de noviembre se realizaran las rondas semifinales y la final, las cuales serán 100% presenciales en el hotel HILTON GARDEN IN - BARRANNQUILLA.
                                        </li>
                                    </ul>

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
