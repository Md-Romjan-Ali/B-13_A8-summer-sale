"use client"

import { authClient } from '@/lib/auth-client';
import { useSpring,animated } from '@react-spring/web';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [errors,setErrors]=useState('')
    const {register,handleSubmit}=useForm()
    const onSubmitHandle=async (data)=>{
    
        const { data:res, error } = await authClient.signUp.email({
    name: data.name, // required
    email: data.email, // required
    password: data.password, // required
    image: data.image,
    callbackURL: "/",
});
if(errors){
  toast.error(`${errors}`)
  return;
}else{
  alert(`Register ${data.email} Successful`)
}
console.log(res,error);
setErrors(error?.message)
    }
   const fade=useSpring({
        from:{
            opacity:0
        },
        to:{
           opacity:1
        }
    })
     const signOutWithGoogle=async()=>{
            const data = await authClient.signIn.social({
        provider: "google",
      });
      console.log(data);
        }
    return (
       <animated.div className="mt-10" style={fade}>
          <form onSubmit={handleSubmit(onSubmitHandle)}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
  <legend className="fieldset-legend text-4xl font-semibold">Register Now!</legend>

  <label className="label text-lg">Name</label>
  <input type="text" {...register('name',{required:true})} className="input" placeholder="Type your name" />
  <label className="label text-lg">Image</label>
  <input type="url"
  {...register('image',{required:true})}
  className="input" placeholder="paste Url" />

<label className="label text-lg">Email</label>
  <input type="Email"
  {...register('email',{required:true})}
  className="input" placeholder="Type your valid email" />

  <label className="label text-lg">password</label>
  <input type="password"
  {...register('password',{required:true})}
  className="input" placeholder="Type your password" />
  <p className='text-red-500'>{errors && `${errors}`}</p>
  <input type="submit" value="Register" className='btn btn-primary btn-outline mt-2'/>

 <p className="text-center border-r-2 border-gray-400 ">OR</p>
 
 <button onClick={signOutWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
 <FcGoogle size={20}/>
  Login with Google
</button>
  <div>
    <h1 className='text-sm'>If you have an account <Link href={'login'} className='text-blue-700 hover:underline font-semibold'>Login</Link></h1>
  </div>
</fieldset>
          </form>
        </animated.div>
    );
};

export default RegisterPage;