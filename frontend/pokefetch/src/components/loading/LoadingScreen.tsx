import { motion } from 'motion/react'
import type {JSX} from 'react'

import PokeFetchLogoOriginal from '../../assets/pokefetch-icon-original.png'

const LoadingScreen = (): JSX.Element => {
  return (
    <section className='w-full h-screen flex flex-col justify-center items-center'>
      <motion.img 
        src={PokeFetchLogoOriginal}
        alt='PokeFetch loding logo'
        className='w-auto h-10 object-contain mb-3 opacity-70'
        loading='eager'
        initial={{ 
          y: -60
        }}
        animate={{ 
          y: [0, -40],
          scale: [1, 1.1],
          rotate: [10, 360] 
        }}
        transition={{
          duration: 0.7,
          rotate: {
            duration: 0.9,
            repeat: Infinity,
            repeatType: 'loop',
          },
          ease: 'easeInOut',
          type: 'spring',
          mass: 0.3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <h6 className='animate-pulse'>Loading...</h6>
    </section>
  )
}

export default LoadingScreen;