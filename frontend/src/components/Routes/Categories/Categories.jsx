import { brandingData, categoriesData } from '@/static/data'
import styles from '@/styles/styles'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* Branding Section */}
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding my-12 flex justify-between w-full shadow-2xl bg-orange-50 p-5 rounded-md">
          {brandingData.map((i, index) => (
            <div className="flex items-start" key={index}>
              {/* Ensure icons follow React's DOM property format */}
              {i.icon}
              <div className="px-3">
                <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                <p className="text-xs md:text-sm">{i.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div
        className={`${styles.section} bg-orange-50 shadow-2xl p-6 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData.map((i) => {
            const handleSubmit = (i) => {
              navigate(`/products?category=${i.title}`)
            }

            return (
              <div
                className="w-full h-[100px] flex items-center justify-between space-x-[-10px] cursor-pointer overflow-hidden"
                key={i.id}
                onClick={() => handleSubmit(i)}
              >
                <h5 className="text-[20px] text-gray-900 leading-[1.3]">
                  {i.title}
                </h5>
                <img
                  src={i.image_Url}
                  className="w-[120px] object-cover"
                  alt={i.title}
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Categories
