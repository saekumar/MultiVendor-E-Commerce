import { Lens } from '@/components/ui/lens'
import styles from '@/styles/styles'
import React, { useState } from 'react'
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1)
  const [click, setClick] = useState(false)
  const [select, setSelect] = useState(false)
  const [hovering, setHovering] = useState(false)

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }
  return (
    <div className="shadow-2xl">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 shadow-2xl bg-[#00000030] z-40 flex items-center justify-center rounded">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-orange-100 rounded-md shadow-2xl relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />

            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <Lens hovering={hovering} setHovering={setHovering}>
                  <img
                    src={`${data.image_Url && data.image_Url[0]?.url}`}
                    alt=""
                  />
                </Lens>
                <div className="flex">
                  <Link to={`/shop/preview/${data.shop._id}`} className="flex">
                    <img
                      src={`${
                        data?.shop?.shop_avatar?.url &&
                        data.shop?.shop_avatar?.url
                      }`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />

                    <div>
                      <h3 className={`${styles.shop_name}`}>
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-[15px]">
                        {data?.rating} Ratings
                      </h5>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`}
                  //   onClick={handleMessageSubmit}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">(50) Sold out</h5>
              </div>

              <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                <h1
                  className={`${styles.productTitle} text-gray-800 text-[20px]`}
                >
                  {data.name}
                </h1>
                <p className="font-medium mt-1 text-gray-700">
                  {data.description}
                </p>

                <div className="flex pt-3">
                  <h4
                    className={`${styles.productDiscountPrice} font-bold text-2xl`}
                  >
                    RS.{data.discount_price}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + '₹' : null}
                  </h3>
                </div>
                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-orange-600 to-orange-500 text-gray-950 font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-orange-600 to-orange-500 text-import { compose, graphql } from 'react-apollo'
                       font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <AiFillHeart
                        size={30}
                        className="cursor-pointer"
                        // onClick={() => removeFromWishlistHandler(data)}
                        color={click ? 'red' : '#333'}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={30}
                        className="cursor-pointer"
                        // onClick={() => addToWishlistHandler(data)}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded-[4px] h-11 flex items-center`}
                  //   onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-[#fff] flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ProductDetailsCard
