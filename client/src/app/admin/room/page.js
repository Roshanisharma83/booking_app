'use client'
import React from 'react'
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 import {Input} from "@nextui-org/react";
 import {Select, SelectItem} from "@nextui-org/react";

  const subHotels = [
    {label: "Twin", value: "cat", description: "The second most popular pet in the world"},
    {label: "Suite room", value: "dog", description: "The most popular pet in the world"},
    {label: "Deluxe", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
    {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
  ];
  
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 export const Categories = () => {
  return(
   <div>
     <h1>Add PRoduct</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <div className='formfields'>
           <Input label="Product Name" placeholder="Product Name" />

           <Select
      label="Favorite Animal"
      placeholder="Select an animal"
      selectionMode="multiple"
      className="max-w-xs"
    >
      {subHotels.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
    <Input label="Product Price" placeholder="Product Price" />
    <Input label="Stock Quantity" placeholder="Stock Quantity" />
    <input type="file"/>
          </div>

          <div className='formfields'>
       
          </div>
         
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 )}
const page = () => {
    
  return (
    <div>
<Categories/>

    </div>
  )
}

export default page