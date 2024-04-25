import React from 'react'
import logo from '../assets/Rao-Logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import img from '../assets/apl.png'
const Footer = () => {
    return (
        <>
            <div>
                <div className="links">
                    <footer className="bg-white dark:bg-[#d9d9d9] ">
                        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                            <div className="md:flex gap-20">
                                <div className="mb-6 md:mb-0">
                                    <a href="" className="flex items-center flex-col justify-start ">
                                        <img src={logo} className="w-66 me-3" alt="FlowBite Logo" /><br /> <br />

                                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                                    </a>
                                    <div className="links2 space-y-3 w-full">
                                        <a href="tel:+917596778899" className='flex gap-2 items-center'> <FaPhoneAlt size={'1.5rem'} /> (079) 67 444 444</a>
                                        <a href="https://wa.me/917573003929" className='flex gap-2 items-center'> <FaWhatsapp size={'1.5rem'} /> +91 7573 003 929</a>
                                        <a href="mailto:contact@raoconsultants.com" className='flex gap-2 items-center'> <IoMdMail size={'1.5rem'} /> contact@raoconsultants.com</a>
                                    </div>
                                    <div className="join m-4 w-full justify-start text-xl space-y-5 flex flex-col items-center">
                                        <p className='font-bold text-[#414e62]'>JOIN THE BAND WAGON</p>
                                        <div className="flex mt-4 sm:justify-start sm:mt-0 text-xl items-center">
                                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                                                </svg>
                                                <span className="sr-only">Facebook page</span>
                                            </a>
                                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                                                </svg>
                                                <span className="sr-only">Twitter page</span>
                                            </a>
                                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                                <IoLogoInstagram />
                                                <span className="sr-only">Instagram</span>
                                            </a>

                                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                                <FiYoutube />
                                                <span className="sr-only">Youtube</span>
                                            </a>
                                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                                <FaLinkedin />
                                                <span className="sr-only">Linkedin</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="grid grid-cols-2 gap-7 sm:gap-6  sm:grid-cols-2">
                                    <div className=''>
                                        <h2 className="mb-6 text-sm font-semibold text-[#2d4368] uppercase ">Company</h2>
                                        <ul className="text-[#2d4368] font-medium">
                                            <li className="mb-4">
                                                <a href="https://flowbite.com/" className="hover:underline">Infrastructure</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://tailwindcss.com/" className="hover:underline">Award and Accreditations</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://tailwindcss.com/" className="hover:underline">Testimonial</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://tailwindcss.com/" className="hover:underline">Video</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://tailwindcss.com/" className="hover:underline">Photo</a>
                                            </li>
                                            <li>
                                                <a href="https://tailwindcss.com/" className="hover:underline">Career</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="mb-6 text-sm font-semibold text-[#2d4368] uppercase ">Services</h2>
                                        <ul className="text-[#2d4368] font-medium">
                                            <li className="mb-4">
                                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Foreign Education</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Visa and Immigration</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Post Visa Services</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">IELTS & other Coaching</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">CELPIP Coaching</a>
                                            </li>
                                            <li className="mb-4">
                                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Upcoming Events</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-[#2d4368] uppercase ">Support</h2>
                                    <ul className="text-[#2d4368] font-medium">
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Downloads</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Feedback</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Online Payment</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="#" className="hover:underline">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-[#2d4368] uppercase ">Download App</h2>
                                    <img src={img} alt="" className='h-20 w-28 cursor-pointer' />
                                </div>
                            </div>
                            <div className="hyperLinks w-full flex flex-wrap flex-col space-y-4 mt-5 ">
                                <div className="firstLine">
                                    <a href="" className='text-[#2d4368] font-semibold'>Canada PR</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Canada PR Eligibility</a>
                                </div>
                                <div className="SecondLine">
                                    <a href="" className='text-[#2d4368] font-semibold'>Study in USA</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Study in UK</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Study in Australia</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Study in Canada</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Study in New Zealand</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Study in Germany</a> |
                                </div>
                                <div className="Third Line">
                                    <a href="" className='text-[#2d4368] font-semibold'>Immigration Consultants</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Immigration Visa</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Visitors Visa</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Student Visa</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> Dependent Visa</a> |
                                </div>
                                <div className="Fourth Line">
                                    <a href="" className='text-[#2d4368] font-semibold'>IELTS Coaching</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> TOEFL Coaching Visa</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> GRE Coaching</a> |
                                    <a href="" className='text-[#2d4368] font-semibold'> GMAT Coaching</a> |
                                </div>
                            </div>
                            {/* <hr className="my-6 border-gray-200 sm:mx-auto  dark:border-gray-700 lg:my-8" /> */}
                            {/* <div className="sm:flex sm:items-center sm:justify-between bg-blue-950 w-full">
                                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright Rao Consultants <a href="" className="hover:underline">of © 2023</a>. All Rights Reserved.
                                </span>
                            </div> */}
                        </div>
                    </footer>

                </div>
            </div>
        </>
    )
}

export default Footer
