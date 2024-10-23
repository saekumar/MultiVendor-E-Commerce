import { navItems } from '@/static/data'
import styles from '@/styles/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ active }) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex">
            <Link
              to={item.url}
              className={`${
                active === index + 1
                  ? 'text-gray-950'
                  : 'text-black 800px:text-[#fff]'
              } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer text-[20px] font-Roboto hover:text-[22px] transition-all duration-200`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Navbar
// 1b263b
