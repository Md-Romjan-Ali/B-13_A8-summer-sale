
"use client" 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import logo from '@/assets/logo2.png'
import { authClient } from '@/lib/auth-client';


const Navbar = () => {
  const {data:session}=authClient.useSession()
  const user=session?.user;
  console.log(user);
    const links=<div className='lg:flex items-center gap-5 text-[16px] font-semibold'>
    <Link href={'/'}><li>Home</li></Link>
    <Link href={'/all-products'}  className=''><li>All-Products</li></Link>
    <Link href={'/profile'} className=''><li>My Profile</li></Link>
    </div>
    const signOut=async()=>{
await authClient.signOut();
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <CiMenuBurger size={30} />
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow ">
       {links}
      </ul>
    </div>
  <div className='flex items-center gap-2'>
      <Image
    src={logo}
    width={60}
    height={60}
    alt='baner image'
    className='bg-gray-200  h-15 w-15 rounded-full border-2 border-green-400 lg:ml-4'
    />
    <h1 className='sm:hidden md:block text-4xl font-bold bg-[linear-gradient(9deg,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)] bg-clip-text text-transparent'>SummerMarket</h1>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {links}
    </ul>
  </div>
  
    
     <div className="navbar-end gap-4 text-[16px]">
    <Image
    src={user?.image}
    width={60}
    height={60}
    alt='baner image'
    className='bg-gray-200 h-15 w-15 rounded-full border-2 border-green-400 lg:ml-4'
    />
      {
      user ? <button onClick={signOut}>SignOut</button> :
      <div className='flex items-center gap-4'>
         <Link href='/login' className='text-lg font-semibold'>Login</Link>
    <Link href='/register' className='text-lg font-semibold'>Register</Link>
      </div>
   
     }
  </div>
 
 
</div>
        </div>
    );
};

export default Navbar;