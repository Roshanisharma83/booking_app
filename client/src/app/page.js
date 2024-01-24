import React from 'react'
import Nav from '@/components/navBar/page'
import RootLayout from './layout'
import Layout from '@/components/layout/page'

const page = () => {
  return (
    <div>
      <Layout>
        
      <section className="text-gray-600 body-font">
        
  <div className="container px-5 py-24 mx-auto">
  
    <div className="flex flex-col text-center w-full mb-20">
    <h1>Trusted by the largest travel brands</h1>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Top destination</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our top destinations</p>
    </div>
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <img src='./argentina.jpeg'/>
        </div>
        <p>Argentina</p>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src='./tanzania.jpeg'/>
        </div>
        <p>Tanzania</p>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src='./sri-lanka.jpeg'/>
        </div>
        <p>Sri-lanka</p>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
        <img src='./iceland.jpeg'/>
        </div>
        <p>Iceland</p>
      </div>
    </div>
  </div>
</section>
      </Layout>
   
     
      </div>
  )
}

export default page
