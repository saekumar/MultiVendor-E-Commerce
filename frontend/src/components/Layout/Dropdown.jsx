import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

const Dropdown = ({ categoriesData }) => {
  const navigate = useNavigate()

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category.title}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
          <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
          <button
            className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
          >
            All Categories
            <IoIosArrowDown size={20} className="ml-2" />
          </button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 bg-orange-50">
        {categoriesData.map((category, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => handleCategoryClick(category)}
          >
            {/* {console.log(category.image_Url)} */}
            <div className="flex items-center justify-center">
              <img
                src={category.image_Url}
                alt=""
                style={{
                  width: '25px',
                  height: '25px',
                  objectFit: 'contain',
                  marginLeft: '10px',
                  userSelect: 'none',
                }}
              />
              <h3 className="m-3 cursor-pointer select-none text-[18px] font-Roboto">
                {category.title}
              </h3>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Dropdown
