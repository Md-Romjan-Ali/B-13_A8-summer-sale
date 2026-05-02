"use client"

import { authClient } from '@/lib/auth-client';
import { useSpring,animated } from '@react-spring/web';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';


const LoginPage =() => {

    const {register,handleSubmit}=useForm()
    const onSubmit= async(data)=>{
        console.log(data);
        const { data:res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});

console.log(res,error);
    }
    const fade=useSpring({
        from:{
            opacity:0
        },
        to:{
           opacity:1
        }
    })
    const signWithGoogle=async()=>{
        const data = await authClient.signIn.social({
    provider: "google",
  });
  console.log(data);
    }
    return (
        <animated.div className='mt-10' style={fade}>
         
               <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4">
  <legend className="fieldset-legend text-4xl font-semibold">login Now!</legend>
  <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
  <label className="label text-lg">Email</label>
  <input type="email" 
  {...register('email',{required:true})}
  className="input" placeholder="type your valid email" />

  <label className="label text-lg">password</label>
  <input type="password"
  {...register('password',{required:true})}
  className="input" placeholder="Type your password" />
<input type="submit" value="Login" className='btn mt-2 w-full btn-primary btn-outline'/>
 </form>
 <p className="text-center border-r-2 border-gray-400 ">OR</p>
          
          <button onClick={signWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
          <FcGoogle size={20}/>
           Login with Google
         </button>
  <div>
    <h1 className='text-sm'>If you Do not have an account <Link href={'register'} className='text-blue-700 hover:underline font-semibold'>Registration</Link></h1>
  </div>
</fieldset>

        
         
        </animated.div>
    );
};

export default LoginPage;