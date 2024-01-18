import Image from 'next/image'
import Nav from '@/components/navBar/page'
import 'tailwindcss/tailwind.css'
import Footer from '@/components/footer/page'
import Login from './login/page'


export default function Home() {
  return (
    <div>
      <Nav/>
      <div className='h-96'>jhjhjh</div>
      {/* <Login/> */}
      <Footer/>
    </div>
  )
}
