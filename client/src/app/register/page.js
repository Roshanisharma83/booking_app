'use client'
import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {Input,Button} from "@nextui-org/react";
import {  toast } from 'react-toastify';
import Layout from '@/components/layout/page';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
const Signup = () => {
  const router = useRouter()
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });
 
 const registerUser = async(values)=> {
 const res=  await fetch('http://localhost:4000/register/',{
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
    fullName:'',
    phoneNumber: '',
    email: '',
    password: '',
    role:''
     
   },
   validationSchema:SignupSchema,
   onSubmit: values => {
    registerUser(values)
   },
 });
 console.log(formik)
  return (
    <div>
      {/* register form */}
     
      <form className='mt-6 w-80 border-solid m-auto my-8' onSubmit={formik.handleSubmit}> 
        <h1 className="text-2xl font-bold  text-gray-800 w-80 mt-4 m-auto ">
          Sign up with email
        </h1>
        <Input 
          className='my-6 pl-4 block w-full rounded-md border text-blueGray-600 p-2 text-md'
          id="fullname"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          label="fullname"          
        />
        {formik?.errors.fullName}
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
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="email" 
          autoComplete="off"
        />
        {formik?.errors.email}
        <Input 
          className='my-6 pl-4 block w-full rounded-md border text-blueGray-600 p-2 text-md'
          type='password' 
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          label="password" 
        />
        <Input 
          className='my-6 pl-4 block w-full rounded-md border text-blueGray-600 p-2 text-md'
          id="role"
          name="role"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.role}
          label="role" />
        <Button type='submit'className='bg-blue-800 text-white rounded-md px-4 py-2 border-solid w-80'>SIGNUP</Button>  
      </form>
   </div>
  );
};
export default Signup