import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltLeft, FaRegHeart, FaStar } from 'react-icons/fa';

const DetailsPage =async ({params}) => {
    const {id}=await params
     const res=await fetch("https://b-13-a8-summer-sale.vercel.app/data.json")
     const data=await res.json()
     const product=data.find(product=>product.id==id)
   
    return (
        <div className='max-w-sm mx-auto mt-10'>
             <div className=" bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl group relative">

      {/* Wishlist Icon */}
      <div className="absolute right-3 top-3 z-10 bg-white p-2 rounded-full shadow cursor-pointer hover:text-red-500">
        <FaRegHeart />
      </div>

      {/* Image */}
      <figure className="relative rounded-t-2xl h-52 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-all rounded-xl"
        />
      </figure>

      {/* Card Body */}
      <div className="p-4 space-y-2">

        {/* Name */}
        <h2 className="text-2xl font-semibold">
          {product.name}
        </h2>

        {/* Brand + Category */}
        <p className="text-xl text-gray-500">
          {product.brand} • {product.category}
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Rating + Price */}
        <div className="flex justify-between items-center w-full pt-2">
          <div className="flex items-center gap-1 text-yellow-500 text-xl">
            <FaStar size={25} />
            <span className="text-gray-600">
              {product.rating}
            </span>
          </div>

          <p className="text-xl font-bold text-green-600">
            ${product.price}
          </p>
        </div>

        {/* Stock */}
        <p className="text-lg text-gray-400">
          Stock: {product.stock}
        </p>

        {/* Button */}
        <div className="card-actions mt-2 flex justify-center">
          <Link href={'/'}><button className="btn btn-primary w-full ">
           <FaLongArrowAltLeft size={25}></FaLongArrowAltLeft> Back
          </button></Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default DetailsPage;