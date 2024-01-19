import React from 'react'
import Nav from '@/components/navBar/page'
import Footer from '../footer/page'
const Layout = ({children}) => {
  return (
    <Layout>
    <div><Nav/>
    <section className='text-gray-600 body-font relative'>
      
      {/* <Login/> */}
      {children}
      <Footer/>
    </section>
    </div>
    </Layout>
  )
}


export default Layout
