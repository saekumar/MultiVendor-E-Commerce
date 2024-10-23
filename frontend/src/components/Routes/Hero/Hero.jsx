// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { useSwipeable } from 'react-swipeable' // Import the swipeable hook
// import styles from '../../../styles/styles'

// const Hero = () => {

//   const [currentIndex, setCurrentIndex] = useState(0)

//   // Function to go to the next banner
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     )
//   }

//   // Function to go to the previous banner
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     )
//   }

//   // Swipe Handlers
//   const handlers = useSwipeable({
//     onSwipedLeft: nextSlide, // Swipe left to go to the next slide
//     onSwipedRight: prevSlide, // Swipe right to go to the previous slide
//     preventDefaultTouchmoveEvent: true,
//     trackMouse: true, // To track mouse drag as well
//   })

//   return (
//     <div
//       {...handlers} // Attach swipe handlers to the main div
//       className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat cursor-pointer ${styles.noramlFlex}`}
//       style={{
//         backgroundImage: `url(${items[currentIndex].imgUrl})`,
//       }}
//     >
//       <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
//         <h1
//           className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
//           dangerouslySetInnerHTML={{ __html: items[currentIndex].text }}
//         />
// <p className="pt-5 text-[16px] font-Poppins font-[400] text-[#000000ba] overflow-hidden">
//   {items[currentIndex].description}
// </p>
//         <Link to="/products" className="inline-block">
//           <div className={`${styles.button} mt-5`}>
//             <span className="text-[#fff] font-[Poppins] text-[18px]">
//               Shop Now
//             </span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Hero
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
        <div className="w-[90%] 800px:w-[60%] flex flex-col mr-96 ">
          <h1 className="text-[35px] leading-[1.2] 800px:text-[60px] text-[#252121] font-[600] capitalize">
            Best Assortment for <br /> Home Decoration
          </h1>
          <p className="pt-5 text-[16px] font-Poppins font-[450] text-[#000000ba]">
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
              <span className="text-[#fff] font-Poppins  text-[18px]">
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
