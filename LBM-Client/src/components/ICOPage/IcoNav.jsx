import React from 'react'
import { BsArrowRight, BsTwitter, BsDiscord, BsGithub, BsTelegram, BsInstagram, BsFacebook, BsLinkedin, BsTiktok } from 'react-icons/bs';
import logo from '../../assets/Libertum-logo.png';



const IcoNav = () => {
    return (
        <div>
            <header className="text-gray-400 body-font bg-gray-800 fixed top-0">
                <div className="container mx-auto flex md:py-3 md:flex-row items-center text-sm">
                    <div className='md:-ml-12 mr-2'>
                        <img src={logo} alt="" className='h-12 w-12 rounded-full' />
                    </div>
                    <a href="" className='mr-4 md:p-2'>HOME</a>
                    <a href="" className='mr-4 md:p-2'>WHITE PAPER</a>
                    <a href="" className='mr-4 md:p-2'>OUR PROJECT</a>

                    <nav className="md:ml-auto md:mr-auto md:flex items-center justify-center text-lime-500 text-2xl gap-3 hidden" >
                        <a className="md:mr-5 hover:text-gray-900"><BsDiscord /></a>
                        <a className="md:mr-5 hover:text-gray-900"><BsTwitter /></a>
                        <a className="md:mr-5 hover:text-gray-900"><BsTiktok /></a>
                        <a className="md:mr-5 hover:text-gray-900"><BsTelegram /></a>
                        <a className="md:mr-5 hover:text-gray-900"><BsInstagram /></a>
                        <a className="md:mr-5 hover:text-gray-900"><BsFacebook /></a>
                    </nav>

                    <div className='bg-white p-2 md:-mr-[70px]'>
                        <h1>🇬🇧 EN</h1>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default IcoNav