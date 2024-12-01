import styles from '@/styles/styles'
import React, { useState } from 'react'
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Ratings from './Rating'
import { Lens } from '../ui/lens'

const ProductDetails = ({ data }) => {
  const navigate = useNavigate()
  const [click, setClick] = useState(false)
  const [count, setCount] = useState(1)
  const [select, setSelect] = useState(0)
  const [hovering, setHovering] = useState(false)
  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  const handleMessagesubmit = () => {
    navigate('/inbox?conversation=50?asdfgjh')
  }
  return (
    <div className="bg-orange-100">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <Lens hovering={hovering} setHovering={setHovering}>
                  <img
                    src={data.image_Url[select].url}
                    alt=""
                    className="w-[80%]"
                  />
                </Lens>
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? 'border' : 'null'
                    } cursor-pointer`}
                  >
                    <img
                      src={data.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 0 ? 'border' : 'null'
                    } cursor-pointer`}
                  >
                    <img
                      src={data.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full 800px:w-[50%] pt-5">
                <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.productDiscountPrice}`}>
                    Rs.{data.discount_price}
                  </h4>
                  <h3 className={`${styles.price}`}>
                    {data.price ? data.price + '₹' : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                      onClick={incrementCount}
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
                        color={click ? 'red' : '#333'}
                        title="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-gray-800 !mt-6 !rounded !h-11 flex items-center`}
                  //   onClick={() => addToCartHandler(data._id)}
                >
                  <span className="text-white flex items-center">
                    Add to cart <AiOutlineShoppingCart className="ml-1" />
                  </span>
                </div>
                <div className="flex items-center pt-8">
                  <Link to={`/shop/preview/${data?.shop.id}`}>
                    <img
                      src={`${data?.shop?.shop_avatar?.url}`}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full mr-2"
                    />
                  </Link>
                  <div className="pr-8">
                    <Link to={`/shop/preview/${data?.shop.name}`}>
                      <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                        {data.shop.name}
                      </h3>
                    </Link>
                    <h5 className="pb-3 text-[15px]">
                      ({data.rating}/5) Ratings
                    </h5>
                  </div>
                  <div
                    className={`${styles.button} bg-gray-800 mt-4 !rounded !h-11`}
                    onClick={handleMessagesubmit}
                  >
                    <span className="text-white  flex items-center">
                      Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfo data={data} averageRating={data.rating} />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  )
}

export default ProductDetails

const ProductDetailsInfo = ({ data, averageRating }) => {
  console.log(data)
  const [activeTab, setActiveTab] = useState('details')
  return (
    <div className="mt-10">
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="flex space-x-4 h-20 text-gray-950 bg-orange-200 items-center justify-around shadow-2xl rounded-lg">
          <TabsTrigger
            value="details"
            className={` text-lg font-semibold text-gray-900 px-6 py-2 transition-all hover:bg-orange-50 ${
              activeTab === 'details' ? ' shadow-sm' : ''
            }`}
            onClick={() => setActiveTab('details')}
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className={` text-lg font-semibold text-gray-900 px-6 py-2 transition-all hover:bg-orange-50 ${
              activeTab === 'reviews' ? ' shadow-sm' : ''
            }`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </TabsTrigger>
          <TabsTrigger
            value="seller"
            className={` text-lg font-semibold text-gray-900 px-6 py-2 transition-all hover:bg-orange-50 ${
              activeTab === 'seller' ? '  shadow-sm' : ''
            }`}
            onClick={() => setActiveTab('seller')}
          >
            Seller Information
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="pt-5">
          <p className="text-gray-900 font-semibold text-[20px]">
            {data.description}
          </p>
        </TabsContent>

        <TabsContent value="reviews" className="pt-5">
          <div className="min-h-[40vh] flex flex-col items-center overflow-y-scroll">
            {data?.reviews?.length ? (
              data.reviews.map((item, index) => (
                <div key={index} className="w-full flex my-2">
                  <img
                    src={`${item.user.avatar?.url}`}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div className="pl-2">
                    <div className="flex items-center">
                      <h1 className="font-semibold mr-3">{item.user.name}</h1>
                      <Ratings rating={data?.ratings} />
                    </div>
                    <p>{item.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <h5 className="font-semibold text-[20px] text-gray-900">
                No Reviews available for this product!
              </h5>
            )}
          </div>
        </TabsContent>

        <TabsContent value="seller" className="pt-5">
          <div className="w-full flex flex-col p-5 md:flex-row">
            <div className="w-full md:w-1/2">
              <Link to={`/shop/preview/${data.shop._id}`}>
                <div className="flex items-center">
                  <img
                    src={`${data?.shop?.shop_avatar?.url}`}
                    className="w-[50px] h-[50px] rounded-full"
                    alt=""
                  />
                  <div className="pl-3">
                    <h3 className="text-lg font-semibold">{data.shop.name}</h3>
                    <p className="text-sm text-gray-500">
                      ({averageRating}/5) Ratings
                    </p>
                  </div>
                </div>
              </Link>

              <p className="pt-2">{data.shop.description}</p>
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0 md:flex flex-col items-end">
              <div className="text-left">
                <h5 className="font-semibold text-[18px]">
                  Joined on:{' '}
                  <span className="font-normal">
                    {data.shop?.createdAt?.slice(0, 10)}
                  </span>
                </h5>
                <h5 className="font-semibold pt-3  text-[18px]">
                  Total Products: <span className="font-normal">10</span>
                </h5>
                <h5 className="font-semibold pt-3  text-[18px]">
                  Total Reviews: <span className="font-normal">10</span>
                </h5>
                <Link to="/">
                  <button className="mt-3 px-4 py-2 bg-gray-800 text-gray-50 font-semibold rounded-md hover:bg-gray-800 transition">
                    Visit Shop
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
