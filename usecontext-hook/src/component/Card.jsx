import React from 'react'
import { useContext } from 'react';
import UserContext from '../context/UserContext';


const Card = () => {

 
  const value = useContext(UserContext)

  console.log(value)

    const cards = [
        { title: 'Service One', description: 'Description of service one.'  },
        { title: 'Service Two', description: 'Description of service two.' },
        { title: 'Service Three', description: 'Description of service three.' },
      ];

  return (
    <section className="container mx-auto px-6 py-10">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 ">Our Team member</h3>
    <div className="flex flex-wrap -mx-4">
      {cards.map((cards, index) => (
        <div key={index} className="w-full md:w-1/3 px-4 mb-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* <img className="w-full h-48 object-cover" src={card.image} alt={card.title} /> */}
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{cards.title}</h4>
              <p className="text-gray-700">{cards.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div>
      <div className='p-2 border'>
        <p className='text-lg font-semibold bg-slate-200'>Owner Details  {value.role}</p>
        <p className=''> Name : {value.name}</p>
        <p>email: {value.email}</p>
        <p>age: {value.age}</p>
       
      </div>
    </div>
  </section>
  )
}

export default Card
