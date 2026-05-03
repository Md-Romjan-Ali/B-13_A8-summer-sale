
"use client" 
import Image from 'next/image';
import Link from 'next/link';

import { CiMenuBurger } from 'react-icons/ci';
import logo from '@/assets/logo2.png'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';


const Navbar = () => {
  const {data:session}=authClient.useSession()
  const user=session?.user;
  console.log(user);
    const links=<div className='lg:flex items-center gap-5 text-[16px] font-semibold'>

  
    <li><Link href={'/'} className='btn text-lg font-semibold '>Home</Link></li>
  
    <li><Link href={'/all-products'} className='btn text-lg font-semibold '>All-Products</Link></li>
  
    {
      user &&  <li><Link href={'/profile'} className='btn text-lg font-semibold '>My Profile</Link></li>
    }
    
    </div>
    const signOut=async()=>{
await authClient.signOut();
redirect('/login')
    }
    return (
        <div className='px-10'>
            <div className="navbar bg-base-100 shadow-sm">

  <div className='flex justify-between w-full'>
    <div className="flex items-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <CiMenuBurger size={30} />
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2  shadow ">
            {/* authentication */}
      <div className=" space-y-3 gap-4 text-[16px]">
      <div>
        {user &&
          <Image
    src={user?.image}
    width={20}
    height={20}
    alt='baner image'
    className='bg-gray-200 h-15 w-15 rounded-full border-2 border-green-400 lg:ml-4 '
    />
      }
      </div>
  
  </div>
      {/* authentication */}
       {links}
       <div className=''>
        {
      user ? <button onClick={signOut} className='btn btn-accent text-lg font-semibold '>SignOut</button> :
      <div className='flex items-center gap-4'>
         <Link href='/login' className='btn btn-accent text-lg font-semibold '>Login</Link>
    <Link href='/register' className='btn btn-accent text-lg font-semibold '>Register</Link>
      </div>
   
     }
      </div>
      </ul>
    </div>
  <div className='flex items-center gap-2'>
    
      <Image
    src={logo}
    width={60}
    height={60}
    alt='baner image'
    className='bg-gray-200 hidden md:block h-15 w-15 rounded-full border-2 border-green-400 lg:ml-4'
    />
    <h1 className=' text-4xl font-bold bg-[linear-gradient(9deg,rgba(63,94,251,1)_0%,rgba(252,70,107,1)_100%)] bg-clip-text text-transparent'>SummerMarket</h1>
  </div>
  </div>

   <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
   {links}
   
    </ul>
    
  </div>
    
     <div className="flex items-center  gap-4 text-[16px]">
      <div>
        {user &&
          <Image
    src={user?.image}
    width={20}
    height={20}
    alt='baner image'
    className='bg-gray-200 h-15 w-15 rounded-full border-2 border-green-400 lg:ml-4 hidden md:block'
    />
      }
      </div>
  
      <div className='hidden md:block'>
        {
      user ? <button onClick={signOut} className='text-lg font-semibold btn btn-accent'>SignOut</button> :
      <div className='flex items-center gap-4'>
         <Link href='/login' className='text-lg font-semibold btn btn-accent'>Login</Link>
    <Link href='/register' className='text-lg font-semibold btn btn-accent'>Register</Link>
      </div>
   
     }
      </div>
  </div>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;