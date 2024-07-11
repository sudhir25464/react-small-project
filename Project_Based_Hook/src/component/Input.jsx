import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
function Input() {

   const [data , setData] = useState({
    fname:'',
    email:'',
    numbar:''

})

    const InputRef = useRef('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value
        });
      };
 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.email=='' || data.numbar == '' || data.numbar == ''){
            alert('Please enter all details')
        }else{

        
        // e.preventDefault();

      console.log(data);
     
    //   setData(null);
      
        }

    }


  

    return (
        <>

            <section >
                <div className=' grid sm:grid-cols-2 p-2 sm:p-5 bg-slate-100 h-[100vh]'>
                    <div className='bg-blue-900 font-semibold text-white rounded sm:mt-5'>
                        <div className='p-2 sm:p-3'>
                            <p className='text-3xl text-blue-200 font-bold'>Enter Your Contact Details</p>
                            <p className='mt-3 pt-3 sm:pt-5'>Please provide your contact information below. Ensuring accurate details will help us respond to your inquiry efficiently. Submit your information to receive prompt assistance</p>
                        </div>
                    </div>
                    <div className='p-2 sm:p-4 pt-20'>
                       
                       <form onSubmit={handleSubmit}>
                        <div className='mt-5'>
                            <label  className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                             
                         
                             value={data.fname}
                             name="fname"
                             onChange={handleChange}
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className='mt-5'>
                            <label  className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                               
                              value={data.email}
                              onChange={handleChange}

                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        <div className='mt-5'>

                            <label  className="block text-sm font-medium text-gray-700">Phone No</label>
                            <input
                           
                           value={data.numbar}
                           onChange={handleChange}
                                name="numbar"
                                type="text"
                                placeholder="Enter your contact"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className='mt-5'>
                            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Input
