'use client'
import { ImagesSlider } from '@/components/ui/images-slider'
import { motion } from 'framer-motion'
import React from 'react'
import styles from '../../../styles/styles'
import { Link } from 'react-router-dom'

const Hero = () => {
  const images = [
    'https://themes.rslahmed.dev/rafcart/assets/images/banner-3.jpg',
    'https://themes.rslahmed.dev/rafcart/assets/images/banner-1.jpg',
    'https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg',
  ]

  return (
    <ImagesSlider className="h-[79.5vh] overflow-hidden" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <div className="w-full md:w-[90%] lg:800px:w-[60%] flex flex-col lg:mr-96">
          <h1 className="text-[30px] md:text-[35px] leading-[1.2] lg:text-[60px] text-[#252121] font-[600] capitalize">
            Best Assortment for <br /> Home Decoration
          </h1>
          <p className="pt-5 text-[15px] md:text-[16px] font-Poppins font-[450] text-[#000000ba] sm:text-[16px] ">
            Find the best assortment of home decoration pieces that will
            transform
            <br />
            any room into a work of art. Whether you're refreshing your living
            room
            <br />
            or adding flair to your bedroom.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
              <span className="text-[#fff] font-Poppins text-[16px] md:text-[18px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </motion.div>
    </ImagesSlider>
  )
}

export default Hero
