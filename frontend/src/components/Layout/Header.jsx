import React, { useState, useEffect, useRef } from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import Logo from '../../assets/S_Logo.png'
import { productData, categoriesData } from '../../static/data.jsx'
import {
  AiOutlineHeart,
  AiOutlineProfile,
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import Dropdown from './Dropdown'
import Navbar from './Navbar'
import toast from 'react-hot-toast'
import ShoppingCartComponent from '../ShoppingCart/ShoppingCart'
import WishlistComponent from '../Wishlist/WishlistComponent'
const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState(null)
  const [active, setActive] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const searchRef = useRef(null)

  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)

    if (term === '') {
      setSearchData([])
      return
    }

    const filteredProds =
      productData &&
      productData.filter((prod) =>
        prod.name.toLowerCase().includes(term.toLowerCase())
      )

    if (filteredProds.length > 0) {
      setSearchData(filteredProds)
    } else {
      toast.error('No Products found!')
      setSearchData([])
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchData([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
      setActive(true)
    } else {
      setActive(false)
    }
  })
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:header_box h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center justify-center space-x-1">
              <img
                src={Logo}
                width={50}
                height={50}
                className="mt-3 rounded-full items-start"
                alt="Logo"
              />
              <p className="text-gray-800 font-bold text-3xl">
                ae
                <span className="text-orange-600 font-bold text-3xl">N</span>
                us
              </p>
            </Link>
          </div>

          <div className="w-[50%] relative" ref={searchRef}>
            <input
              className="h-[40px] w-full px-2 border-orange-500 border-[2px] rounded-md"
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <AiOutlineSearch
              size={30}
              className="absolute top-1.5 right-0 cursor-pointer"
            />

            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData.map((i, index) => (
                  <Link to={`/product/${i.id}`} key={index}>
                    <div className="w-full flex items-start py-3">
                      <img
                        src={i.image_Url[0].url}
                        alt={i.name}
                        className="w-[40px] h-[40px] mr-[10px]"
                      />
                      <h1>{i.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to="/seller" className="space-x-3">
              <h1 className="text-[#fff] text-center flex items-center justify-center">
                Become Seller
                <span>
                  <IoIosArrowForward className="mt-1 ml-1" />
                </span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? 'shadow-md fixed top-0 z-10' : null
        } transition hidden 800px:flex items-center justify-between w-full bg-orange-500 h-[75px] rounded-sm`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div className="">
            {/* Categories */}

            <Dropdown
              categoriesData={categoriesData}
              setDropDown={setDropDown}
              dropDown={dropDown}
            />
          </div>
          {/* Navbar */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                
                <WishlistComponent />
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {/* <AiOutlineShoppingCart size={30} className="text-white" /> */}

                <ShoppingCartComponent />
              </div>
            </div>
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <CgProfile size={30} className=" text-gray-50" />
                {/* <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  1
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
