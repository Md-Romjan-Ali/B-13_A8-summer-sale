import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import logo from '@/assets/logo2.png'

const Navbar = () => {
    const links=<div className='lg:flex gap-4 text-[16px]'>
    <Link href={'/'}><li>Home</li></Link>
    <Link href={'/products'}><li>Products</li></Link>
    <Link href={'/profile'}><li>My Profile</li></Link>
    </div>
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Image
    src={logo}
    width={60}
    height={60}
    alt='baner image'
    className='bg-gray-200  h-18 w-18 rounded-full border-2 border-green-400 lg:ml-4'
    />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {links}
    </ul>
  </div>
  <div className="navbar-end gap-4 text-[16px]">
    <Link href='/login'>Login</Link>
    <Link href='/register'>Register</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;