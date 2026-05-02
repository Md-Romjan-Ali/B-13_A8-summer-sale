"use client"

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';

const Profile = () => {
    const {data:session}=authClient.useSession()
   const user=session?.user
   console.log(user);
    return (
        <div className='max-w-sm mx-auto '>
        
                     <div className=' bg-white p-5 border-2 border-red-600 rounded-2xl mx-auto'>
                                 <Image
                           src={user?.image}
                           width={150}
                           height={150}
                           alt='baner image'
                           className='bg-gray-200 grid mx-auto rounded-full border-2 border-green-400 mt-10'
                           />
                          <h1 className='text-2xl mt-2 text-center font-bold my-3'>{user?.name}</h1>
                          <h1 className='text-lg mb-4 text-center text-gray-400'>{user?.email}</h1>
                         <Link href={'/update'}> <button className='btn w-full'><FaEdit size={20} className='text-gray-400'></FaEdit>Update Profile</button></Link>
                         
                     </div>
               
                 
        </div>
    );
};

export default Profile;