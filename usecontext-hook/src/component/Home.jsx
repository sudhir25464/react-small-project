import React from 'react'
import Card from '../component/Card'
import UserData from '../context/UserData';





const Home = () => {



 
    


  const Header = () => (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-3xl font-bold text-gray-800">Learn conText Hook</h1>
      </div>
    </header>
  );
  
  const Hero = () => (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-2">Welcome to Our page </h2>
        <p className="text-lg">We provide the best way to use context Hook download project and UnderStand !</p>
      </div>
    </section>
  );

  return (
    <>
       <div className='bg-slate-200 min-h-[100vh]'>
        <Header/>
        <Hero/>
        
      <UserData>
      <Card/>
      </UserData>
     
    
       </div>
      </>
  )
}

export default Home


  