"use client"

import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/dist/server/api-utils';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const UpdateProfile = () => {
    const {register,handleSubmit}=useForm()
        const updateProfile= async(data)=>{
         
       await authClient.updateUser({
    image: data.image,
    name: data.name,
})
     toast.success('Update Success')
    
        }
    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
         <legend className="fieldset-legend text-4xl font-semibold">Update Profile</legend>
         <form onSubmit={handleSubmit(updateProfile)} className='space-y-2'>
         <label className="label text-lg">Photo</label>
         <input type="url" 
         {...register('image',{required:true})}
         className="input" placeholder="paste Url" />
       
         <label className="label text-lg">name</label>
         <input type="name"
         {...register('name',{required:true})}
         className="input" placeholder="Type your Update name" />
       <input type="submit" value="Update" className='btn mt-2 w-full btn-primary btn-outline'/>
        </form>
       
       </fieldset>
    );
};

export default UpdateProfile;