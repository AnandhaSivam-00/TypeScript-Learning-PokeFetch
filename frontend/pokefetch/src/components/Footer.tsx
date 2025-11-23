import { useState, startTransition, Activity, useEffect, type JSX } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import CreditsModal from './CreditsModal'

import PokeFetchLogoOriginal from '../assets/pokefetch-icon-original.png';

const Footer = (): JSX.Element => {
    const [openCreditsModal, setOpenCreditsModal] = useState<boolean>(false);

    useEffect(() => {
        if(openCreditsModal) {
            document.getElementById('credits-modal')?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }
    }, [openCreditsModal])

    return (
        <>
            <footer className='bg-black-background w-full h-auto px-3 py-2 pt-4 overflow-hidden'>
                <div className='z-20 w-full relative bg-transparant'>
                    <h5 className='font-semibold!'>BY LITTLE THINKER</h5>

                    <div className='w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start gap-2 [&>span,a]:text-xs [&>span,a]:text-gray-4'>
                        <span>@{new Date().getFullYear()}</span>
                        <a href="http://github.com/AnandhaSivam-00/" target='_blank' className='underline hover:text-black-accent-2'>github.com/AnandhaSivam-00</a>
                    </div>

                    <button 
                        className='text-[0.5rem] text-black-accent-1 underline hover:text-black-accent-2 mt-1 cursor-pointer'
                        onClick={() => {
                            startTransition(() => {
                                setOpenCreditsModal(true);
                            })
                        }}
                    >
                        About & Credits
                    </button>

                    <motion.img
                        src={PokeFetchLogoOriginal}
                        alt='footer back logo'
                        className='w-auto h-full object-cover absolute right-0 bottom-0 z-0 transform translate-x-5 translate-y-5 -rotate-30 pointer-events-none'
                        initial={{ opacity: 0.1 }}
                        whileInView={{ opacity: 0.2 }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            </footer>

            {/* <Activity mode={openCreditsModal ? 'visible' : 'hidden'}> */}
            <AnimatePresence mode='wait'>
                {openCreditsModal && (
                    <CreditsModal 
                        setOpenCreditsModal={setOpenCreditsModal}
                    />
                )}
            </AnimatePresence>
            {/* </Activity> */}

        </>
    )
}

export default Footer