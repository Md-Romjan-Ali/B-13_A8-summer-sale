import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';


const Product =async () => {
  
    console.log();
    const res=await fetch('https://b-13-a8-summer-sale.vercel.app/data.json')
    const products=await res.json()
   
    return (
        <div className='grid border-t-2 p-5 border-green-400 my-10 sm:grid-cols-1 md:grid-cols-3 gap-4'>
           {
            products.slice(0,3).map(product=><div key={product.id}>
                <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-2xl group">

      {/* Wishlist Icon */}
      <div className="absolute right-3 top-3 z-10 bg-white p-2 rounded-full shadow cursor-pointer hover:text-red-500">
        <FaRegHeart size={30}/>
      </div>

      {/* Image */}
      <figure className="relative h-52 bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-105 transition-all rounded-xl "
        />
      </figure>

      {/* Card Body */}
      <div className="space-y-4 p-4">

        {/* Name */}
        <h2 className="text-xl font-semibold">
          {product.name}
        </h2>

        {/* Rating */}
       <div className='flex justify-between  items-center'>
         <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <FaStar size={25}/>
       <span className="text-gray-600 text-lg">
            {product.rating}</span>
        </div>
  {/* Price */}
        <p className="text-lg font-bold text-green-600">
          ${product.price}
        </p>
       </div>
      

        {/* Button */}
        <div className="card-actions justify-end mt-2">
         <Link href={`/all-products/${product.id}`} className='w-full'><button className="btn btn-primary w-full rounded-xl">
            View Details
          </button></Link>
        </div>
      </div>
    </div>   
            </div>)
           }
       
        </div>
    );
};

export default Product;
