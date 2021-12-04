import React, {useState} from 'react';
import { Transition } from '@headlessui/react'
import { Link } from 'gatsby'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <header className="relative w-full py-8 bg-gray-200 bg-opacity-40 sticky-top">
            <div className="container flex items-center justify-between px-10 mx-auto">
                <div className="pb-2">
                    <Link to="/" className="items-center text-3xl font-bold" >Héctor Allende</Link>
                </div>



                <div>
                    {/* menu celular */}


                    <div className="lg:hidden">
                        <button type="button" onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        <Transition
                            show={isOpen}
                            enter="transition-opacity duration-75"
                            enterFrom="opacity-0 invisible"
                            enterTo="opacity-100 visible"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100 visible"
                            leaveTo="opacity-0 invisible"
                            className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm backdrop-filter "
                            onClick={() => setIsOpen(false)}
                        >

                        </Transition>

                        <Transition
                            show={isOpen}
                            enter="transition-transform transform duration-150"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition-transform transform duration-150"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                            className="absolute top-0 right-0 z-20 min-h-screen bg-white w-60 "
                        >
                            <div className="p-8">
                                <ul className="space-y-8 font-semibold text-center text-blue-800">

  
                                 
                                    <li><Link to="/" activeClassName="pagina-actual">Inicio</Link></li>
                                    <li><Link to="/proyectos" activeClassName="pagina-actual">Proyectos</Link></li>
                                    <li><Link to="/repositorios" activeClassName="pagina-actual">Código GitHub</Link></li>
                                  
                                    {/* <li>
                                        <a href="https://twitter.com/Hector48050545" target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                className="mx-auto transform hover:scale-110"
                                            >
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>

                                        </a>
                                    </li> */}
                                    <li>

                                        <a href="https://www.linkedin.com/in/hallende/" target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                className="mx-auto transform hover:scale-110"

                                            >
                                                <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>

                                    </li>

                                    <li>

                                        <a href="https://github.com/HectorAllende" target="_blank" rel="noopener noreferrer">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                className="mx-auto transform hover:scale-110"
                                            >
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                                            </svg>
                                        </a>

                                    </li>


                                </ul>
                            </div>
                        </Transition>

                    </div>

                   

                   {/* menu pantalla grande */}
                    <ul className="items-center hidden space-x-8 font-semibold text-blue-800 lg:flex">
                        <li><Link to="/" activeClassName="pagina-actual">Inicio</Link></li>
                        <li><Link to="/proyectos" activeClassName="pagina-actual">Proyectos</Link></li>
                        <li><Link to="/repositorios" activeClassName="pagina-actual">Código GitHub</Link></li>
                        {/* <li>
                            <a href="https://twitter.com/Hector48050545" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="transform hover:scale-110"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>

                            </a>
                        </li> */}
                        <li>

                            <a href="https://www.linkedin.com/in/hallende/" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="transform hover:scale-110"

                                >
                                    <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>

                        </li>

                        <li>

                            <a href="https://github.com/HectorAllende" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    className="transform hover:scale-110"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                                </svg>
                            </a>

                        </li>
                    </ul>
                </div>

           </div>
        </header>
    );
}
 
export default Header;