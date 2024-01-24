
'use client'
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Input,Button} from "@nextui-org/react";

// import {  toast } from 'react-toastify';
import Layout from '@/components/layout/page'
import { useRouter } from 'next/navigation'
const Login = () => {
  const router = useRouter()

   const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 const loginUser = async(values)=> {
 const res=  await fetch('http://localhost:4000/login/',{
    method: 'POST',
    headers: {'Content-Type':'application/json' },
    body: JSON.stringify(values)
  })
  const data = await res.json()
  if(res.status == 200) {
    router.push('/login')
  }
  toast(data.msg)
  
 }
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      password: '',
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      loginUser(values)
    },
  });

  return (
   
  <div className='mt-6 w-80 border-solid m-auto m-0 '>
      <div className='mt-5 w-80 border-solid m-auto m-0 '>
          <div className='grid grid-rows-2 gap-3'>
           <Button className='bg-tw-blue text-white'>
             <span className=' border-white'>
            <FaFacebookF />
             </span>
            <p>LOG IN WITH FACEBOOK</p>
             </Button>
           <Button className='bg-tw-red text-white'>
           <FaGoogle />
           <p>LOG IN WITH GOOGLE</p>
           </Button>
           </div>
        </div>
        
    <form  onSubmit={formik.handleSubmit}>
      <h2 className="my-8">Log In</h2>
      <Input 
      className='my-6 pl-4 block w-full rounded-md border text-blueGray-600 p-2 text-md'
       id="phoneNumber"
       label="Phonenumber"
       name="phoneNumber"
       type="text"
       onChange={formik.handleChange}
       value={formik.values.phoneNumber}
       
      />
        {formik?.errors.phoneNumber}
         <Input 
         className='my-6 pl-4 block w-full rounded-md border text-blueGray-600 p-2 text-md'
        type='password' 
        id="password"
       name="password"
       onChange={formik.handleChange}
       value={formik.values.password}
      label="password" />
      <Button type="submit" className='bg-tw-blue text-white rounded-md px-4 py-2 border-solid w-80 mt-4'>Submit</Button>
    </form>
    
    </div>
    
  
  );
};

export default Login
